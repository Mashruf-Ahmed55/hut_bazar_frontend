"use client"
import { RegisterFrom } from '@/components/navabr/RegisterFrom';
import { slide } from '@/lib/utils';
import { GalleryVerticalEnd } from 'lucide-react';
import { motion } from 'motion/react'
import Image from 'next/image';

export default function page() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 overflow-x-hidden">
      <motion.div
        variants={slide}
        initial="leftInit"
        animate="leftAnim"
        className="bg-muted relative hidden lg:block">
        <Image
          width={500}
          height={500}
          src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </motion.div>

      <motion.div
        variants={slide}
        initial="rightInit"
        animate="rightAnim"
        className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <RegisterFrom />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
