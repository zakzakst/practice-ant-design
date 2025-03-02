import { userService } from "./userService";
import { repositoryFactory } from "../repositories";
import { User, Post } from "../types";

jest.mock("../repositories");

const mockUser: User = {
  id: 1,
  name: "Mock User",
  email: "mock@example.com",
};

const mockPosts: Post[] = [
  {
    id: 1,
    authorId: 1,
    title: "Post 1",
    body: "Content 1",
  },
  {
    id: 2,
    authorId: 1,
    title: "Post 2",
    body: "Content 2",
  },
];

test("fetchUserWithPosts がユーザーと投稿を取得する", async () => {
  (repositoryFactory.user.getUser as jest.Mock).mockResolvedValue(mockUser);
  (repositoryFactory.user.getPosts as jest.Mock).mockResolvedValue(mockPosts);

  const data = await userService.fetchUserWithPosts(1);

  expect(repositoryFactory.user.getUser).toHaveBeenCalledTimes(1);
  expect(repositoryFactory.user.getUser).toHaveBeenCalledWith(1);
  expect(repositoryFactory.user.getPosts).toHaveBeenCalledTimes(1);
  expect(repositoryFactory.user.getPosts).toHaveBeenCalledWith(1);

  expect(data).toEqual({ user: mockUser, posts: mockPosts });
});
