"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

// https://ui.shadcn.com/docs/components/form
const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <Form {...form}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <div className="grid grid-cols-[max-content_1fr] items-center gap-2">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" className="mt-0" {...field} />
                </FormControl>
              </div>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
          Submit
        </Button> */}
        {/* <form className="space-y-2">
        </form> */}
      </Form>
      <Button
        type="submit"
        onClick={form.handleSubmit(onSubmit)}
        disabled={!form.formState.isValid}
      >
        Submit
      </Button>
    </div>
  );
};

export default Page;
