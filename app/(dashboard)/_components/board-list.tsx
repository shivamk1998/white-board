"use client";

import { EmptyBoard } from "./empty-board";
import { EmptyFav } from "./empty-favorites";
import { EmptySearch } from "./empty-search";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId });
  
  if(data===undefined){
    return (
    <div>
      Loading...
    </div>)
  }
  if (!data?.length && query.search) {
    return (
      <div>
        <EmptySearch />
      </div>
    );
  }

  if (!data?.length && query.favorites) {
    return (
      <div>
        <EmptyFav />
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div>
        <EmptyBoard />
      </div>
    );
  }

  return <div>{JSON.stringify(data)}</div>;
};
