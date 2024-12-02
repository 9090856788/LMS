/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/auth/reducer";
import { RotatingLines } from "react-loader-spinner";
import Swal from "sweetalert2";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [message, setMessage] = useState(null);

  console.log(name, email, password);

  const handleLogin = () => {};

  const handleRegister = () => {};

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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {/* {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )} */}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )} */}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )} */}
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleRegister} disabled>
                  {/* {isRegisterLoading ? (
                  <RotatingLines
                    visible={true}
                    height="24"
                    width="24"
                    color="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                ) : (
                  "Signup"
                )} */}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Login with your email and password.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )} */}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your Password"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )} */}
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleLogin} disabled>
                  {/* {isLoginLoading ? (
                  <RotatingLines
                    visible={true}
                    height="24"
                    width="24"
                    color="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                ) : (
                  "Login"
                )} */}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Login;
