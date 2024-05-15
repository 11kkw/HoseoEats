import React from "react";
import { Flex } from "@chakra-ui/react";

interface PageContentLayoutProps {
  children: React.ReactNode;
}

const PageContentLayout: React.FC<PageContentLayoutProps> = ({ children }) => {
  return (
    <Flex justify="center" overflow="hidden" padding={10}>
      <Flex width="100%" justify="center" maxWidth={"1500px"}>
        <Flex direction="column" bg="white" width="100%">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageContentLayout;
