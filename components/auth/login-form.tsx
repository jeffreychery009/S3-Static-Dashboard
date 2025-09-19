'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { handleGithubLogin } from '@/lib/auth/github.login';
import { handleGoogleLogin } from '@/lib/auth/google.login';
import Link from 'next/link';
import * as React from 'react';
import { signInWithEmail } from '@/lib/auth/credentials';
import { toast } from 'sonner';

export function LoginForm({ className, ...props }: React.ComponentProps<'form'>) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithEmail(email, password);
      toast.success('Logged in');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login failed';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <form className={cn('flex flex-col gap-4 sm:gap-6', className)} onSubmit={onSubmit} {...props}>
      <div className="flex flex-col items-center justify-center gap-2 text-center mb-4">
        <h1 className="text-xl sm:text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance items-center">
          Enter the details below to login to your account
        </p>
      </div>
      <div className="grid gap-4 sm:gap-6">
        <div className="grid gap-2 sm:gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2 sm:gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="ml-auto text-xs sm:text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <div className="flex flex-row gap-2">
          <Button variant="outline" className="w-full flex-1" onClick={handleGithubLogin}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            <span className="hidden sm:inline ml-2">Login with GitHub</span>
            <span className="sm:hidden ml-2">GitHub</span>
          </Button>
          <Button variant="outline" className="w-full flex-1" onClick={handleGoogleLogin}>
            <span className="inline-flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 533.5 544"
                width="16"
                height="16"
                className="sm:w-5 sm:h-5"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M533.5 278.4c0-18.5-1.7-36.3-5-53.6H272v101.5h147.3c-6.3 34.2-25.4 63.2-54.3 82.6v68h87.8c51.4-47.3 80.7-117.1 80.7-198.5z"
                />
                <path
                  fill="#34A853"
                  d="M272 544c73.5 0 135.2-24.3 180.2-66.1l-87.8-68c-24.3 16.3-55.4 25.9-92.4 25.9-70.9 0-131-47.9-152.4-112.1H29.7v70.5C74.6 486.1 167.5 544 272 544z"
                />
                <path
                  fill="#FBBC05"
                  d="M119.6 323.7c-10.3-30.9-10.3-64.1 0-95l.1-70.5H29.7c-41.8 83.6-41.8 182.4 0 266z"
                />
                <path
                  fill="#EA4335"
                  d="M272 107.7c39.9-.6 78.3 14.4 107.2 42.8l80.1-80.1C407.1 24.5 341.1 0 272 0 167.5 0 74.6 57.9 29.7 145.6l89.9 70.5C141 155.9 201.1 108 272 108z"
                />
              </svg>
              <span className="hidden sm:inline">Login with Google</span>
              <span className="sm:hidden">Google</span>
            </span>
          </Button>
        </div>
      </div>
      <div className="text-center text-xs sm:text-sm">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  );
}
