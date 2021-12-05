import React from "react";
import style9 from "style9";
import Topbar from "./Topbar";

// styles
import { base } from "@/app/styles/baseClasses";

// layouts
import CommonLayout from "@/app/layouts/CommonLayout";

const Home: React.FC = () => {
  return (
    <div className={style9(base.root)}>
      <Topbar />
      <CommonLayout sidebar={<div />}>
        <div className={style9(base.root)}>Home Page</div>
      </CommonLayout>
    </div>
  );
};

export default Home;
