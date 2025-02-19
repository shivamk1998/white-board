"use client"

import Image from "next/image";

import { api } from "@/convex/_generated/api";
import EmptyBoardImage from "../../../public/empty-board.svg"
import { Button } from "@/components/ui/button";
import { useOrganization } from "@clerk/clerk-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";


export const EmptyBoard=()=>{
  const {organization}=useOrganization();
  const {mutate, pending}=useApiMutation(api.board.create);

  const onClick=()=>{
    if(!organization) return;

    mutate({
      orgId:organization.id,
      title:"Untitled"
    })
      .then((id)=>[
        toast.success("Board created")
      ])
      .catch((err)=>{
        err
      })
  }

  return(
    <div className="h-full flex flex-col items-center justify-center"> 
      <Image
        src={EmptyBoardImage}
       alt="search"
       height={110}
       width={110}
       
      />
      <h2 className="text-2xl font-semibold mt-6">
      Create your first board
      </h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Start by creating a board for your organization.
      </p>
      <div className="mt-6">
          <Button disabled={pending} onClick={onClick}size="lg" >
            Create Board
          </Button>
      </div>
    </div>
  )
}