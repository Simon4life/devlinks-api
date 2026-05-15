import React, { useState, useEffect } from "react";
import { Root, ErrorPage, AddNewLink, ProfilePage, PreviewPage, Auth, HomePage } from "./routes";
import { RouterProvider, createBrowserRouter, redirect, } from "react-router-dom";
import { useUserContext } from "./context/user_context";
import { useLinksContext } from "./context/links_context";
import customFetch from "./utils/customFetch";

const App = () => {
  const { authAction, fetchUser, IsLoading, user } = useUserContext()
  const {getLinks} = useLinksContext();

  let router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true, 
          loader: async () => {
            if(user) {
              try {
                const response = await customFetch().get("/api/v1/links");
                const { links } = response.data;
                return links;
              } catch (error) {
                console.log(error)
                localStorage.removeItem("user")
                return redirect("/auth");
              } 
            } else {
              return redirect("/auth");
            }
          },
          element: <AddNewLink />,
        },
        {
          path: "profile",
          // loader: authLoader,
          element: <ProfilePage />,
        },
      ],
    },
    {
      path: "/landing",
      element: <HomePage />,
    },
    {
      path: "/preview/:userId",
      element: <PreviewPage />,
    },
    {
      path: "/auth",
      element: <Auth />,
      loader: async ()=> {
        return authAction()
      },
    },
  ]);
  return <RouterProvider router={router} />;
}


export default App