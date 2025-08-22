"use client";

import { useState } from "react";
import { ArrowLeft, Briefcase, Upload, Mail, Phone, User, FileText, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import Link from "next/link";

// Streamlined Job Data - Easy to edit
const jobListings = [
  {
    id: "vfx-artist",
    title: "VFX Artist",
    department: "Art & Animation",
    type: "Full-time / Part-time",
    keyRequirements: ["3+ years VFX experience", "Unreal Engine 5 expertise", "Real-time VFX portfolio", "Game development pipeline", "Particle systems & shaders"],
    description: "Create stunning visual effects for our Action-RPG Devomon: Callisto. Work with cutting-edge real-time VFX in Unreal Engine 5 to bring magical abilities and environmental effects to life.",
    responsibilities: ["Design and implement visual effects for gameplay abilities", "Create environmental and atmospheric effects", "Optimize VFX performance for target platforms", "Collaborate with artists and developers", "Maintain visual consistency across the game"],
  },
  {
    id: "animation-artist",
    title: "Animation Artist",
    department: "Art & Animation",
    type: "Full-time / Part-time",
    keyRequirements: ["3+ years character animation", "RPG combat experience", "Maya/Blender/3ds Max", "Rigging & skinning knowledge", "Game animation constraints"],
    description: "Bring our characters to life with fluid, expressive animations. Create combat sequences, character interactions, and cinematic moments for Devomon: Callisto.",
    responsibilities: ["Create character animations for combat and exploration", "Develop facial animations and lip-sync", "Work with riggers to ensure optimal character setups", "Implement animations in Unreal Engine 5", "Iterate based on gameplay feedback"],
  },
  {
    id: "unreal-developer",
    title: "Unreal Engine Developer",
    department: "Engineering",
    type: "Full-time / Part-time",
    keyRequirements: ["4+ years Unreal Engine", "C++ programming expert", "RPG systems experience", "Performance optimization", "Blueprint visual scripting"],
    description: "Shape the technical foundation of Devomon: Callisto. Build robust RPG systems, combat mechanics, and optimize performance for our Action-RPG experience.",
    responsibilities: ["Develop core gameplay systems and mechanics", "Optimize game performance across platforms", "Implement UI/UX systems and tools", "Debug and resolve technical issues", "Mentor junior developers"],
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time / Part-time",
    keyRequirements: ["3+ years UI/UX design", "Gaming interface experience", "Figma/Adobe Creative Suite", "User research methods", "Responsive design principles"],
    description: "Design intuitive and beautiful user interfaces for Devomon: Callisto. Create seamless user experiences that enhance gameplay and immerse players in our fantasy world.",
    responsibilities: ["Design game UI/UX for menus, HUD, and interfaces", "Conduct user research and usability testing", "Create wireframes, prototypes, and design systems", "Collaborate with developers for implementation", "Ensure accessibility and responsive design"],
  },
  {
    id: "game-designer",
    title: "Game Designer",
    department: "Design",
    type: "Full-time / Part-time",
    keyRequirements: ["3+ years game design", "RPG mechanics expertise", "Balancing & progression", "Documentation skills", "Analytics understanding"],
    description: "Design engaging gameplay mechanics and progression systems for Devomon: Callisto. Balance combat, character development, and player progression to create compelling RPG experiences.",
    responsibilities: ["Design core gameplay mechanics and systems", "Create character progression and skill trees", "Balance combat encounters and difficulty curves", "Document game design specifications", "Analyze player data and iterate on design"],
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    cv: null as File | null,
    dataStorageAgreed: false,
  });

  const handleJobSelect = (jobId: string) => {
    setSelectedJob(jobId);
    // Reset form when selecting new job
    setFormData({
      name: "",
      email: "",
      phone: "",
      coverLetter: "",
      cv: null,
      dataStorageAgreed: false,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Check privacy agreement
    if (!formData.dataStorageAgreed) {
      alert('Please agree to our data storage policy.');
      return;
    }
    
    const job = jobListings.find((j) => j.id === selectedJob);
    console.log("Application submitted for:", job?.title, formData);
    alert(`Application submitted for ${job?.title}!`);
    setSelectedJob(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      coverLetter: "",
      cv: null,
      dataStorageAgreed: false,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, cv: e.target.files![0] }));
    }
  };

  const selectedJobData = jobListings.find((job) => job.id === selectedJob);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="bg-card border-b border-border/50">
        <div className="container mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Join Our Team</h1>
              <p className="text-xl text-muted-foreground">Help us shape the future of Devomon</p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl">We&apos;re building something extraordinary. Join us in bringing the Devomon universe to life through cutting-edge gaming technology and immersive storytelling.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8">
          {/* Job Listings - Narrow Left Column */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Open Positions</h2>

            <div className="space-y-3">
              {jobListings.map((job) => (
                <div key={job.id} className={`p-4 rounded-lg border transition-all cursor-pointer ${selectedJob === job.id ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/50"}`} onClick={() => handleJobSelect(job.id)}>
                  <h3 className="font-semibold mb-1">{job.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{job.department}</p>

                  <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                    <div>{job.type}</div>
                    <div>Remote</div>
                  </div>

                  <Button size="sm" variant={selectedJob === job.id ? "default" : "outline"} className="mt-3 w-full">
                    {selectedJob === job.id ? "Selected" : "View Details"}
                  </Button>
                </div>
              ))}
            </div>

            {/* Company Culture - Compact */}
            <div className="mt-8 p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold mb-3">Why Join Us?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Cutting-edge gaming tech</li>
                <li>• Flexible remote work</li>
                <li>• Competitive compensation</li>
                <li>• Creative freedom</li>
                <li>• Build a gaming universe</li>
              </ul>
            </div>
          </div>

          {/* Job Details & Application - Wide Right Column */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            {selectedJob ? (
              <div className="space-y-6">
                {/* Job Details */}
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-2xl font-bold mb-2">{selectedJobData?.title}</h3>
                  <p className="text-muted-foreground mb-6">{selectedJobData?.description}</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Key Requirements</h4>
                      <ul className="space-y-2">
                        {selectedJobData?.keyRequirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {selectedJobData?.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Application Form */}
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-xl font-bold mb-6">Apply for {selectedJobData?.title}</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2">
                        <User className="w-4 h-4" />
                        Full Name *
                      </label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors" placeholder="Enter your full name" />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium mb-2">
                          <Mail className="w-4 h-4" />
                          Email *
                        </label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors" placeholder="your.email@example.com" />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium mb-2">
                          <Phone className="w-4 h-4" />
                          Phone
                        </label>
                        <input type="tel" value={formData.phone} onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))} className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>

                    {/* CV Upload */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2">
                        <Upload className="w-4 h-4" />
                        CV/Resume *
                      </label>
                      <div className="relative">
                        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        <div className="w-full p-4 border-2 border-dashed border-border rounded-lg text-center cursor-pointer hover:border-primary transition-colors">
                          {formData.cv ? (
                            <div className="text-green-400">
                              <p className="font-medium">✓ {formData.cv.name}</p>
                              <p className="text-sm text-muted-foreground">File uploaded successfully</p>
                            </div>
                          ) : (
                            <div>
                              <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                              <p className="font-medium">Click to upload your CV</p>
                              <p className="text-sm text-muted-foreground">PDF, DOC, DOCX files accepted</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Cover Letter */}
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium mb-2">
                        <FileText className="w-4 h-4" />
                        Cover Letter *
                      </label>
                      <textarea required rows={6} value={formData.coverLetter} onChange={(e) => setFormData((prev) => ({ ...prev, coverLetter: e.target.value }))} className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none" placeholder={`Tell us why you want to join the Devomon team as a ${selectedJobData?.title} and what makes you the perfect fit for this role...`} />
                    </div>

                    {/* Privacy Agreement Checkbox */}
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer text-sm">
                        <input 
                          type="checkbox" 
                          required
                          checked={formData.dataStorageAgreed}
                          onChange={(e) => setFormData((prev) => ({ ...prev, dataStorageAgreed: e.target.checked }))}
                          className="mt-1 accent-primary"
                        />
                        <span>
                          I agree to you storing my details so you can respond and keep in touch. See our{" "}
                          <Link href="https://www.devomon.io/privacy" target="_blank" className="text-primary hover:text-primary/80 underline">
                            Privacy Policy
                          </Link>{" "}
                          <span className="text-red-400">*</span>
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Submit Application
                    </Button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="p-12 bg-card rounded-lg border border-border text-center">
                <Briefcase className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Select a Position</h3>
                <p className="text-muted-foreground">Choose a job opening from the list to view detailed requirements and submit your application.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
