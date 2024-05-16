"use client"

import Image from "next/image";
import EmptySearchImage from "../../../public/empty_search.svg"

export const EmptySearch=()=>{
  return(
    <div className="h-full flex flex-col items-center justify-center"> 
      <Image
        src={EmptySearchImage}
       alt="search"
       height={140}
       width={140}
      />
      <h2 className="text-2xl font-semibold mt-6">
        No result found
      </h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Try searching for something else
      </p>
    </div>
  )
}