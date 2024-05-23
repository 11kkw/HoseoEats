const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const apiUrl = "https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode";
  const query = req.query.query || "default";
  const apiOptions = {
    method: "GET",
    headers: {
      "X-NCP-APIGW-API-KEY-ID": process.env.NAVER_CLIENT_ID,
      "X-NCP-APIGW-API-KEY": process.env.NAVER_CLIENT_SECRET,
    },
  };

  try {
    const response = await fetch(`${apiUrl}?query=${query}`, apiOptions);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
};
