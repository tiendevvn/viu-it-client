import React, { Fragment, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { routesConfig } from "./routesConfig";
import RoleRoute from "./RoleRoute";

// types
import { RouteShape } from "@/app/types/route.type";
import { VIUState } from "@/app/types/viu.type";

const RenderRoutes: React.FC<PropTypeRenderRoutes> = ({ routes }) => {
  const { profile } = useSelector(userSelector);
  return (
    <>
      {routes ? (
        <Suspense fallback={<div />}>
          <Switch>
            {routes.map((route: RouteShape, idx: number) => {
              const Guard = route.guard || Fragment;
              const Layout = route.layout || Fragment;
              const Component = route.component;
              const requireRoles = route.requireRoles || [];

              return (
                <Route
                  key={`routes-${idx}`}
                  path={
                    route.path === "/profile" ? `/${profile?._id}` : route.path
                  }
                  exact={route.exact}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  render={(props: any) => (
                    <Guard>
                      <Layout>
                        {route.routes ? (
                          <RenderRoutes routes={route.routes} />
                        ) : (
                          <RoleRoute requireRoles={requireRoles}>
                            <Component {...props} />
                          </RoleRoute>
                        )}
                      </Layout>
                    </Guard>
                  )}
                />
              );
            })}
          </Switch>
        </Suspense>
      ) : null}
    </>
  );
};

type PropTypeRenderRoutes = {
  routes: RouteShape[];
};

const Routes: React.FC = () => <RenderRoutes routes={routesConfig} />;

const userSelector = (state: VIUState) => state.user;

export default Routes;
