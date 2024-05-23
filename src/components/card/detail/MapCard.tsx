import React, { useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import axios from "axios";
import { DetailCardData } from "../../../types/CardData";

type MapCardProps = {
  default_card: DetailCardData;
};

const MapCard: React.FC<MapCardProps> = ({ default_card }) => {
  useEffect(() => {
    const loadNaverMap = async (x: number, y: number) => {
      const script = document.createElement("script");
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_CLIENT_ID}`;
      script.async = true;
      script.onload = () => {
        if (window.naver) {
          const mapElement = document.getElementById("map");
          if (mapElement) {
            const map = new naver.maps.Map(mapElement, {
              center: new naver.maps.LatLng(y, x),
              zoom: 18,
            });

            new naver.maps.Marker({
              position: new naver.maps.LatLng(y, x),
              map: map,
            });
            map.setCenter(new naver.maps.LatLng(y, x));
          }
        } else {
          console.error("Naver Maps API failed to load.");
        }
      };
      document.head.appendChild(script);
    };

    const fetchGeocode = async () => {
      try {
        const response = await axios.get("/api/geocode", {
          params: { query: default_card.location },
        });
        console.log(response);

        if (response.data && response.data.addresses.length > 0) {
          const { x, y } = response.data.addresses[0];
          await loadNaverMap(x, y);
        } else {
          alert("No results found");
        }
      } catch (error) {
        console.error("Geocode API error:", error);
        alert("Failed to fetch geocode");
      }
    };

    fetchGeocode();
  }, [default_card.location]);

  const handleFindWay = () => {
    window.open(
      `https://map.naver.com/v5/directions/-/14141023.008047545,4512235.754536973,18,0,0,0,0,-1?c=14141023.0079433,4512235.7543567,18,0,0,0,dh`,
      "_blank"
    );
  };

  return (
    <Box border="1px solid #ddd" borderRadius="md" width="450px" mx="auto">
      <Box id="map" width="100%" height="450px"></Box>
      <Button
        onClick={handleFindWay}
        width="100%"
        backgroundColor="green.500"
        color="white"
        borderRadius="md"
        _hover={{ backgroundColor: "green.600" }}
      >
        길찾기
      </Button>
    </Box>
  );
};

export default MapCard;
