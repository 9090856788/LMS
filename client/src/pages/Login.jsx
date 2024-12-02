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
import { RotatingLines } from "react-loader-spinner";
import Swal from "sweetalert2";
import { setIsAuthenticated, setUser } from "../redux/auth/reducer";
import { useDispatch } from "react-redux";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("signup");

  const dispatch = useDispatch();
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async () => {
    // Validation
    if (!name.trim()) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Name field is required.",
      });
      return;
    }
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Email field is required.",
      });
      return;
    }
    if (!validateEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Invalid email format",
      });
      return;
    }
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Password must be at least 6 characters long.",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/user/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: data.message || "You have registered successfully!",
          timer: 1000,
          showConfirmButton: false,
        });
        dispatch(setUser(response.user));
        setName("");
        setEmail("");
        setPassword("");
        setActiveTab("login");
      } else {
        throw new Error(data.message || "Registration failed.");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    // Validation
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Email field is required.",
      });
      return;
    }
    if (!validateEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Invalid email format",
      });
      return;
    }
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Password must be at least 6 characters long.",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome back, ${data.user.name}!`,
          timer: 1000,
          showConfirmButton: false,
        });

        // Dispatch actions to update Redux store
        dispatch(setIsAuthenticated(true));
        dispatch(setUser(data.user)); // Assuming data.user contains user details

        setEmail("");
        setPassword("");
      } else {
        throw new Error(data.message || "Login failed.");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-[400px]"
      >
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
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleRegister} disabled={loading}>
                {loading ? (
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
                )}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleLogin} disabled={loading}>
                {loading ? (
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
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
