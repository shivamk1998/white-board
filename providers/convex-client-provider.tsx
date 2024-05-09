"use client";
import { ReactNode } from "react";


import { AuthLoading, Authenticated, ConvexProvider, ConvexReactClient } from "convex/react";
import {ClerkProvider,useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Loading } from "@/components/auth/loading";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);



export default function ConvexClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      
        {children}
        
        <AuthLoading>
          <Loading/>
        </AuthLoading>
      </ConvexProviderWithClerk>
      </ClerkProvider>
  )
}