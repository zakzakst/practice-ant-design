"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const SelectDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">セレクトボックス</DesignHeading>
      <DesignBox className="mt-4">
        <Select
          defaultValue="dark"
          // value="light"
          onValueChange={(e) => console.log(e)}
          // disabled
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system" disabled>
              System
            </SelectItem>
          </SelectContent>
        </Select>
      </DesignBox>
    </section>
  );
};

export default SelectDemo;
