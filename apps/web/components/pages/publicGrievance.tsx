"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import {
  AlertCircle,
  CheckCircle2,
  FileCheck,
  Send,
  ShieldAlert,
  Sparkles,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { Textarea } from "@workspace/ui/components/textarea"

type SubmittedCitizen = {
  full_name: string
  mobile_number: string
}

export default function PublicGrievance() {
  const [isPending, setIsPending] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [complaintId, setComplaintId] = useState("")
  const [submittedCitizen, setSubmittedCitizen] = useState<SubmittedCitizen>({
    full_name: "",
    mobile_number: "",
  })

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)

    const formData = new FormData(e.currentTarget)
    const fullName = formData.get("full_name") as string
    const mobileNumber = formData.get("mobile_number") as string

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const mockId = Math.floor(100000 + Math.random() * 900000)

      setSubmittedCitizen({
        full_name: fullName,
        mobile_number: mobileNumber,
      })

      setSubmitted(true)
      setComplaintId(String(mockId))
    } finally {
      setIsPending(false)
    }
  }

  const handleClearForm = () => {
    const form = document.getElementById("grievance-form") as HTMLFormElement
    if (form) form.reset()
  }

  const handleRegisterAnother = () => {
    setSubmitted(false)
    setComplaintId("")
    setSubmittedCitizen({
      full_name: "",
      mobile_number: "",
    })
  }

  const scrollToForm = () => {
    const grievanceForm = document.getElementById("grievance-form-section")
    grievanceForm?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#f0fff6] via-white to-[#f7fff9] px-4 py-16 font-sans md:px-8">
      {/* Background Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #14966b 1px, transparent 1px), linear-gradient(#14966b 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="pointer-events-none absolute -left-32 top-20 h-[360px] w-[360px] rounded-full bg-emerald-300/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full bg-teal-300/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-lime-300/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-700 shadow-sm">
            <ShieldAlert className="h-3.5 w-3.5 text-emerald-600" />
            Citizen Grievance Portal
          </span>

          <h1 className="font-serif text-3xl font-black tracking-tight text-[#123d32] md:text-5xl">
            Public Grievance Redressal System
          </h1>

          <p className="mx-auto max-w-2xl text-sm font-medium leading-7 text-slate-600 md:text-base">
            Nagar Palika Parishad Etah में अपनी नागरिक समस्या या सुझाव
            ऑनलाइन दर्ज करें और पारदर्शी, उत्तरदायी एवं समयबद्ध समाधान की दिशा
            में अपना योगदान दें।
          </p>

          <div className="mx-auto flex items-center justify-center gap-2 pt-2">
            <span className="h-1.5 w-12 rounded-full bg-emerald-500" />
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-emerald-200 bg-white shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            </span>
            <span className="h-1.5 w-20 rounded-full bg-gradient-to-r from-teal-500 to-lime-400" />
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-emerald-200 bg-white shadow-sm">
              <ShieldAlert className="h-3.5 w-3.5 text-emerald-600" />
            </span>
            <span className="h-1.5 w-12 rounded-full bg-teal-500" />
          </div>
        </motion.div>

        {/* Info & Image */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-emerald-100 bg-white/90 p-8 shadow-[0_20px_60px_rgba(16,185,129,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_25px_70px_rgba(16,185,129,0.14)] md:p-10"
          >
            <div className="absolute left-0 top-0 h-full w-1.5 bg-linear-to-b from-emerald-400 via-teal-500 to-lime-400" />

            <div className="relative z-10 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2 text-[10px] font-black uppercase tracking-wider text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                 आपकी आवाज़ महत्वपूर्ण है
              </div>

              <h2 className="font-serif text-2xl font-black leading-tight tracking-tight text-[#123d32] md:text-3xl">
                आपकी समस्या, हमारी जिम्मेदारी
              </h2>

              <p className="text-xs font-semibold leading-7 text-slate-600 md:text-sm">
                Nagar Palika Parishad Etah नागरिकों को बेहतर, पारदर्शी
                और उत्तरदायी नगर सेवाएं उपलब्ध कराने के लिए प्रतिबद्ध है। आप
                सफाई, जल आपूर्ति, सड़क, नाली, स्ट्रीट लाइट, कचरा संग्रहण,
                अतिक्रमण एवं अन्य नागरिक समस्याओं की शिकायत दर्ज कर सकते हैं।
              </p>

              <div className="grid grid-cols-1 gap-2.5 pt-2 sm:grid-cols-2">
                <div className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50/70 px-3 py-2.5 text-[10px] font-bold text-emerald-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                  Transparent Process
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-teal-100 bg-teal-50/70 px-3 py-2.5 text-[10px] font-bold text-teal-700">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" />
                  Quick Response
                </div>
              </div>
            </div>

            <Button
              type="button"
              onClick={scrollToForm}
              className="relative z-10 mt-8 flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-linear-to-r from-emerald-500 to-teal-500 px-6 py-3 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:from-emerald-600 hover:to-teal-600"
            >
              <ShieldAlert className="h-4 w-4" />
              Submit Your Grievance
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="group relative min-h-[390px] overflow-hidden rounded-[28px] border border-emerald-100 bg-[#123d32] shadow-[0_20px_60px_rgba(16,80,60,0.15)]"
          >
            <Image
              src="/grievance.png"
              width={700}
              height={700}
              priority
              alt="Public grievance redressal portal"
              className="h-full w-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#07352b]/95 via-[#07352b]/35 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <h3 className="font-serif text-xl font-black text-white md:text-2xl">
                Grievance Redressal
                <span className="block text-emerald-300">Portal</span>
              </h3>
            </div>
          </motion.div>
        </div>

        {/* Form Section */}
        <div
          id="grievance-form-section"
          className="scroll-mt-24 overflow-hidden rounded-[28px] border border-emerald-100 bg-white/95 shadow-xl backdrop-blur-xl"
        >
          <div className="bg-linear-to-r from-[#123d32] via-[#155b49] to-[#087f62] px-7 py-6 text-white md:px-9">
            <h2 className="text-base font-black uppercase tracking-wider md:text-lg">
              Grievance Submission Form
            </h2>
          </div>

          <div className="p-6 md:p-9">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="grievance-success"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  className="mx-auto flex max-w-md flex-col items-center justify-center py-14 text-center"
                >
                  <FileCheck className="h-16 w-16 text-emerald-500" />
                  <h3 className="mt-6 text-xl font-black text-[#173d34]">
                    Grievance Registered Successfully
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-slate-500">
                    Ref Number:{" "}
                    <span className="font-mono text-emerald-600">
                      {complaintId}
                    </span>
                  </p>
                  <Button
                    type="button"
                    onClick={handleRegisterAnother}
                    className="mt-6 rounded-xl border border-emerald-200 bg-white px-5 py-2 text-xs font-bold text-emerald-700"
                  >
                    Register Another Grievance
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  id="grievance-form"
                  key="grievance-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="space-y-7"
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <FormField label="Your Full Name" htmlFor="full-name">
                      <Input
                        id="full-name"
                        name="full_name"
                        required
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        className="h-11 rounded-xl border-slate-200 bg-white px-4 text-xs font-semibold shadow-sm"
                      />
                    </FormField>

                    <FormField label="Mobile Number" htmlFor="mobile-number">
                      <Input
                        id="mobile-number"
                        name="mobile_number"
                        required
                        type="tel"
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        className="h-11 rounded-xl border-slate-200 bg-white px-4 text-xs font-semibold shadow-sm"
                      />
                    </FormField>

                    <FormField label="Email Address" htmlFor="grievance-email">
                      <Input
                        id="grievance-email"
                        name="email"
                        required
                        type="email"
                        placeholder="rahul@example.com"
                        className="h-11 rounded-xl border-slate-200 bg-white px-4 text-xs font-semibold shadow-sm"
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormField label="Complaint Category">
                      <Select name="complaint_category" required>
                        <SelectTrigger className="h-11 w-full rounded-xl border-slate-200 bg-white text-xs font-semibold shadow-sm">
                          <SelectValue placeholder="Select Complaint Category" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="Sanitation">Sanitation / Garbage</SelectItem>
                          <SelectItem value="Water Supply">Water Supply</SelectItem>
                          <SelectItem value="Roads">Roads & Potholes</SelectItem>
                          <SelectItem value="Streetlights">Street Lights</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormField>

                    <FormField label="Select Municipal Ward">
                      <Select name="municipal_ward" required>
                        <SelectTrigger className="h-11 w-full rounded-xl border-slate-200 bg-white text-xs font-semibold shadow-sm">
                          <SelectValue placeholder="Select Ward" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {Array.from({ length: 18 }, (_, index) => (
                            <SelectItem key={index + 1} value={`Ward ${index + 1}`}>
                              Ward No. {index + 1}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormField>
                  </div>

                  <FormField label="Incident Landmark / Address" htmlFor="incident-address">
                    <Input
                      id="incident-address"
                      name="incident_address"
                      required
                      type="text"
                      placeholder="e.g. Near Giriraj Ji Temple , Etah"
                      className="h-11 rounded-xl border-slate-200 bg-white px-4 text-xs font-semibold shadow-sm"
                    />
                  </FormField>

                  <FormField label="Detailed Description of Grievance" htmlFor="grievance-description">
                    <Textarea
                      id="grievance-description"
                      name="description"
                      required
                      rows={5}
                      placeholder="Please explain the issue..."
                      className="resize-none rounded-xl border-slate-200 bg-white px-4 py-3 text-xs font-semibold shadow-sm"
                    />
                  </FormField>

                  <div className="flex flex-col-reverse justify-end gap-3 border-t border-slate-100 pt-5 sm:flex-row">
                    <Button
                      type="button"
                      onClick={handleClearForm}
                      className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-500 shadow-sm"
                    >
                      Clear Fields
                    </Button>
                    <Button
                      type="submit"
                      disabled={isPending}
                      className="flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-emerald-500 to-teal-500 px-6 py-2.5 text-xs font-black text-white shadow-lg"
                    >
                      <span>{isPending ? "Submitting..." : "Submit Official Grievance"}</span>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  )
}

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor?: string
  children: React.ReactNode
}) {
  return (
    <div className="group space-y-2">
      <Label
        htmlFor={htmlFor}
        className="block text-[10px] font-black uppercase tracking-[0.08em] text-slate-600 transition-colors group-focus-within:text-emerald-600"
      >
        {label}
      </Label>
      {children}
    </div>
  )
}
