import Link from "next/link";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div
    // className="p-6"
    // style={{ height: "200vh" }}
    >
      <Button variant="link" asChild>
        <Link href="/">Link</Link>
        {/* Button */}
      </Button>
      <Button className="bg-accent" asChild>
        <Link href="/">Link</Link>
        {/* Button */}
      </Button>
    </div>
  );
};

export default Page;
