"use client";

import { useState } from "react";
import * as Toast from "@radix-ui/react-toast";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, XCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    discription: "(+91) 7068220038",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    discription: "anubhavmaurya8521@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    discription:
      "Opposite to Cherish Studio, Rathodi Village, Malad West, Mumbai, Maharashtra - 400095",
  },
];

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function Contact() {
  const initialFormData: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [open, setOpen] = useState(false);
  const [toastData, setToastData] = useState({ title: "", description: "" });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (value: string): void => {
    setFormData({ ...formData, service: value });
  };

  // ✅ React Query Mutation
  const sendEmailMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to send email");
      return response.json();
    },
    onSuccess: (result) => {
      if (result.success) {
        setToastData({
          title: "Email Sent Successfully!",
          description: "You will be notified as soon as possible.",
        });
        if (typeof window !== "undefined") {
          const audio = new Audio("/success_audio.mp3");
          audio.volume = 1;
          audio.play();
        }
        setIsSuccess(true);
        setFormData(initialFormData);
      } else {
        setToastData({
          title: "Failed to send email",
          description: "Retry later sorry for inconvenience",
        });
        setIsSuccess(false);
      }
      setOpen(true);
    },
    onError: (error: any) => {
      console.error("Error sending email:", error);
      setToastData({
        title: "Error in sending email",
        description: "Retry later sorry for inconvenience",
      });
      setIsSuccess(false);
      setOpen(true);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmailMutation.mutate(formData);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <motion.div
              className="xl:w-[60%] order-2 xl:order-none"
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
              }}
            >
              <form
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                onSubmit={handleSubmit}
              >
                <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                <p className="text-white/60">
                  Have a project in mind or want to collaborate? Fill out the form below, and I&apos;ll get back to you as soon as possible. Let’s turn your ideas into something impactful!
                </p>

                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleChange}
                    required
                    value={formData.firstName}
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleChange}
                    required
                    value={formData.lastName}
                  />
                  <Input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    onChange={handleChange}
                    required
                    value={formData.email}
                  />
                  <Input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    onChange={handleChange}
                    required
                    value={formData.phone}
                  />
                </div>

                {/* select */}
                <Select
                  onValueChange={handleSelectChange}
                  value={formData.service}
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Service</SelectLabel>
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="Software Development">
                        Software Development
                      </SelectItem>
                      <SelectItem value="Frontend Development">
                        Frontend Development
                      </SelectItem>
                      <SelectItem value="Backend Development">
                        Backend Development
                      </SelectItem>
                      <SelectItem value="Web Apps">Web Apps</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {/* textarea */}
                <Textarea
                  className="h-[200px]"
                  placeholder="Type your message here.."
                  name="message"
                  onChange={handleChange}
                  required
                  value={formData.message}
                />

                {/* Button */}
                <Button
                  variant={sendEmailMutation.isPending ? "disabled" : "default"}
                  size="md"
                  className="max-w-60"
                  type="submit"
                  disabled={sendEmailMutation.isPending}
                >
                  {sendEmailMutation.isPending
                    ? "Sending..."
                    : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
              }}
            >
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] flex justify-center items-center bg-[#27272c] rounded-md text-accent">
                      <div className="text-[26px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white/60">{item.title}</h3>
                      <p className="text-xl">{item.discription}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Toast */}
      <Toast.Provider swipeDirection="right" duration={2000} swipeThreshold={0}>
        <AnimatePresence>
          {open && (
            <Toast.Root
              open={open}
              onOpenChange={setOpen}
              forceMount
              className="relative w-[350px] max-w-[90vw] outline-none"
            >
              <motion.div
                key="toast"
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                exit={{ x: 500 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`flex items-start gap-3 p-4 rounded-xl shadow-2xl backdrop-blur-md border
              ${isSuccess
                    ? "bg-gradient-to-r from-emerald-500/20 to-green-400/10 border-emerald-500/30"
                    : "bg-gradient-to-r from-rose-500/20 to-red-400/10 border-rose-500/30"
                  }`}
              >
                <div className="flex-shrink-0 mt-1">
                  {isSuccess ? (
                    <CheckCircle2 className="text-emerald-400 w-6 h-6" />
                  ) : (
                    <XCircle className="text-rose-400 w-6 h-6" />
                  )}
                </div>

                <div className="flex-1">
                  <Toast.Title
                    className={`font-semibold ${isSuccess ? "text-emerald-300" : "text-rose-300"
                      }`}
                  >
                    {toastData.title}
                  </Toast.Title>
                  <Toast.Description className="text-gray-200 text-[0.725rem] mt-1 text-nowrap">
                    {toastData.description}
                  </Toast.Description>
                </div>
              </motion.div>
            </Toast.Root>
          )}
        </AnimatePresence>

        <Toast.Viewport className="fixed top-4 right-4 z-50 flex flex-col gap-3 w-[350px] max-w-[90vw]" />
      </Toast.Provider>
    </>
  );
}
