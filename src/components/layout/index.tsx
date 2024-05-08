import React from "react";
import Navbar from "../Navbar";
import { Stack } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Stack>
        <Navbar />
      </Stack>
      {children}
    </>
  );
};

export default Layout;
