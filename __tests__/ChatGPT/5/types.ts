export type User = {
  id: number;
  name: string;
  email: string;
};

export type Post = {
  id: number;
  authorId: number;
  title: string;
  body: string;
};
