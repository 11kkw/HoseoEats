const axios = require("axios");

const geocode = async (req, res) => {
  const apiUrl = "https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode";
  const query = req.query.query || "default";
  console.log("NAVER_CLIENT_ID:", process.env.NAVER_CLIENT_ID);
  console.log("NAVER_CLIENT_SECRET:", process.env.NAVER_CLIENT_SECRET);

  const apiOptions = {
    headers: {
      "X-NCP-APIGW-API-KEY-ID": process.env.NAVER_CLIENT_ID,
      "X-NCP-APIGW-API-KEY": process.env.NAVER_CLIENT_SECRET,
    },
  };

  try {
    const response = await axios.get(
      `${apiUrl}?query=${encodeURIComponent(query)}`,
      apiOptions
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Geocode API error:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

module.exports = geocode;
