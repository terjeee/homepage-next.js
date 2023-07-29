import { type AuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const prismaClient = new PrismaClient();

const authOptions: AuthOptions = {
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prismaClient),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    // async jwt({ token, user }) {
    //   const dbUser = await prismaClient.user.findFirst({
    //     where: { email: user.email },
    //   });
    //   if (!dbUser) return token;
    //   return {
    //     id: dbUser.id,
    //     role: dbUser.role,
    //     name: dbUser.name,
    //     email: dbUser.email,
    //     image: dbUser.image,
    //   };
    // },
    // async session({ token, session }) {
    //   // if (token) {
    //   //   session.user.name = token.name
    //   //   session.user.email = token.email,
    //   //   session.user?.image = token.image
    //   // }
    //   // return session;
    // },
  },
};

// TODO: provider -> credentials, github?
// TODO: options

export default authOptions;
