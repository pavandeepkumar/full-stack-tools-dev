"use client";
// DEFINE ALL EXTERNAL IMPORTS
import Link from "next/link";
import { useRouter } from "next/navigation";

// DEFINE ALL INTERNAL IMPORTS
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// DEFINE MAIN FUNCTION AND EXPORT
export function LoginForm() {
  // DEFINE ALL STATE HERE
  const router = useRouter();

  // DEFINE ALL THE FUNCTIONS HERE
  const handleLogin = () => {
    // TODO: Implement sign-in logic
    router.push("/dashboard");
  };
  // DEFINE MAIN THE RETURN HERE
  return (
    <Card className="mx-auto w-full max-w-sm border-none">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="outline" className="w-full" onClick={handleLogin}>
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signin" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
