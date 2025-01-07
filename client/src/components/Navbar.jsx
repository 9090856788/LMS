/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Menu, School } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DarkMode from "./DarkMode.jsx";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const user = false;

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex h-16 bg-white dark:bg-[#0A0A0A] border-b border-gray-200 dark:border-gray-800 justify-between items-center px-8">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <School className="text-gray-900 dark:text-gray-100" />
          <h1 className="text-2lg font-extrabold text-gray-900 dark:text-gray-100">
            E-Learning
          </h1>
        </div>

        {/* User Menu and Theme Section */}
        <div className="flex items-center gap-5">
          {user !== true ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border dark:border-gray-700 rounded-md shadow-lg">
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-800">
                  My Learning
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-800">
                  Edit Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-800 text-red-600">
                  Logout
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-800">
                  Dashboard
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex gap-4">
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Login
              </button>
              <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-100">
                Register
              </button>
            </div>
          )}
          <DarkMode />
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden items-center justify-between h-16 px-4">
        <h1 className="font-extrabold text-2xl">E-learning</h1>
        <MobileNavbar />
      </div>
    </>
  );
};

export default Navbar;

const MobileNavbar = () => {
  const user = false; // Example: Update to true to test logged-in state.
  const role = "instructore";

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="rounded-full bg-gray-200 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            variant="outline"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="p-4">
          {/* Logo and Theme Section */}
          <SheetHeader className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <School className="text-gray-900 dark:text-gray-100" />
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                E-Learning
              </h1>
            </div>
          </SheetHeader>

          {/* Navigation Items */}
          <div className="flex flex-col gap-4">
            <nav>
              <ul className="space-y-2">
                <li className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md px-3 py-2">
                  My Learning
                </li>
                <li className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md px-3 py-2">
                  Edit Profile
                </li>
                {role === "instructore" && (
                  <li className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md px-3 py-2">
                    Dashboard
                  </li>
                )}
              </ul>
            </nav>

            {/* User Options */}
            {user == true ? (
              <button className="text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded-md px-3 py-2">
                Logout
              </button>
            ) : (
              <div className="flex flex-col gap-3">
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  Login
                </button>
                <button className="w-full px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-100">
                  Register
                </button>
              </div>
            )}
          </div>
          <div className="flex justify-center mt-5">
            <DarkMode />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
