"use client";

import { ArrowLeft, HelpCircle, Send } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function SupportPage() {
  useEffect(() => {

    // Add custom styles for the contact form
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      /* Contact Support Form Styles */
      #contact-form {
        max-width: 480px;
        margin: 0 auto;
        background: #1e1e2a;
        border-radius: 16px;
        padding: 32px;
        border: 1px solid rgba(139, 92, 246, 0.2);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      }
      
      #contact-form .form-group {
        margin-bottom: 16px;
      }
      
      #contact-form label {
        display: block;
        color: #ddd;
        font-weight: 500;
        margin-bottom: 6px;
        font-size: 14px;
      }
      
      #contact-form input,
      #contact-form textarea {
        width: 100%;
        background: #1e1e2a;
        color: #fff;
        border: 1px solid rgba(139, 92, 246, 0.3);
        border-radius: 8px;
        padding: 12px 16px;
        font-size: 14px;
        transition: all 0.3s ease;
        font-family: inherit;
      }
      
      #contact-form input:focus,
      #contact-form textarea:focus {
        outline: none;
        border-color: #8b5cf6;
        box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
      }
      
      #contact-form input::placeholder,
      #contact-form textarea::placeholder {
        color: #9ca3af;
      }
      
      #contact-form textarea {
        resize: vertical;
        min-height: 100px;
      }
      
      #contact-form .submit-btn {
        width: 100%;
        background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
        color: #ffffff;
        border: none;
        border-radius: 50px;
        padding: 14px 24px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin-top: 8px;
      }
      
      #contact-form .submit-btn:hover {
        background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
      }
      
      #contact-form .submit-btn:active {
        transform: translateY(0);
      }
      
      #contact-form .submit-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }
      
      #contact-form .form-status {
        margin-top: 16px;
        padding: 12px 16px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        transition: all 0.3s ease;
        display: none;
      }
      
      #contact-form .form-status.success {
        background: rgba(34, 197, 94, 0.1);
        color: #22c55e;
        border: 1px solid rgba(34, 197, 94, 0.3);
        display: block;
      }
      
      #contact-form .form-status.error {
        background: rgba(239, 68, 68, 0.1);
        color: #ef4444;
        border: 1px solid rgba(239, 68, 68, 0.3);
        display: block;
      }
      
      #contact-form .form-status.sending {
        background: rgba(139, 92, 246, 0.1);
        color: #8b5cf6;
        border: 1px solid rgba(139, 92, 246, 0.3);
        display: block;
      }
      
      #contact-form .required {
        color: #ef4444;
      }
      

    `;
    document.head.appendChild(styleSheet);

    // Form submission script - UseBasin Integration
    const formScript = document.createElement('script');
    formScript.textContent = `
      document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('contact-form');
        const statusElement = document.querySelector('.form-status');
        const submitBtn = document.querySelector('.submit-btn');
        
        if (form) {
          form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Email validation
            const emailInput = document.getElementById('email');
            const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (!emailInput.value || !emailRegex.test(emailInput.value)) {
              statusElement.textContent = 'Please enter a valid email address.';
              statusElement.className = 'form-status error';
              return;
            }
            
            // Update status to sending
            statusElement.textContent = 'Sending message...';
            statusElement.className = 'form-status sending';
            
            // Disable submit button
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Sending...';
            
            try {
              const formData = new FormData(form);
              
              const response = await fetch('https://usebasin.com/f/c08d72953425', {
                method: 'POST',
                body: formData,
                headers: {
                  'Accept': 'application/json'
                }
              });
              
              if (response.ok) {
                // Redirect to our success page
                window.location.href = '/support/success';
                return;
                
                // reCAPTCHA is handled automatically by UseBasin
              } else {
                // UseBasin error handling
                let errorMessage = 'There was a problem sending your message. Please try again.';
                
                try {
                  const data = await response.json();
                  if (data.error || data.message) {
                    errorMessage = data.error || data.message;
                  }
                } catch (jsonError) {
                  // If response is not JSON, use default message
                  console.log('Response is not JSON, using default error message');
                }
                
                statusElement.textContent = errorMessage;
                statusElement.className = 'form-status error';
              }
            } catch (error) {
              console.error('Form submission error:', error);
              statusElement.textContent = 'Failed to send message. Please check your connection and try again.';
              statusElement.className = 'form-status error';
            } finally {
              // Re-enable submit button
              submitBtn.disabled = false;
              submitBtn.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>Submit';
            }
          });
        }
      });
    `;
    document.head.appendChild(formScript);

    return () => {
      // Cleanup scripts when component unmounts
      if (document.head.contains(styleSheet)) {
        document.head.removeChild(styleSheet);
      }
      if (document.head.contains(formScript)) {
        document.head.removeChild(formScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-void-primary pt-20">
      {/* Header */}
      <div className="bg-card border-b border-border/50">
        <div className="container mx-auto px-4 py-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-accent/10 rounded-lg">
              <HelpCircle className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Contact Support</h1>
              <p className="text-xl text-muted-foreground">Get help with Devomon products and services</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Support Options Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <HelpCircle className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold mb-2">Technical Support</h3>
              <p className="text-sm text-muted-foreground">
                Issues with pre-registration, account problems, or technical difficulties
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <Send className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold mb-2">General Inquiries</h3>
              <p className="text-sm text-muted-foreground">
                Questions about Devomon universe, release dates, or partnerships
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <HelpCircle className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-semibold mb-2">Bug Reports</h3>
              <p className="text-sm text-muted-foreground">
                Report bugs, suggest features, or provide feedback on our products
              </p>
            </div>
          </div>

          {/* Main Contact Form Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our support team will get back to you as soon as possible.
                </p>
              </div>

              {/* HTML Form with UseBasin Integration */}
              <div dangerouslySetInnerHTML={{
                __html: `
                  <form id="contact-form" action="https://usebasin.com/f/c08d72953425" method="POST" novalidate>
                    <!-- UseBasin Success Redirect URL -->
                    <input type="hidden" name="_redirect" value="https://devomon.io/support/success" />
                    
                    <div class="form-group">
                      <label for="name">Full Name <span class="required">*</span></label>
                      <input 
                        type="text" 
                        id="name"
                        name="name" 
                        required 
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div class="form-group">
                      <label for="email">Email <span class="required">*</span></label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        required 
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div class="form-group">
                      <label for="message">Message <span class="required">*</span></label>
                      <textarea 
                        id="message"
                        name="message" 
                        rows="4" 
                        required 
                        placeholder="Describe your issue or question in detail..."
                      ></textarea>
                    </div>
                    
                    <div class="form-group">
                      <label style="display: flex; align-items: flex-start; gap: 8px; cursor: pointer; font-size: 13px; line-height: 1.4;">
                        <input 
                          type="checkbox" 
                          name="data_storage_agreed" 
                          required 
                          style="margin-top: 2px; accent-color: #8b5cf6; width: 16px; height: 16px; flex-shrink: 0;"
                        />
                        <span style="flex: 1;">I agree to you storing my details so you can respond and keep in touch. See our <a href="https://www.devomon.io/privacy" target="_blank" style="color: #8b5cf6; text-decoration: underline;">Privacy Policy</a> <span class="required">*</span></span>
                      </label>
                    </div>
                    
                    <!-- reCAPTCHA handled automatically by UseBasin -->
                    
                    <button type="submit" class="submit-btn">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                      </svg>
                      Submit
                    </button>
                    
                    <p class="form-status" aria-live="polite"></p>
                  </form>
                `
              }} />

              {/* Alternative Contact Methods */}
              <div className="mt-8 pt-6 border-t border-border/50 text-center">
                <h3 className="font-semibold mb-4">Other Ways to Reach Us</h3>
                <div className="flex flex-col gap-3">
                  <Link 
                    href="/faq"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-muted/20 hover:bg-accent/20 hover:text-accent transition-all duration-300 rounded-lg text-sm font-medium"
                  >
                    <HelpCircle className="w-4 h-4" />
                    Frequently Asked Questions
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Response Time Notice */}
          <div className="mt-12 bg-accent/5 rounded-lg p-6 border border-accent/20 text-center max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">
              <strong>Response Time:</strong> We typically respond to support requests within 24-48 hours during business days. 
              For urgent technical issues, please reach out via email for faster assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}