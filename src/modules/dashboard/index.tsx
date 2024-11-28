"use client";
import { IGetDashboardList, useGetDashboardList } from "@/state/dashboard";
import useUserInfoStore from "@/store/useUserInfoStore";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Dashboard = () => {
  const { userData, setUserData } = useUserInfoStore();
  const { setTheme } = useTheme()
  const params: IGetDashboardList = {
    limit: 10,
    page: 1,
    search: "dashboard",
  };
  const { data: dashboardListData } = useGetDashboardList(params);
  console.log("dashboardListData", dashboardListData)
  // Update the user info
  const updateUserInfo = () => {
    setUserData({
      id: "123",
      username: "john_doe",
      email: "john.doe@example.com",
    });
  };


  // Reset the profile info
  const resetProfileInfo = () => {
    setUserData({
      email: "",
      username: "",
      id: "123",
    });
  };

  return (
    <div>
      <div>
        <h1>User Profile</h1>
        <p>Username: {userData.username}</p>
        <p>Email : {userData.email}</p>
        <button onClick={updateUserInfo}>Update User Info</button>
        <button type="reset" onClick={resetProfileInfo}>
          Reset The Profile Info
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </div>
  );
};

export default Dashboard;
