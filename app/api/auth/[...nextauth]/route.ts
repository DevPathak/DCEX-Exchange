import NextAuth from "next-auth";
import { authConfig } from "@/app/lib/auth";

const handler = NextAuth(authConfig);
console.log("Handler", handler);

export { handler as GET, handler as POST };
