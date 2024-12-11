"use client"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

export function SignInForm() {
    const router = useRouter()
    const handleSignIn = () => {
        // TODO: Implement sign-in logic
        console.log("Signing in...")
        router.push("/dashboard")
    }
    return (
        <Card className="mx-auto w-full max-w-sm border-none">
            <CardHeader>
                <CardTitle className="text-2xl">Sign In</CardTitle>
                <CardDescription>
                    Enter your email below to create  your new  account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="John Smith"
                            required
                        />
                    </div>
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
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full" onClick={handleSignIn}>
                        Sign In
                    </Button>
                    <Button variant="outline" className="w-full">
                        Sign In with Google
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link href="/" className="underline">
                        Login
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}