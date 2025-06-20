'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { CheckIcon, EyeIcon, EyeOffIcon, XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useId, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

type FormValues = {
  fast_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  phone_number: string;
};

export function RegisterFrom({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const id = useId();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState(false);
  const { register, control, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      fast_name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      phone_number: '',
    },
  });
  const password = watch('password') || '';

  const onSubmit = (data: FormValues) => console.log(data);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const checkStrength = (pass: string) => {
    const requirements = [
      { regex: /.{8,}/, text: 'At least 8 characters' },
      { regex: /[0-9]/, text: 'At least 1 number' },
      { regex: /[a-z]/, text: 'At least 1 lowercase letter' },
      { regex: /[A-Z]/, text: 'At least 1 uppercase letter' },
    ];

    return requirements.map((req) => ({
      met: req.regex.test(pass),
      text: req.text,
    }));
  };

  const strength = checkStrength(password);

  const strengthScore = useMemo(() => {
    return strength.filter((req) => req.met).length;
  }, [strength]);

  const getStrengthColor = (score: number) => {
    if (score === 0) return 'bg-border';
    if (score <= 1) return 'bg-red-500';
    if (score <= 2) return 'bg-orange-500';
    if (score === 3) return 'bg-amber-500';
    return 'bg-emerald-500';
  };

  const getStrengthText = (score: number) => {
    if (score === 0) return 'Enter a password';
    if (score <= 2) return 'Weak password';
    if (score === 3) return 'Medium password';
    return 'Strong password';
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2 grid-cols-2">
          <div className="grid gap-2">
            <Label>First Name</Label>
            <Input
              {...register('fast_name')}
              type="text"
              placeholder="First Name"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Last Name</Label>
            <Input
              {...register('last_name')}
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="grid gap-2 grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              {...register('username')}
              type="text"
              placeholder="Username"
              autoComplete="username"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone_number">Phone Number</Label>
            <Input
              {...register('phone_number')}
              type="text"
              placeholder="ex: +8801XXXXXXXXX"
              required
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            {...register('email')}
            type="email"
            placeholder="example@email.com"
            required
          />
        </div>
        <div>
          {/* Password input field with toggle visibility button */}
          <div className="*:not-first:mt-2">
            <Label htmlFor={id}>Password</Label>
            <div className="relative">
              <Input
                {...register('password')}
                id={id}
                className="pe-9"
                placeholder="Password"
                type={isVisible ? 'text' : 'password'}
                aria-describedby={`${id}-description`}
                autoComplete="new-password"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <button
                className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                type="button"
                onClick={toggleVisibility}
                aria-label={isVisible ? 'Hide password' : 'Show password'}
                aria-pressed={isVisible}
                aria-controls="password"
              >
                {isVisible ? (
                  <EyeOffIcon size={16} aria-hidden="true" />
                ) : (
                  <EyeIcon size={16} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isFocused && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className={cn(isFocused ? 'block' : 'hidden')}
              >
                {/* Password strength indicator */}
                <div
                  className="bg-border mt-3 mb-4 h-1 w-full overflow-hidden rounded-full"
                  role="progressbar"
                  aria-valuenow={strengthScore}
                  aria-valuemin={0}
                  aria-valuemax={4}
                  aria-label="Password strength"
                >
                  <div
                    className={`h-full ${getStrengthColor(
                      strengthScore
                    )} transition-all duration-500 ease-out`}
                    style={{ width: `${(strengthScore / 4) * 100}%` }}
                  ></div>
                </div>

                {/* Password strength description */}
                <p
                  id={`${id}-description`}
                  className="text-foreground mb-2 text-sm font-medium"
                >
                  {getStrengthText(strengthScore)}. Must contain:
                </p>

                {/* Password requirements list */}
                <ul className="space-y-1.5" aria-label="Password requirements">
                  {strength.map((req, index) => (
                    <li key={index} className="flex items-center gap-2">
                      {req.met ? (
                        <CheckIcon
                          size={16}
                          className="text-emerald-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <XIcon
                          size={16}
                          className="text-muted-foreground/80"
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={`text-xs ${
                          req.met ? 'text-emerald-600' : 'text-muted-foreground'
                        }`}
                      >
                        {req.text}
                        <span className="sr-only">
                          {req.met
                            ? ' - Requirement met'
                            : ' - Requirement not met'}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" className="w-full">
            <FcGoogle size={20} />
            Google
          </Button>
          <Button variant="outline" className="w-full">
            <FaFacebook size={20} className="text-[#0866FF]" />
            Facebook
          </Button>
        </div>
      </div>
      <div className="text-center text-sm">
        Already have an account?{' '}
        <Link href="/login" className="underline underline-offset-4">
          Log In
        </Link>
      </div>
    </form>
  );
}
