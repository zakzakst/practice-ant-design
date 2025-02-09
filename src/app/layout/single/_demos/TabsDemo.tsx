"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import DesignHeading from "@/app/layout/_components/DesignHeading";
import DesignBox from "@/app/layout/_components/DesignBox";

const TabsDemo = () => {
  return (
    <section>
      <DesignHeading tag="h4">タブ</DesignHeading>
      <DesignBox className="mt-4">
        <Tabs
          defaultValue="account"
          className="w-[400px]"
          // value="settings"
          onValueChange={(e) => console.log(e)}
        >
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings" disabled>
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
          <TabsContent value="settings">Change your settings here.</TabsContent>
        </Tabs>
      </DesignBox>
    </section>
  );
};

export default TabsDemo;
