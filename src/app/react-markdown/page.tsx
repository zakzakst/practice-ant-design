import ReactMarkdown from "react-markdown";
import { markdown } from "./markdown";

const Page = () => {
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default Page;
