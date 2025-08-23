import { Button } from "@/components/ui/button";
import {
  // Medal,
  // Bitcoin,
  Shirt,
} from "@/components/my-icon";

const Page = () => {
  return (
    <>
      <div>
        <Shirt color="#f00" className="size-10" />
      </div>
      <div>
        <Button>
          <Shirt />
          ボタン
        </Button>
      </div>
    </>
  );
};

export default Page;
