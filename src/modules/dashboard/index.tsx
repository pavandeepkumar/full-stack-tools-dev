"use client";
import { IGetDashboardList, useGetDashboardList } from "@/state/dashboard";
import useUserInfoStore from "@/store/useUserInfoStore";
import React from "react";

const Dashboard = () => {
  const { userData, setUserData } = useUserInfoStore();
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
      </div>
    </div>
  );
};

export default Dashboard;
