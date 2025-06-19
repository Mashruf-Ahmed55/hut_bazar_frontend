'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { Command, CommandInput } from '../ui/command';

export default function AnnouncementBar() {
  return (
    <header className="w-full bg-background border-b">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-8 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-primary">
            LOGO
          </h1>
        </div>

        {/* Search Command Input */}
        <div className="w-full max-w-xl">
          <Command className="rounded-lg border">
            <CommandInput placeholder="Search products or commands..." />
          </Command>
        </div>

        {/* Sign In Button */}
        <div className="flex-shrink-0">
          <Link href="/login">
            <Button variant="default" className="w-full sm:w-auto">
              Sign In / Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
