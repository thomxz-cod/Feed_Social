import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addPost = mutation({
  args: { title: v.string(), image: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("posts", args);
  },
});

export const getPosts = query({
  handler: async (ctx) => {
    return await ctx.db.query("posts").collect();
  },
});