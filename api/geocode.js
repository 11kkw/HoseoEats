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
    // 환경 변수 확인 로그
    console.log("NAVER_CLIENT_ID:", process.env.NAVER_CLIENT_ID);
    console.log("NAVER_CLIENT_SECRET:", process.env.NAVER_CLIENT_SECRET);

    // 요청 URL 로그
    console.log("Request URL:", `${apiUrl}?query=${encodeURIComponent(query)}`);

    const response = await fetch(
      `${apiUrl}?query=${encodeURIComponent(query)}`,
      apiOptions
    );

    // 응답 상태 확인
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    // 에러 메시지 로그
    console.error("Geocode API error:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};
