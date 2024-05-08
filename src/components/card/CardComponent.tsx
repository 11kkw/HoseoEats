import React from "react";
import {
  Image,
  Card,
  CardBody,
  CardFooter,
  Heading,
  CardHeader,
  Flex,
  Text,
} from "@chakra-ui/react";
import { CardData } from "../../types/CardData";

const CardComponent: React.FC<CardData> = ({ image, title, description }) => {
  return (
    <Card
      transition="transform 0.2s"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "2xl",
      }}
      boxShadow="lg"
      maxWidth={{ sm: "340px", md: "360px", lg: "400px" }}
      width="100%"
      m="auto"
    >
      <CardHeader>
        <Flex justifyContent="center" width="100%">
          <Heading size="md">{title}</Heading>
        </Flex>
      </CardHeader>

      <CardBody>
        <Flex justifyContent="center" width="100%">
          <Image src={image} width="100%" maxHeight="150px" objectFit="cover" />
        </Flex>
      </CardBody>

      <CardFooter>
        <Flex width="100%" justifyContent="center">
          <Text isTruncated maxWidth="300px" border="1px solid red">
            {description}
          </Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
