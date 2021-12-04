import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

// types
import { RouteShape } from "@/app/types/route.type";

// guards
import AuthGuard from "@/app/guards/AuthGuard";
import GuestGuard from "@/app/guards/GuestAuth";

// layouts
import MainLayout from "@/app/layouts/MainLayout";

// utils
import { USER_ROLE } from "@/app/utils/userRole";
import { PATH_NAME } from "../utils/pathName";

// modules
const Error403 = lazy(() => import("@/app/modules/Error403"));
const Error404 = lazy(() => import("@/app/modules/Error404"));
const SignUp = lazy(() => import("@/app/modules/SignUp"));
const SignIn = lazy(() => import("@/app/modules/SignIn"));
const Home = lazy(() => import("@/app/modules/Home"));

export const routesConfig: RouteShape[] = [
  {
    exact: true,
    path: PATH_NAME.ROOT,
    component: () => <Redirect to={PATH_NAME.HOME} />,
  },
  {
    exact: true,
    path: PATH_NAME.ERROR_403,
    component: Error403,
  },
  {
    exact: true,
    path: PATH_NAME.ERROR_404,
    component: Error404,
  },
  {
    exact: true,
    path: PATH_NAME.SIGNUP,
    guard: GuestGuard,
    component: SignUp,
  },
  {
    exact: true,
    path: PATH_NAME.SIGNIN,
    guard: GuestGuard,
    component: SignIn,
  },
  {
    path: PATH_NAME.ROOT,
    guard: AuthGuard,
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: PATH_NAME.HOME,
        component: Home,
        requireRoles: [USER_ROLE.USER],
      },
      {
        component: () => <Redirect to={PATH_NAME.ERROR_404} />,
      },
    ],
  },
];
