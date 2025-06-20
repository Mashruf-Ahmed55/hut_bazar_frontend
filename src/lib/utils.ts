import { clsx, type ClassValue } from "clsx"
import { easeInOut } from 'motion/react'
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// sliding animation
export const slide = {
  leftInit: { opacity: 0, x: -100 },
  leftAnim: { opacity: 1, x: 0 },
  leftExit: { opacity: 0, x: -100 },
  rightInit: { opacity: 0, x: 100 },
  rightAnim: { opacity: 1, x: 0 },
  rightExit: { opcity: 0, x: 100 },
  transition: { duration: 2, ease: easeInOut }
}
