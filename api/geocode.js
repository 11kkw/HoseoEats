import fetch from "node-fetch";

const geocode = async (req, res) => {
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
    console.log("Request URL:", `${apiUrl}?query=${encodeURIComponent(query)}`);

    const response = await fetch(
      `${apiUrl}?query=${encodeURIComponent(query)}`,
      apiOptions
    );

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Geocode API error:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

export default geocode;
