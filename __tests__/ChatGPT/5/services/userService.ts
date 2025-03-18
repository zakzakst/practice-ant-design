import { repositoryFactory } from "../repositories";
import { User, Post } from "../types";

export const userService = {
  fetchUserWithPosts: async (
    authorId: number
  ): Promise<{ user: User; posts: Post[] }> => {
    const user = await repositoryFactory.user.getUser(authorId);
    const posts = await repositoryFactory.user.getPosts(authorId);
    return { user, posts };
  },
};
