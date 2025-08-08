'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Upload, Briefcase, Mail, Phone, User, FileText } from 'lucide-react';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CareersModal({ isOpen, onClose }: CareersModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    coverLetter: '',
    cv: null as File | null
  });

  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const jobRoles = [
    { value: 'vfx-artist', label: 'VFX Artist' },
    { value: 'animation-artist', label: 'Animation Artist' },
    { value: 'unreal-developer', label: 'Unreal Engine Developer' }
  ];

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: '',
        coverLetter: '',
        cv: null
      });
      setDragActive(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Set form attributes for UseBasin submission
    if (formRef.current) {
      formRef.current.action = 'https://usebasin.com/f/26c0b402101b';
      formRef.current.method = 'POST';
      formRef.current.enctype = 'multipart/form-data';
      
      // Close modal and let UseBasin handle the submission and redirect
      onClose();
      
      // Submit form - UseBasin will handle success page
      formRef.current.submit();
    }
  };

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: '',
      coverLetter: '',
      cv: null
    });
    setDragActive(false);
    setIsSubmitting(false);
    onClose();
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === 'application/pdf' || file.type.includes('document') || file.name.toLowerCase().includes('.doc')) {
        setFormData(prev => ({ ...prev, cv: file }));
      }
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, cv: e.target.files![0] }));
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99999] flex items-center justify-center p-4"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        zIndex: 99999,
        overflow: 'auto'
      }}
    >
      <div className="bg-void-primary bg-fire-essence relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-purple-500/30 void-glow my-auto mx-auto">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-indigo-900/20 rounded-2xl pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
        
        {/* Header */}
        <div className="relative p-6 border-b border-purple-500/20 sticky top-0 bg-void-primary/95 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-600/20 rounded-lg">
                <Briefcase className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Join Our Team
                </h2>
                <p className="text-gray-400 text-sm">Shape the future of Devomon</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              type="button"
              className="p-2 hover:bg-purple-600/20 rounded-lg transition-colors group shrink-0"
            >
              <X className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="relative p-6 space-y-6">
          {/* Name Field */}
          <div>
            <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
              <User className="w-4 h-4" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:border-purple-400 focus:outline-none transition-colors text-white placeholder-gray-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email & Phone Row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                <Mail className="w-4 h-4" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:border-purple-400 focus:outline-none transition-colors text-white placeholder-gray-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:border-purple-400 focus:outline-none transition-colors text-white placeholder-gray-500"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          {/* Role Selection */}
          <div>
            <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
              <Briefcase className="w-4 h-4" />
              Position *
            </label>
            <select
              name="role"
              required
              value={formData.role}
              onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:border-purple-400 focus:outline-none transition-colors text-white"
            >
              <option value="">Select a position</option>
              {jobRoles.map((role) => (
                <option key={role.value} value={role.value} className="bg-gray-900">
                  {role.label}
                </option>
              ))}
            </select>
          </div>

          {/* CV Upload */}
          <div>
            <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
              <Upload className="w-4 h-4" />
              CV/Resume *
            </label>
            <div className="relative">
              <div
                className={`w-full p-6 border-2 border-dashed rounded-lg transition-all cursor-pointer ${
                  dragActive 
                    ? 'border-purple-400 bg-purple-600/10' 
                    : 'border-purple-500/30 bg-gray-900/30'
                } hover:border-purple-400 hover:bg-purple-600/5`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => document.getElementById('cv-upload')?.click()}
              >
                <div className="text-center pointer-events-none">
                  <Upload className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  {formData.cv ? (
                    <div>
                      <p className="text-green-400 text-sm mb-1">✓ {formData.cv.name}</p>
                      <p className="text-gray-500 text-xs">File uploaded successfully</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-gray-300 text-sm mb-1">
                        Drag & drop your CV here, or click to browse
                      </p>
                      <p className="text-gray-500 text-xs">
                        PDF, DOC, DOCX files accepted
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <input
                id="cv-upload"
                name="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer pointer-events-none"
                required
                style={{ pointerEvents: 'none' }}
              />
            </div>
          </div>

          {/* Cover Letter */}
          <div>
            <label className="flex items-center gap-2 text-sm text-gray-300 mb-2">
              <FileText className="w-4 h-4" />
              Cover Letter *
            </label>
            <textarea
              name="cover_letter"
              required
              rows={4}
              value={formData.coverLetter}
              onChange={(e) => setFormData(prev => ({ ...prev, coverLetter: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:border-purple-400 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
              placeholder="Tell us why you want to join the Devomon team and what makes you the perfect fit for this role..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4 sticky bottom-0 bg-void-primary/95 backdrop-blur-sm border-t border-purple-500/20 -mx-6 px-6 pb-6">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg transition-all transform hover:scale-105 void-glow ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Bewerbung wird gesendet...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // Use createPortal to render modal outside of header context
  return createPortal(modalContent, document.body);
}