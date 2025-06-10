import rateLimit from "../config/upstash.js";




const rateLimiter = async (req, res, next) => {
    try {
      const { success } = await rateLimit.limit("my-limit-key");
      if (!success) {
        return res.status(429).json({ message: "Too many requests, please try after 60 seconds" });
      }
      next();
    } catch (error) {
      console.error("Rate limit error:", error);
      res.status(500).json({ message: "Rate limit internal error." });
    }
  };
  
  export default rateLimiter;