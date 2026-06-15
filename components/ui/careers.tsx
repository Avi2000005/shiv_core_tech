"use client";

import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase, User, Mail, Phone, UploadCloud, FileText,
  CheckCircle, X, ChevronDown, Sparkles, Clock, MapPin,
  ArrowRight
} from "lucide-react";
import { CardPremium } from "./card-premium";
import { Section } from "./section";
import { Button } from "./button";

interface CareerFormValues {
  position: string;
  fullName: string;
  email: string;
  phone: string;
  resume: File | null;
  coverLetter: string;
  currentSalary?: string;
  expectedSalary?: string;
}

interface JobRole {
  id: string;
  title: string;
  type: string;
  experience: string;
  location?: string;
  glowColor: "primary" | "secondary" | "accent";
}

export function Careers() {
  const [successData, setSuccessData] = useState<CareerFormValues | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const roles: JobRole[] = [
    {
      id: "intern",
      title: "Intern",
      type: "Internship",
      experience: "0-1 Year",
      glowColor: "primary",
    },
    {
      id: "cloud-dev",
      title: "Cloud Developer",
      type: "Full-Time",
      experience: "2+ Years",
      glowColor: "secondary",
    },
    {
      id: "web-dev",
      title: "Web Developer",
      type: "Full-Time",
      experience: "1+ Years",
      glowColor: "accent",
    },
    {
      id: "ai-ml-expert",
      title: "AI/ML Expert",
      type: "Full-Time",
      experience: "3+ Years",
      glowColor: "primary",
    },
    {
      id: "graphic-designer",
      title: "Graphic Designer",
      type: "Full-Time",
      experience: "2+ Years",
      glowColor: "secondary",
    },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareerFormValues>({
    defaultValues: {
      position: "",
      fullName: "",
      email: "",
      phone: "",
      resume: null,
      coverLetter: "",
      currentSalary: "",
      expectedSalary: "",
    },
  });

  // Watch the selected position and uploaded resume file
  // eslint-disable-next-line react-hooks/incompatible-library
  const selectedPosition = watch("position");
  const resumeFile = watch("resume");

  // Register custom field for resume
  useEffect(() => {
    register("resume", {
      required: "Please upload your resume",
      validate: {
        fileSize: (value) => {
          if (!value) return true;
          return value.size <= 5 * 1024 * 1024 || "File size must be less than 5MB";
        },
        fileType: (value) => {
          if (!value) return true;
          const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          ];
          return (
            allowedTypes.includes(value.type) ||
            value.name.endsWith(".pdf") ||
            value.name.endsWith(".doc") ||
            value.name.endsWith(".docx") ||
            "Supported formats: PDF, Word (.doc, .docx)"
          );
        }
      }
    });
  }, [register]);

  // Handle clicking on a job role to auto-select in form
  const handleSelectRole = (roleId: string) => {
    setValue("position", roleId, { shouldValidate: true });
    // Scroll to form smoothly
    const formElement = document.getElementById("careers-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setValue("resume", file, { shouldValidate: true });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setValue("resume", file, { shouldValidate: true });
    }
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setValue("resume", null, { shouldValidate: true });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Form submission handler
  const onSubmit = async (data: CareerFormValues) => {
    setSubmitError(null);
    try {
      const formData = new FormData();
      formData.append("position", data.position);
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("coverLetter", data.coverLetter || "");
      if (data.currentSalary) {
        formData.append("currentSalary", data.currentSalary);
      }
      if (data.expectedSalary) {
        formData.append("expectedSalary", data.expectedSalary);
      }
      if (data.resume) {
        formData.append("resume", data.resume);
      }

      const response = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit application. Please try again.");
      }

      setSuccessData(data);
    } catch (err: any) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    }
  };

  const handleResetForm = () => {
    reset();
    setSuccessData(null);
    setSubmitError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Human readable file size formatter
  const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const getPositionLabel = (id: string) => {
    const role = roles.find((r) => r.id === id);
    return role ? role.title : id;
  };

  return (
    <Section id="careers" spacing="lg" containerSize="lg" className="border-b border-border/10" variant="dots">
      
      {/* Centered Premium Header Block */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-semibold text-accent"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
          <span>We Are Hiring</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 typography-h1 text-foreground"
        >
          Join the Core of Innovation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-xl text-muted-foreground font-sans leading-relaxed text-base"
        >
          At Shiv Core Tech, we translate complex legacy challenges into streamlined digital architecture. 
          We value clean execution, high reliability, and deep technical ownership.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

        {/* Left Side: Career Listings */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div className="flex-grow flex flex-col justify-between h-full">
            <h3 className="typography-h3 text-foreground mb-4 text-left">Current Openings</h3>
            <div className="flex-grow flex flex-col justify-between gap-4">
              {roles.map((role) => (
                <CardPremium
                  key={role.id}
                  variant="glass-premium"
                  glowColor={role.glowColor}
                  hoverEffect="lift"
                  className="p-5 flex items-center justify-between gap-4 cursor-pointer"
                  onClick={() => handleSelectRole(role.id)}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-foreground text-base font-sans">{role.title}</h4>
                      <span className="text-[10px] font-semibold font-sans uppercase px-2 py-0.5 rounded bg-white/5 border border-white/5 text-muted-foreground">
                        {role.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-muted-foreground font-sans">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-muted-foreground" /> {role.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-muted-foreground" /> {role.experience}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className={`rounded-full group-hover:translate-x-1 transition-transform
                      ${role.glowColor === "primary" ? "text-primary" : ""}
                      ${role.glowColor === "secondary" ? "text-secondary" : ""}
                      ${role.glowColor === "accent" ? "text-accent" : ""}
                    `}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardPremium>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div id="careers-form" className="lg:col-span-7 w-full flex flex-col">
          <CardPremium
            variant="glass-premium"
            glowColor={selectedPosition ? (roles.find(r => r.id === selectedPosition)?.glowColor || "accent") : "accent"}
            hoverEffect="none"
            className="p-6 sm:p-8 relative h-full flex flex-col justify-between"
          >
            <AnimatePresence mode="wait">
              {!successData ? (
                <motion.form
                  key="apply-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col justify-between h-full space-y-4"
                  noValidate
                >
                  <div className="space-y-4 flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-foreground font-heading">Submit Your Application</h3>
                    <p className="text-xs text-muted-foreground mt-1 font-sans">Provide your details and custom portfolio links to apply.</p>
                  </div>

                  {submitError && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-sans">
                      {submitError}
                    </div>
                  )}

                  {/* Field: Job Position */}
                  <div className="space-y-2">
                    <label htmlFor="position" className="block text-xs font-semibold text-foreground font-sans tracking-wide uppercase">
                      Job Position <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="position"
                        aria-invalid={errors.position ? "true" : "false"}
                        {...register("position", { required: "Please select a target position" })}
                        className={`w-full rounded-lg bg-muted/50 border text-sm text-foreground px-3.5 py-2.5 outline-none transition-all appearance-none cursor-pointer font-sans
                          ${errors.position ? "border-red-500/50 focus:border-red-500" : "border-border/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/50"}
                        `}
                      >
                        <option value="" disabled className="bg-background text-muted-foreground">Select a position...</option>
                        {roles.map((r) => (
                          <option key={r.id} value={r.id} className="bg-background text-foreground">
                            {r.title}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-muted-foreground">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                    {errors.position && (
                      <span className="text-[11px] text-red-400 font-sans block">{errors.position.message}</span>
                    )}
                  </div>

                  {/* Two columns for Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Field: Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="block text-xs font-semibold text-foreground font-sans tracking-wide uppercase">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3.5 flex items-center text-muted-foreground">
                          <User className="h-4 w-4" />
                        </span>
                        <input
                          id="fullName"
                          type="text"
                          aria-invalid={errors.fullName ? "true" : "false"}
                          placeholder=""
                          {...register("fullName", {
                            required: "Full name is required",
                            minLength: { value: 2, message: "Name must be at least 2 characters" }
                          })}
                          className={`w-full rounded-lg bg-muted/50 border text-sm text-foreground pl-10 pr-3.5 py-2.5 outline-none transition-all font-sans
                            ${errors.fullName ? "border-red-500/50 focus:border-red-500" : "border-border/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/50"}
                          `}
                        />
                      </div>
                      {errors.fullName && (
                        <span className="text-[11px] text-red-400 font-sans block">{errors.fullName.message}</span>
                      )}
                    </div>

                    {/* Field: Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-semibold text-foreground font-sans tracking-wide uppercase">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-3.5 flex items-center text-muted-foreground">
                          <Mail className="h-4 w-4" />
                        </span>
                        <input
                          id="email"
                          type="email"
                          aria-invalid={errors.email ? "true" : "false"}
                          placeholder=""
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Please enter a valid email address"
                            }
                          })}
                          className={`w-full rounded-lg bg-muted/50 border text-sm text-foreground pl-10 pr-3.5 py-2.5 outline-none transition-all font-sans
                            ${errors.email ? "border-red-500/50 focus:border-red-500" : "border-border/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/50"}
                          `}
                        />
                      </div>
                      {errors.email && (
                        <span className="text-[11px] text-red-400 font-sans block">{errors.email.message}</span>
                      )}
                    </div>
                  </div>

                  {/* Field: Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-semibold text-foreground font-sans tracking-wide uppercase">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-3.5 flex items-center text-muted-foreground">
                        <Phone className="h-4 w-4" />
                      </span>
                      <input
                        id="phone"
                        type="tel"
                        aria-invalid={errors.phone ? "true" : "false"}
                        placeholder=""
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[+]?[0-9\s-]{10,15}$/,
                            message: "Please enter a valid phone number (10-15 digits)"
                          }
                        })}
                        className={`w-full rounded-lg bg-muted/50 border text-sm text-foreground pl-10 pr-3.5 py-2.5 outline-none transition-all font-sans
                          ${errors.phone ? "border-red-500/50 focus:border-red-500" : "border-border/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/50"}
                        `}
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-[11px] text-red-400 font-sans block">{errors.phone.message}</span>
                    )}
                  </div>

                  {/* Fields: Current & Expected Salary (Conditional) */}
                  {selectedPosition && selectedPosition !== "intern" && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1"
                    >
                      {/* Field: Current Salary */}
                      <div className="space-y-2">
                        <label htmlFor="currentSalary" className="block text-xs font-semibold text-foreground font-sans tracking-wide uppercase">
                          Current Salary <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="currentSalary"
                            type="text"
                            aria-invalid={errors.currentSalary ? "true" : "false"}
                            placeholder="e.g. 5 LPA"
                            {...register("currentSalary", {
                              required: selectedPosition !== "intern" ? "Current salary is required" : false
                            })}
                            className={`w-full rounded-lg bg-muted/50 border text-sm text-foreground px-3.5 py-2.5 outline-none transition-all font-sans
                              ${errors.currentSalary ? "border-red-500/50 focus:border-red-500" : "border-border/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/50"}
                            `}
                          />
                        </div>
                        {errors.currentSalary && (
                          <span className="text-[11px] text-red-400 font-sans block">{errors.currentSalary.message}</span>
                        )}
                      </div>

                      {/* Field: Expected Salary */}
                      <div className="space-y-2">
                        <label htmlFor="expectedSalary" className="block text-xs font-semibold text-foreground font-sans tracking-wide uppercase">
                          Expected Salary <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            id="expectedSalary"
                            type="text"
                            aria-invalid={errors.expectedSalary ? "true" : "false"}
                            placeholder="e.g. 8 LPA"
                            {...register("expectedSalary", {
                              required: selectedPosition !== "intern" ? "Expected salary is required" : false
                            })}
                            className={`w-full rounded-lg bg-muted/50 border text-sm text-foreground px-3.5 py-2.5 outline-none transition-all font-sans
                              ${errors.expectedSalary ? "border-red-500/50 focus:border-red-500" : "border-border/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/50"}
                            `}
                          />
                        </div>
                        {errors.expectedSalary && (
                          <span className="text-[11px] text-red-400 font-sans block">{errors.expectedSalary.message}</span>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Field: Resume Upload (Custom Premium Dropzone) */}
                  <div className="space-y-2">
                    <label htmlFor="resume-upload" className="block text-xs font-semibold text-foreground font-sans tracking-wide uppercase">
                      Resume Upload (PDF, DOCX) <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="resume-upload"
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className="sr-only"
                    />

                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          fileInputRef.current?.click();
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label="Upload resume file (PDF or Word format under 5MB)"
                      className={`relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-all cursor-pointer font-sans outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/50
                        ${isDragging ? "border-primary bg-primary/5 scale-[0.99]" : "border-border/30 hover:border-primary/40 hover:bg-white/5"}
                        ${resumeFile ? "border-emerald-500/40 bg-emerald-500/5" : ""}
                        ${errors.resume ? "border-red-500/40 bg-red-500/5" : ""}
                      `}
                    >
                      {!resumeFile ? (
                        <>
                          <UploadCloud className="h-10 w-10 text-muted-foreground mb-3 animate-pulse" />
                          <p className="text-sm text-foreground font-semibold text-center">
                            Drag & drop your resume here, or <span className="text-primary hover:underline">browse</span>
                          </p>
                          <p className="text-xs text-muted-foreground text-center mt-1">
                            PDF, Word (.doc, .docx) — Max size 5MB
                          </p>
                        </>
                      ) : (
                        <div className="flex items-center justify-between w-full gap-4">
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                              <FileText className="h-5 w-5" />
                            </span>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-foreground truncate font-sans">{resumeFile.name}</p>
                              <p className="text-xs text-muted-foreground font-sans mt-0.5">{formatBytes(resumeFile.size)}</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon-xs"
                            type="button"
                            onClick={handleRemoveFile}
                            className="text-muted-foreground hover:text-red-400 hover:bg-red-500/10 rounded-full border border-border/10 shrink-0"
                            aria-label="Remove resume"
                          >
                            <X className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      )}
                    </div>
                    {errors.resume && (
                      <span className="text-[11px] text-red-400 font-sans block">{errors.resume.message}</span>
                    )}
                  </div>

                  {/* Field: Cover Letter */}
                  <div className="space-y-2">
                    <label htmlFor="coverLetter" className="block text-xs font-semibold text-foreground font-sans tracking-wide uppercase">
                      Cover Letter
                    </label>
                    <textarea
                      id="coverLetter"
                      placeholder="Briefly introduce yourself, your experience, and why you are excited to join Shiv Core Tech..."
                      rows={4}
                      aria-invalid={errors.coverLetter ? "true" : "false"}
                      {...register("coverLetter", {
                        maxLength: { value: 1000, message: "Cover letter cannot exceed 1000 characters" }
                      })}
                      className="w-full rounded-lg bg-muted/50 border border-border/30 text-sm text-foreground px-3.5 py-2.5 outline-none transition-all focus:border-primary/50 focus:ring-1 focus:ring-primary/50 resize-none font-sans"
                    />
                    <div className="flex justify-between items-center text-[10px] text-muted-foreground font-sans">
                      <span>Max 1000 characters</span>
                      <span>{(watch("coverLetter") || "").length}/1000</span>
                    </div>
                    {errors.coverLetter && (
                      <span className="text-[11px] text-red-400 font-sans block">{errors.coverLetter.message}</span>
                    )}
                  </div>

                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      variant="glow"
                      type="submit"
                      className="w-full h-11 justify-center rounded-lg gap-2 cursor-pointer font-semibold text-sm"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin shrink-0" />
                          <span>Uploading Application...</span>
                        </>
                      ) : (
                        <>
                          <Briefcase className="h-4 w-4" />
                          <span>Submit Application</span>
                        </>
                      )}
                    </Button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="apply-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center py-12 px-4 space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                    className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                  >
                    <CheckCircle className="h-12 w-12" />
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground font-heading">Application Submitted!</h3>
                    <p className="text-sm text-muted-foreground font-sans max-w-sm">
                      Thank you, <span className="text-foreground font-semibold">{successData.fullName}</span>. 
                      Your application for the <span className="text-primary font-semibold">{getPositionLabel(successData.position)}</span> role has been submitted successfully, and our team has been notified.
                    </p>
                  </div>

                  {/* Submission Summary Card */}
                  <div className="w-full max-w-md rounded-xl bg-muted/30 border border-border/20 p-5 text-left text-xs space-y-3 font-sans">
                    <div className="flex justify-between border-b border-border/10 pb-2">
                      <span className="text-muted-foreground">Target Role:</span>
                      <span className="font-semibold text-foreground">{getPositionLabel(successData.position)}</span>
                    </div>
                    <div className="flex justify-between border-b border-border/10 pb-2">
                      <span className="text-muted-foreground">Candidate Email:</span>
                      <span className="font-semibold text-foreground truncate max-w-[200px]">{successData.email}</span>
                    </div>
                    <div className="flex justify-between border-b border-border/10 pb-2">
                      <span className="text-muted-foreground">Candidate Phone:</span>
                      <span className="font-semibold text-foreground">{successData.phone}</span>
                    </div>
                    {successData.currentSalary && (
                      <div className="flex justify-between border-b border-border/10 pb-2">
                        <span className="text-muted-foreground">Current Salary:</span>
                        <span className="font-semibold text-foreground">{successData.currentSalary}</span>
                      </div>
                    )}
                    {successData.expectedSalary && (
                      <div className="flex justify-between border-b border-border/10 pb-2">
                        <span className="text-muted-foreground">Expected Salary:</span>
                        <span className="font-semibold text-foreground">{successData.expectedSalary}</span>
                      </div>
                    )}
                    {successData.resume && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Resume File:</span>
                        <span className="font-semibold text-emerald-400 flex items-center gap-1">
                          <FileText className="h-3.5 w-3.5 shrink-0" />
                          <span className="truncate max-w-[180px]">{successData.resume.name}</span>
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 w-full max-w-md">
                    <Button
                      variant="outline"
                      onClick={handleResetForm}
                      className="w-full h-10 rounded-lg justify-center cursor-pointer text-xs"
                    >
                      Apply for Another Position
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardPremium>
        </div>

      </div>
    </Section>
  );
}
