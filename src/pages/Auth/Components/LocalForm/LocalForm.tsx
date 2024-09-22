import { useState } from "react";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/Button/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/Form/Form";
import { Input } from "@/components/ui/Form/Input/Input";

const LocalForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const toggleForm = () => setIsRegister(!isRegister);

  return (
    <div className="space-y-6">
      <Form {...form}>
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {isRegister && (
          <FormField
            name="confirmPassword"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm your password"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        )}
      </Form>

      <div className="text-sm text-gray-500 text-center">
        {isRegister ? (
          <>
            Already have an account?{" "}
            <span onClick={toggleForm} className="text-blue-500 cursor-pointer">
              Login
            </span>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <span onClick={toggleForm} className="text-blue-500 cursor-pointer">
              Register
            </span>
          </>
        )}
      </div>

      <Button className="w-full" disabled>
        {isRegister ? "Register" : "Login"}
      </Button>
    </div>
  );
};

export default LocalForm;
