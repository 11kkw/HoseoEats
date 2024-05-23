const axios = require("axios");

const geocode = async (req, res) => {
  const apiUrl = "https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode";
  const query = req.query.query || "default";

  const apiOptions = {
    headers: {
      "X-NCP-APIGW-API-KEY-ID": process.env.NAVER_CLIENT_ID,
      "X-NCP-APIGW-API-KEY": process.env.NAVER_CLIENT_SECRET,
    },
  };

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const response = await axios.get(
      `${apiUrl}?query=${encodeURIComponent(query)}`,
      apiOptions
    );

    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Geocode API error:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

module.exports = geocode;
