"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { X, Check, Shield, GamepadIcon, Zap, Sword, ExternalLink } from "lucide-react";
import Image from "next/image";

interface PreRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PreRegisterModal({ isOpen, onClose }: PreRegisterModalProps) {
  const [email, setEmail] = useState("");
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    age: false,
    updates: false,
    dataStorage: false,
  });
  const [platforms, setPlatforms] = useState({
    pc: false,
    mobile: false,
    console: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleAgreementChange = (key: keyof typeof agreements) => {
    setAgreements((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePlatformChange = (key: keyof typeof platforms) => {
    setPlatforms((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setSubmitError("Please enter a valid email address.");
      return;
    }

    if (!agreements.terms || !agreements.privacy || !agreements.age || !agreements.dataStorage) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Method 1: Try fetch with proper headers
      const selectedPlatforms = Object.entries(platforms)
        .filter(([, selected]) => selected)
        .map(([platform]) => platform)
        .join(", ");

      // Create URL-encoded form data (UseBasin prefers this over FormData)
      const formData = new URLSearchParams();
      formData.append("email", email);
      formData.append("terms_accepted", "true");
      formData.append("privacy_accepted", "true");
      formData.append("age_confirmed", "true");
      formData.append("data_storage_agreed", "true");
      formData.append("newsletter_subscribed", agreements.updates ? "true" : "false");
      formData.append("preferred_platforms", selectedPlatforms);
      formData.append("registration_date", new Date().toISOString());
      formData.append("source", "Devomon Website Pre-Registration");

      const response = await fetch("https://usebasin.com/f/332c3a8999d1", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (response.ok) {
        setShowSuccess(true);
      } else {
        // If fetch fails, fallback to form submission
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Fetch method failed:", error);

      // Fallback: Use hidden form submission
      try {
        await submitViaHiddenForm();
      } catch (fallbackError) {
        console.error("Fallback submission failed:", fallbackError);
        setSubmitError("Unable to submit registration. Please try again or contact support.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitViaHiddenForm = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (!formRef.current) {
        reject(new Error("Form reference not available"));
        return;
      }

      // Create a hidden iframe for form submission
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.name = "hidden-form-target";
      document.body.appendChild(iframe);

      // Set form target to iframe
      formRef.current.target = "hidden-form-target";
      formRef.current.action = "https://usebasin.com/f/332c3a8999d1";
      formRef.current.method = "POST";

      const cleanup = () => {
        document.body.removeChild(iframe);
        if (formRef.current) {
          formRef.current.target = "";
          formRef.current.action = "";
        }
      };

      // Listen for iframe load (indicates form submission completed)
      iframe.onload = () => {
        cleanup();
        setShowSuccess(true);
        resolve();
      };

      iframe.onerror = () => {
        cleanup();
        reject(new Error("Form submission via iframe failed"));
      };

      // Submit the form
      try {
        formRef.current.submit();
      } catch (error) {
        cleanup();
        reject(error);
      }
    });
  };

  const handleReset = () => {
    setEmail("");
    setAgreements({ terms: false, privacy: false, age: false, updates: false, dataStorage: false });
    setPlatforms({ pc: false, mobile: false, console: false });
    setShowSuccess(false);
    setIsSubmitting(false);
    setSubmitError(null);
    onClose();
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isFormValid = email && emailRegex.test(email) && agreements.terms && agreements.privacy && agreements.age && agreements.dataStorage;

  if (showSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={handleReset}>
        <DialogContent className="max-w-2xl mx-auto bg-background border-2 border-primary/30 rounded-none shadow-2xl shadow-primary/20 max-h-[90vh] overflow-y-auto [&>button]:hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>Pre-Registration Successful</DialogTitle>
            <DialogDescription>Your pre-registration for Devomon has been completed successfully.</DialogDescription>
          </DialogHeader>

          {/* Single Close Button */}
          <Button variant="ghost" size="sm" onClick={handleReset} className="absolute top-4 right-4 z-50 text-primary hover:text-primary-foreground hover:bg-primary/20 border border-primary/30 w-10 h-10 p-0">
            <X className="w-5 h-5" />
          </Button>

          {/* Success Content */}
          <div className="relative p-8 bg-void-dark">
            {/* Header with Devomon Logo */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <Image src="/images/devomon-main-logo.png" alt="Devomon" width={64} height={64} className="drop-shadow-2xl" />
              </div>

              {/* Success Title with Gaming Effect */}
              <div className="relative mb-6">
                <h2 className="text-4xl font-bold text-primary mb-2 tracking-wider">REGISTRATION</h2>
                <h3 className="text-5xl font-bold text-white mb-4 tracking-wider drop-shadow-lg">COMPLETE</h3>

                {/* Angular divider */}
                <div className="flex items-center justify-center my-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
                  <div className="mx-4 w-2 h-2 bg-primary rotate-45"></div>
                  <div className="h-px bg-gradient-to-r from-primary via-primary to-transparent w-32"></div>
                </div>
              </div>
            </div>

            {/* Success Icon with Gaming Aesthetic */}
            <div className="relative mx-auto mb-8 w-32 h-32 flex items-center justify-center">
              {/* Hexagonal background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 transform rotate-0" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}></div>
              <div className="absolute inset-2 bg-gradient-to-br from-primary/60 to-accent/60 transform rotate-0" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}></div>
              <div className="relative z-10 bg-primary rounded-full w-16 h-16 flex items-center justify-center shadow-2xl">
                <Check className="w-8 h-8 text-white" />
              </div>

              {/* Animated particles */}
              <div className="absolute top-0 left-1/2 w-1 h-1 bg-primary rounded-full animate-ping delay-0"></div>
              <div className="absolute top-4 right-0 w-1 h-1 bg-accent rounded-full animate-ping delay-300"></div>
              <div className="absolute bottom-4 left-0 w-1 h-1 bg-primary rounded-full animate-ping delay-600"></div>
              <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-accent rounded-full animate-ping delay-900"></div>
            </div>

            {/* Welcome Message */}
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-white mb-4 tracking-wide">WELCOME TO CALLISTO</h4>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto">
                You&apos;re now registered for <span className="text-primary font-semibold">Devomon: Callisto</span>. Prepare for tactical battles in a dark fantasy universe.
              </p>
            </div>

            {/* Gaming Stats Display */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-card/50 border border-primary/20 transform skew-x-0 hover:bg-card/70 transition-all">
                <Sword className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-white font-bold">COMBAT</div>
                <div className="text-xs text-gray-400">Real-time</div>
              </div>
              <div className="text-center p-4 bg-card/50 border border-accent/20 transform skew-x-0 hover:bg-card/70 transition-all">
                <Shield className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-white font-bold">STRATEGY</div>
                <div className="text-xs text-gray-400">Tactical</div>
              </div>
              <div className="text-center p-4 bg-card/50 border border-primary/20 transform skew-x-0 hover:bg-card/70 transition-all">
                <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-white font-bold">POWER</div>
                <div className="text-xs text-gray-400">Awakening</div>
              </div>
            </div>

            {/* Gaming-style Footer */}
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-primary font-bold tracking-wider">
                <GamepadIcon className="w-5 h-5 mr-2" />
                READY FOR CALLISTO
              </div>
            </div>

            {/* Background Gaming Effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute top-10 left-10 w-20 h-20 border border-primary/10 transform rotate-45 animate-pulse"></div>
              <div className="absolute top-20 right-16 w-16 h-16 border border-accent/10 transform rotate-12 animate-pulse delay-500"></div>
              <div className="absolute bottom-20 left-20 w-12 h-12 border border-primary/10 transform -rotate-45 animate-pulse delay-1000"></div>
              <div className="absolute bottom-16 right-12 w-24 h-24 border border-accent/10 transform rotate-30 animate-pulse delay-700"></div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl mx-auto bg-background border-2 border-primary/30 rounded-none shadow-2xl shadow-primary/20 max-h-[90vh] overflow-y-auto [&>button]:hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>Pre-Registration Form</DialogTitle>
          <DialogDescription>Sign up for pre-registration to receive updates about Devomon.</DialogDescription>
        </DialogHeader>

        {/* Single Close Button */}
        <Button variant="ghost" size="sm" onClick={onClose} className="absolute top-4 right-4 z-50 text-primary hover:text-primary-foreground hover:bg-primary/20 border border-primary/30 w-10 h-10 p-0">
          <X className="w-5 h-5" />
        </Button>

        {/* Form Content */}
        <div className="relative p-8 bg-void-dark">
          {/* Header with Devomon Logo */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Image src="/images/devomon-main-logo.png" alt="Devomon" width={64} height={64} className="drop-shadow-2xl" />
            </div>

            {/* Gaming Title */}
            <div className="relative mb-6">
              <h2 className="text-4xl font-bold text-primary mb-2 tracking-wider">ENTER</h2>
              <h3 className="text-5xl font-bold text-white mb-4 tracking-wider drop-shadow-lg">CALLISTO</h3>

              {/* Angular divider */}
              <div className="flex items-center justify-center my-6">
                <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-32"></div>
                <div className="mx-4 w-2 h-2 bg-primary rotate-45"></div>
                <div className="h-px bg-gradient-to-r from-primary via-primary to-transparent w-32"></div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {submitError && (
            <div className="mb-6 p-4 bg-destructive/20 border border-destructive/50 text-destructive text-sm rounded-none">
              <strong>Registration Failed:</strong> {submitError}
            </div>
          )}

          {/* UseBasin Form */}
          <form ref={formRef} onSubmit={handleSubmit}>
            {/* Email Input with Gaming Style */}
            <div className="mb-8">
              <label className="block text-primary font-bold mb-3 tracking-wide">COMMANDER EMAIL</label>
              <div className="relative">
                <Input type="email" name="email" placeholder="enter.your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-card/50 border-2 border-primary/30 text-white placeholder-gray-500 px-4 py-4 focus:border-primary focus:bg-card/70 transition-all rounded-none text-lg" />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-2 h-2 bg-primary animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Agreements with Gaming Checkboxes */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4 p-4 border border-primary/20 bg-card/30 hover:bg-card/50 transition-all">
                <Checkbox id="terms" checked={agreements.terms} onCheckedChange={() => handleAgreementChange("terms")} className="mt-1 border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary" required />
                <label htmlFor="terms" className="text-white text-sm leading-relaxed cursor-pointer">
                  I accept the{" "}
                  <Link href="/terms" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-accent transition-colors inline-flex items-center gap-1 underline decoration-primary/50 hover:decoration-accent/80" onClick={(e) => e.stopPropagation()}>
                    Terms of Service
                    <ExternalLink className="w-3 h-3" />
                  </Link>{" "}
                  and acknowledge the rules of combat.
                </label>
              </div>

              <div className="flex items-start space-x-4 p-4 border border-primary/20 bg-card/30 hover:bg-card/50 transition-all">
                <Checkbox id="privacy" checked={agreements.privacy} onCheckedChange={() => handleAgreementChange("privacy")} className="mt-1 border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary" required />
                <label htmlFor="privacy" className="text-white text-sm leading-relaxed cursor-pointer">
                  I agree to the{" "}
                  <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-accent transition-colors inline-flex items-center gap-1 underline decoration-primary/50 hover:decoration-accent/80" onClick={(e) => e.stopPropagation()}>
                    Privacy Policy
                    <ExternalLink className="w-3 h-3" />
                  </Link>{" "}
                  for data collection and tactical analysis.
                </label>
              </div>

              <div className="flex items-start space-x-4 p-4 border border-primary/20 bg-card/30 hover:bg-card/50 transition-all">
                <Checkbox id="age" checked={agreements.age} onCheckedChange={() => handleAgreementChange("age")} className="mt-1 border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary" required />
                <label htmlFor="age" className="text-white text-sm leading-relaxed cursor-pointer">
                  I confirm that I am of legal age to participate in this combat simulation.
                </label>
              </div>

              <div className="flex items-start space-x-4 p-4 border border-accent/20 bg-card/20 hover:bg-card/40 transition-all">
                <Checkbox id="updates" checked={agreements.updates} onCheckedChange={() => handleAgreementChange("updates")} className="mt-1 border-accent/50 data-[state=checked]:bg-accent data-[state=checked]:border-accent" />
                <label htmlFor="updates" className="text-white text-sm leading-relaxed cursor-pointer">
                  <span className="text-accent font-semibold">Optional NEWSLETTER:</span> Get the latest news, updates and exclusive content about Devomon.
                </label>
              </div>

              <div className="flex items-start space-x-4 p-4 border border-primary/20 bg-card/30 hover:bg-card/50 transition-all">
                <Checkbox id="dataStorage" checked={agreements.dataStorage} onCheckedChange={() => handleAgreementChange("dataStorage")} className="mt-1 border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary" required />
                <label htmlFor="dataStorage" className="text-white text-sm leading-relaxed cursor-pointer">
                  I agree to you storing my details so you can respond and keep in touch. See our{" "}
                  <Link href="https://www.devomon.io/privacy" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-accent transition-colors inline-flex items-center gap-1 underline decoration-primary/50 hover:decoration-accent/80" onClick={(e) => e.stopPropagation()}>
                    Privacy Policy
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </label>
              </div>
            </div>

            {/* Platform Selection with Gaming Icons */}
            <div className="mb-8">
              <p className="text-primary font-bold mb-4 tracking-wide">PREFERRED COMBAT PLATFORMS</p>
              <div className="grid grid-cols-3 gap-4">
                <div className={`relative p-4 border-2 transition-all cursor-pointer ${platforms.pc ? "border-primary bg-primary/20" : "border-primary/30 bg-card/30 hover:border-primary/50"}`} onClick={() => handlePlatformChange("pc")}>
                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto mb-2 bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">PC</span>
                    </div>
                    <span className="text-white font-semibold">Desktop</span>
                  </div>
                  {platforms.pc && <div className="absolute top-2 right-2 w-2 h-2 bg-primary"></div>}
                </div>

                <div className={`relative p-4 border-2 transition-all cursor-pointer ${platforms.mobile ? "border-primary bg-primary/20" : "border-primary/30 bg-card/30 hover:border-primary/50"}`} onClick={() => handlePlatformChange("mobile")}>
                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto mb-2 bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">📱</span>
                    </div>
                    <span className="text-white font-semibold">Mobile</span>
                  </div>
                  {platforms.mobile && <div className="absolute top-2 right-2 w-2 h-2 bg-primary"></div>}
                </div>

                <div className={`relative p-4 border-2 transition-all cursor-pointer ${platforms.console ? "border-primary bg-primary/20" : "border-primary/30 bg-card/30 hover:border-primary/50"}`} onClick={() => handlePlatformChange("console")}>
                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto mb-2 bg-primary/20 flex items-center justify-center">
                      <GamepadIcon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-white font-semibold">Console</span>
                  </div>
                  {platforms.console && <div className="absolute top-2 right-2 w-2 h-2 bg-primary"></div>}
                </div>
              </div>
            </div>

            {/* Submit Button with Epic Gaming Style */}
            <div className="text-center">
              <Button type="submit" disabled={!isFormValid || isSubmitting} className={`relative px-12 py-4 text-lg font-bold tracking-wider transition-all duration-300 border-2 rounded-none ${isFormValid && !isSubmitting ? "bg-gradient-to-r from-primary to-accent text-white border-primary hover:from-accent hover:to-primary hover:scale-105 hover:shadow-2xl hover:shadow-primary/50" : "bg-card/30 text-gray-500 border-gray-600 cursor-not-allowed"}`}>
                {isFormValid && !isSubmitting && <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse"></div>}
                <span className="relative flex items-center">
                  <Sword className="w-5 h-5 mr-3" />
                  {isSubmitting ? "ENTERING CALLISTO..." : "ENTER CALLISTO"}
                </span>
              </Button>
            </div>

            {/* Hidden fields for UseBasin - populated by JavaScript */}
            <input type="hidden" name="terms_accepted" value={agreements.terms ? "true" : "false"} />
            <input type="hidden" name="privacy_accepted" value={agreements.privacy ? "true" : "false"} />
            <input type="hidden" name="age_confirmed" value={agreements.age ? "true" : "false"} />
            <input type="hidden" name="data_storage_agreed" value={agreements.dataStorage ? "true" : "false"} />
            <input type="hidden" name="newsletter_subscribed" value={agreements.updates ? "true" : "false"} />
            <input
              type="hidden"
              name="preferred_platforms"
              value={Object.entries(platforms)
                .filter(([, selected]) => selected)
                .map(([platform]) => platform)
                .join(", ")}
            />
            <input type="hidden" name="registration_date" value={new Date().toISOString()} />
            <input type="hidden" name="source" value="Devomon Website Pre-Registration" />
          </form>

          {/* Background Gaming Effects */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 border border-primary/10 transform rotate-45 animate-pulse"></div>
            <div className="absolute top-20 right-16 w-16 h-16 border border-accent/10 transform rotate-12 animate-pulse delay-500"></div>
            <div className="absolute bottom-20 left-20 w-12 h-12 border border-primary/10 transform -rotate-45 animate-pulse delay-1000"></div>
            <div className="absolute bottom-16 right-12 w-24 h-24 border border-accent/10 transform rotate-30 animate-pulse delay-700"></div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
