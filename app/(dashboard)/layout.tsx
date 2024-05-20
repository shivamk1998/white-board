"use client";
import Sidebar from "./_components/sidebar";
import { OrgSidebar } from "./_components/org-sidebar";
import { Navbar } from "./_components/navbar";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";




interface DashboardLayoutProps{
  children:React.ReactNode;
}

const DashboardLayout = ({
  children,
}:DashboardLayoutProps) => {
  const {isAuthenticated}=useConvexAuth() 

 return (
    <main className="h-full">
       {isAuthenticated ? (
     <><Sidebar /><div className="pl-[60px] h-full">
         <div className="flex gap-x-3 h-full">
           <OrgSidebar />
           <div className="h-full flex-1">
             <Navbar />
             <Toaster className="h-7"/>
             {children}
           </div>
         </div>

       </div></>
       ) : (
       
       
           <SignInButton />
        
       
      )}
     </main>
  )
}

export default DashboardLayout