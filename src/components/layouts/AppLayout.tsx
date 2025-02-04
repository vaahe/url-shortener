import React, { ReactNode } from "react";
import { Layout } from "antd";

interface IAppLayoutProps {
  children: ReactNode;
}

export const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};
