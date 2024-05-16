"use client"

import Image from "next/image";
import EmptyFavImage from "../../../public/empty-favorite.svg"

export const EmptyFav=()=>{
  return(
    <div className="h-full flex flex-col items-center justify-center"> 
      <Image
        src={EmptyFavImage}
       alt="search"
       height={140}
       width={140}
       
      />
      <h2 className="text-2xl font-semibold mt-6">
        No Favorite
      </h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Try favoriting a board
      </p>
    </div>
  )
}