import React from "react";
import { Flex } from "@chakra-ui/react";
interface PageContentLayoutProps {
  maxWidth?: string;
  children: React.ReactNode;
}

const PageContentLayout: React.FC<PageContentLayoutProps> = ({
  children,
  maxWidth,
}) => {
  return (
    <Flex justify="center" p="16px 0px">
      <Flex width="100%" justify="center" maxWidth={maxWidth || "1000px"}>
        <Flex
          direction="column"
          width={{ base: "100%", md: "100%" }}
          bg="white"
          padding={10}
          borderRadius={10}
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageContentLayout;
