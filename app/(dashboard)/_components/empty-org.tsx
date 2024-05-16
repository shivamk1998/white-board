"use client"

import EmptyOrgImg from "../../../public/elements.svg"
import Image from "next/image"; 

import { CreateOrganization } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import {Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const EmptyOrg= ()=>{
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image 
        src={EmptyOrgImg}
        alt="Empty"
        height={500}
        width={500}
        
      />
      <h2 className="text-2xl font-semibold mt-6">
Welcome to ConceptForge
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
Create an organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">
              Create Organization
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 border-none max-w-[470px]">
            <CreateOrganization/>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

