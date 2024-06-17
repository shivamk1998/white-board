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
