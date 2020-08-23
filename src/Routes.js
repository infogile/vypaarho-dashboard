import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from "./components";
import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";

import {
  Landing as LandingView,
  SignUp as SignUpView,
  SignIn as SignInView,
  Forgot as ForgotView,
  Reset as ResetView,
  GetStart as GetStartView,
  Explore as ExploreView,
  ExploreDetail as ExploreDetailView,
  Profile as ProfileView,
  Bookmark as BookmarkView,
  Dashboard as DashboardView,
  NotFound as NotFoundView,
  SocialLogin,
} from "./views";

const Routes = () => {
  return (
    <Switch>
      {/* <Redirect exact from="/" to="/explore" /> */}
      <RouteWithLayout
        component={LandingView}
        exact
        layout={MinimalLayout}
        path="/"
      />
      <RouteWithLayout
        component={SocialLogin}
        exact
        layout={MinimalLayout}
        path="/sociallogin"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={ForgotView}
        exact
        layout={MinimalLayout}
        path="/forgot"
      />
      <RouteWithLayout
        component={ResetView}
        exact
        layout={MinimalLayout}
        path="/reset-password/:handle"
      />
      <RouteWithLayout
        component={GetStartView}
        exact
        layout={MinimalLayout}
        private={true}
        path="/get-start"
      />
      <RouteWithLayout
        component={BookmarkView}
        exact
        layout={MainLayout}
        private={true}
        path="/bookmarks"
      />
      <RouteWithLayout
        component={ProfileView}
        exact
        layout={MainLayout}
        private={true}
        path="/profile"
      />
      <RouteWithLayout
        component={ExploreView}
        exact
        private={true}
        layout={MainLayout}
        path="/explore"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        private={true}
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={ExploreDetailView}
        exact
        private={true}
        layout={MainLayout}
        path="/explore/:handle"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MainLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
