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
          width={{ base: "80%", md: "80%" }}
          mr={{ base: 0, md: 6 }}
          border="1px solid red"
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageContentLayout;
