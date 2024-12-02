/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
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

import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../redux/api/apiSlice";

import { useDispatch } from "react-redux";
import { setUser } from "../redux/auth/reducer";
import { RotatingLines } from "react-loader-spinner";
import Swal from "sweetalert2";

const Login2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({}); // To track validation errors

  const dispatch = useDispatch();

  const [loginUser, { isLoading: isLoginLoading }] = useLoginUserMutation();
  const [registerUser, { isLoading: isRegisterLoading }] =
    useRegisterUserMutation();

  // Validate if all fields are filled
  // const isSignupDisabled = !email || !password || !name;
  // const isLoginDisabled = !email || !password;

  // Validation Functions
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || "Invalid email address";
  const validatePassword = (password) =>
    password.length >= 6 || "Password must be at least 6 characters long";
  const validateName = (name) => name.trim().length > 0 || "Name is required";

  // Handle Signup
  const handleSignup = async () => {
    const errors = {};
    if (!validateName(name)) errors.name = validateName(name);
    if (!validateEmail(email)) errors.email = validateEmail(email);
    if (!validatePassword(password))
      errors.password = validatePassword(password);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      const response = await registerUser({ name, email, password }).unwrap();
      setName("");
      setEmail("");
      setPassword("");
      setErrors({}); // Clear errors on successful signup

      Swal.fire({
        icon: "success",
        title: "Signup Successful",
        text: response.message,
        timer: 3000,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: error.data?.message || error.message,
      });
    }
  };

  // Handle Login
  const handleLogin = async () => {
    const errors = {};
    if (!validateEmail(email)) errors.email = validateEmail(email);
    if (!validatePassword(password))
      errors.password = validatePassword(password);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      const response = await loginUser({ email, password }).unwrap();
      dispatch(setUser(response.user));
      setEmail("");
      setPassword("");
      setErrors({}); // Clear errors on successful login

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome back, ${response.user.name}!`,
        timer: 3000,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.data?.message || error.message,
      });
    }
  };

  return (
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
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
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
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
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
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSignup} disabled={isRegisterLoading}>
                {isRegisterLoading ? (
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
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
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
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleLogin} disabled={isLoginLoading}>
                {isLoginLoading ? (
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

export default Login2;
