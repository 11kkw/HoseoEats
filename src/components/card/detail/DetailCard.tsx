import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Badge,
  Button,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import {
  FaHeart,
  FaShareAlt,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { DetailCardData } from "../../../types/CardData";

type DetailCardProps = {
  selectedCards: DetailCardData[];
};

const DetailCard: React.FC<DetailCardProps> = ({ selectedCards }) => {
  const images = selectedCards
    .slice(0, 3)
    .map((card) => card.image || "/images/quest.png");

  while (images.length < 3) {
    images.push("/images/quest.png");
  }

  const defaultCard = selectedCards[0] || {
    title: "",
    foodtype: [],
    description: "",
    location: "",
    score: 0,
  };

  const renderStars = (score: number) => {
    const clampedScore = Math.max(0, Math.min(score, 5)); // score를 0과 5 사이로 제한
    const fullStars = Math.floor(clampedScore);
    const halfStar = clampedScore % 1 >= 0.5 ? 1 : 0;
    const emptyStars = Math.max(0, 5 - fullStars - halfStar); // emptyStars가 음수가 되지 않도록 제한

    return (
      <>
        {Array.from({ length: fullStars }).map((_, index) => (
          <Icon
            width="56px"
            height="56px"
            key={`full-${index}`}
            as={FaStar}
            color="gold"
          />
        ))}
        {halfStar === 1 && (
          <Icon width="56px" height="56px" as={FaStarHalfAlt} color="gold" />
        )}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <Icon
            width="56px"
            height="56px"
            key={`empty-${index}`}
            as={FaRegStar}
            color="gold"
          />
        ))}
      </>
    );
  };

  return (
    <Box
      width="1311px"
      border="1px solid black"
      borderRadius={10}
      height="auto"
      paddingY={10}
      paddingX={20}
    >
      <Flex mb={4}>
        {images.map((image, index) => (
          <Box
            key={index}
            width="387px"
            height="244px"
            border="1px solid black"
            overflow={"hidden"}
            marginRight={index < images.length - 1 ? "10px" : "0"} // 이미지를 나란히 배치
          >
            <Image src={image} width="100%" height="100%" objectFit="cover" />
          </Box>
        ))}
      </Flex>
      {selectedCards.length > 0 ? (
        <>
          <Box>
            <Flex>
              <Box>
                <Text
                  fontFamily="KOHIBaeum"
                  fontWeight={700}
                  fontSize="40px"
                  lineHeight="77px"
                >
                  {defaultCard.title}
                </Text>
                <Flex mb={2}>
                  {defaultCard.foodtype.map((type: string, index: number) => (
                    <Badge
                      key={index}
                      m={1}
                      colorScheme="purple"
                      fontSize="35px"
                    >
                      #{type}
                    </Badge>
                  ))}
                </Flex>
              </Box>
              <Flex align="center" mx={10}>
                <Text
                  fontSize="25px"
                  lineHeight="27.5px"
                  fontWeight="700"
                  color="#666666"
                >
                  {defaultCard.description}
                </Text>
              </Flex>
              <Spacer />
              <Flex align="center">
                <Box>
                  <Flex alignItems="center" mt={4} color="gray.500">
                    <Icon as={FaMapMarkerAlt} mr={1} color="red" />
                    <Text
                      fontFamily="KOHBaeum, sans-serif"
                      fontSize="17px"
                      lineHeight="18.7px"
                    >
                      {defaultCard.location}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
            <Flex mt={4} align="center">
              <Box display="flex" alignItems="center" mr={4}>
                {renderStars(Number(defaultCard.score))}
                <Text
                  ml={10}
                  fontSize="46px"
                  fontWeight={400}
                  lineHeight="50.6px"
                >
                  {defaultCard.score !== undefined
                    ? Number(defaultCard.score).toFixed(1)
                    : "N/A"}
                </Text>
              </Box>
              <Spacer />
              <Button
                bg="white"
                color="black"
                leftIcon={<FaHeart fontSize="41px" color="red" />}
                _hover={{ bg: "gray.100" }}
                width="169px"
                height="61px"
                border="1px solid black"
                mr={10}
              >
                <Text fontSize="30px" lineHeight="33px" fontWeight="700">
                  찜하기
                </Text>
              </Button>
              <Button
                bg="white"
                color="black"
                leftIcon={<FaShareAlt fontSize="41px" color="black" />}
                _hover={{ bg: "gray.100" }}
                width="169px"
                height="61px"
                border="1px solid black"
              >
                <Text fontSize="30px" lineHeight="33px" fontWeight="700">
                  공유
                </Text>
              </Button>
            </Flex>
          </Box>
        </>
      ) : (
        <p>No data available</p>
      )}
    </Box>
  );
};

export default DetailCard;
