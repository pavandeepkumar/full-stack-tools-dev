// services/auth.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 12 * 60 * 60,
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    // Credentials Provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, _req) {
        // Replace with your API call
        if (!credentials) throw new Error("Credentials are required.");
        const { email, password } = credentials;
        if (email === "test@example.com" && password === "password") {
          return { id: "1", name: "Test User", email };
        }
        throw new Error("Invalid email or password.");
      },
    }),

    // Google OAuth Provider
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_ID as string,
      clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Add your secret
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
