import React, { Fragment, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { routesConfig } from "./routesConfig";
import RoleRoute from "./RoleRoute";

// types
import { RouteShape } from "@/app/types/route.type";

const renderRoutes = (routes: RouteShape[]) => {
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
                  path={route.path}
                  exact={route.exact}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  render={(props: any) => (
                    <Guard>
                      <Layout>
                        {route.routes ? (
                          renderRoutes(route.routes)
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

const Routes: React.FC = () => renderRoutes(routesConfig);

export default Routes;
