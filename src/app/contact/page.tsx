"use client";

import { useState } from 'react';

import { motion } from "framer-motion";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectItem, SelectLabel, SelectGroup, SelectTrigger, SelectValue } from '@/components/ui/select';

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';

const info = [
  {
    icon : <FaPhoneAlt />,
    title : "Phone",
    discription : "(+91) 7068220038",
  },
  {
    icon : <FaEnvelope />,
    title : "Email",
    discription : "anubhavmaurya8521@gmail.com",
  },
  {
    icon : <FaMapMarkerAlt />,
    title : "Address",
    discription : "Opposite to Cherish Studio, Rathodi Village, Malad West, Mumbai 400095",
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
  
  type HandleChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  type HandleSelectChange = (value: string) => void;
  type HandleSubmitEvent = React.FormEvent<HTMLFormElement>;

  const initialFormData: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const handleChange = (e: HandleChangeEvent):void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSelectChange: HandleSelectChange  = (value: string):void => {
    setFormData({ ...formData, service: value });
  }
  const handleSubmit = async (e: HandleSubmitEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        alert('Failed to send email');
        return;
      }

      const result = await response.json().catch(() => ({}));

      if (result.success) {
        alert('Email sent successfully');
        setFormData(initialFormData); // Reset form data
      } else {
        alert('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email');
    }
  };
  
    return (
      <motion.section
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">

            {/* form */}
            <motion.div className="xl:w-[60%] order-2 xl:order-none"
              initial={{opacity:0, x: -100}}
              animate={{
                opacity: 1,
                x: 0,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
              }}
            >
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. A fuga accusamus iure dolor quidem pariatur</p>
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="text" placeholder="First Name" name="firstName" onChange={handleChange} required value={formData.firstName}/>
                  <Input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} required value={formData.lastName}/>
                  <Input type="email" placeholder="Email address" name="email" onChange={handleChange} required value={formData.email}/>
                  <Input type="text" placeholder="Phone" name="phone" onChange={handleChange} required value={formData.phone}/>
                </div>
                {/* select */}
                <Select onValueChange={handleSelectChange} value={formData.service} required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Service</SelectLabel>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
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
                <Button size="md" className="max-w-60" type="submit">Send Message</Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
              initial={{opacity:0, x: 100}}
              animate={{
                opacity: 1,
                x: 0,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
              }}
            >
              <ul className="flex flex-col gap-10">
                {
                  info.map((item, index) => (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] flex justify-center items-center bg-[#27272c] rounded-md text-accent">
                        <div className="text-[26px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white/60">{item.title}</h3>
                        <p className="text-xl">{item.discription}</p>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </motion.div>

          </div>
        </div>
      </motion.section>
    );
  }