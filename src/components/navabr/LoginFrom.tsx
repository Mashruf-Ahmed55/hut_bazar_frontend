'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { FaFacebook } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onsubmit = (data: { email: string; password: string }) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
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
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            {...register('email', { required: true })}
            type="email"
            placeholder="m@example.com"
            required
          />
          {errors.email && (
            <span className="text-red-500 text-xs">Email is required</span>
          )}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input
            {...register('password', { required: true })}
            id="password"
            type="password"
            required
          />
        </div>
        {errors.password && (
          <span className="text-red-500 text-xs">Password is required</span>
        )}
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
        Don&apos;t have an account?{' '}
        <Link href="/register" className="underline underline-offset-4">
          Register
        </Link>
      </div>
    </form>
  );
}
