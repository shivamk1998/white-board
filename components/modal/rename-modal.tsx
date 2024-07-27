"use client"

import { FormEventHandler, useEffect,useState } from "react"


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogFooter,
  DialogTitle
} from "@/components/ui/dialog"

import { useRenameModal } from "@/store/use-rename-modal"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { api } from "@/convex/_generated/api"
import { toast } from "sonner"

export const RenameModal = () =>{

  const {mutate, pending} = useApiMutation(api.board.update);
  const {isOpen, onClose, initialValues }= useRenameModal();

  const [title, setTitle]= useState(initialValues.title);

  useEffect(()=>{
    setTitle(initialValues.title);
  }, [initialValues.title]);

  const onSubmit :FormEventHandler<HTMLFormElement> =  (e) =>{

    e.preventDefault();
    mutate({
      id:initialValues.id,
      title,
    })
      .then(()=>{
        toast.success("Board Renamed")
        onClose();
      })
      .catch(()=>toast.error("Board Renamed Failed"))
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
<DialogContent>
  <DialogHeader>
  <DialogTitle>
      Edit board title
  </DialogTitle>
  </DialogHeader>
  <DialogDescription>
    Enter new title for this board
  </DialogDescription>
  <form onSubmit={onSubmit} className="space-y-4">
    <Input
      disabled={pending}
      required
      maxLength={65}
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      placeholder="Board Title"
    ></Input>
    <DialogFooter>
      <DialogClose asChild>
        <Button type="button" variant="outline"className="">
        Cancel
        </Button>
      </DialogClose>
      <Button disabled={pending} type="submit" variant="default">
        Save
        </Button>
    </DialogFooter>
  </form>
</DialogContent>

    </Dialog>
  )
}