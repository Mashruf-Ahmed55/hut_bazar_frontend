"use client"
import { LoginForm } from '@/components/navabr/LoginFrom';
import { GalleryVerticalEnd } from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react'
import { slide } from '@/lib/utils';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function page() {
  const pathname = usePathname();
  return (
    <div className="grid min-h-svh lg:grid-cols-2 overflow-x-hidden">
      <motion.div
        key={pathname}
        variants={slide}
        initial="leftInit"
        animate="leftAnim"
        className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Cena Kata.
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slide}
        initial="rightInit"
        animate="rightAnim"
        className="bg-muted relative hidden lg:block">
        <Image
          width={500}
          height={500}
          src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </motion.div>
    </div>
  );
}

