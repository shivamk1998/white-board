import {v} from "convex/values"
import {mutation} from "./_generated/server"

const images=[
  "/placeholders/s1.svg",
  "/placeholders/s2.svg",
  "/placeholders/s3.svg",
  "/placeholders/s4.svg",
  "/placeholders/s5.svg",
  "/placeholders/s6.svg",

]

export const create= mutation({
args:{
  orgId:v.string(),
  title:v.string(),
},
handler:async(ctx,args)=>{
  const identity=await ctx.auth.getUserIdentity();

  if(!identity){
    throw new Error("Unauthorized");
  }

  const randomImage= images[Math.floor(Math.random()*images.length)]

  const board=await ctx.db.insert("boards",{
    title:args.title,
    orgId:args.orgId,
    authorId:identity.subject,
    authorName:identity.name!,
    imageUrl:randomImage,
  });
  return board;
}
})


export const remove = mutation({
  args:{id: v.id("boards")},
  handler:async(ctx,args)=>{
    const identity = await ctx.auth.getUserIdentity();

    if(!identity){
      throw new Error("Unauthorized")
    }
 
    //TODO : Later check to delete favourite relation as well
    await ctx.db.delete(args.id);
  }
});

export const update = mutation({args:{id: v.id("boards"), title: v.string()}, handler: async(ctx, args)=>{

  const identity = await ctx.auth.getUserIdentity();

  if(!identity){
    throw new Error("Unauthorized")
  }

  const title = args.title.trim();

  if(!title){
    throw new Error("Title is required")
  }

  if(title.length > 60){
    throw new Error("Title cannot be longer than 60 characters")
  }

  const board = await ctx.db.patch(args.id,{
    title: args.title,
  })

  return board;
}})