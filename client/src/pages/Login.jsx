/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <Tabs defaultValue="signup" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup">Signup</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Signup</CardTitle>
                <CardDescription>
                  Create a new account and click signup when you're done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your Full Name"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="name">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="name">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your Password"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Signup</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Login your password here. After signup, you'll be logged in.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="name">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your Password"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
export default Login;
