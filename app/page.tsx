"use client"

import { useConvexAuth } from "convex/react";

import { Button } from "@/components/ui/button";
import { ClerkProvider ,SignInButton} from '@clerk/nextjs'
import Image from "next/image";

export default function Home() {

  const {isAuthenticated}= useConvexAuth();
  return (
   <main>
  {isAuthenticated ?"hello":<SignInButton/>}
   </main>
  );
}
