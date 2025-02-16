import fs from "fs";
import matter from "gray-matter";
import Posts from "@/app/posts/posts";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";

export const generateStaticParams = async () => {
  return Posts.map((post) => ({
    id: post.id,
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  const { id } = await params;
  const post = Posts.find((post) => post.id === id);
  if (!post) return {};
  return {
    title: post.title,
  };
};

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const fileContents = fs.readFileSync(
    `./src/app/posts/contents/${id}.md`,
    "utf-8"
  );
  const matterResult = matter(fileContents);
  return (
    <>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {matterResult.content}
      </ReactMarkdown>
    </>
  );
};

export default Page;
