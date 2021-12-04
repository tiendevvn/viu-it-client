import React, { ComponentType } from "react";

type CommonType = {
  exact?: boolean;
  path?: string;
  guard?:
    | React.LazyExoticComponent<ComponentType<unknown>>
    | ComponentType<unknown>;
  layout?: React.FunctionComponent;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: any;
  requireRoles?: string[] | [];
};

export type RouteShape = CommonType & {
  routes?: CommonType[];
};
