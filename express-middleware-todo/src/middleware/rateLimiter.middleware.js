let requestCount = 0;
let lastResetTime = Date.now();

const rateLimiter = (req, res, next) => {
  const currentTime = Date.now();

  if (currentTime - lastResetTime > 60000) {
    requestCount = 0;
    lastResetTime = currentTime;
  }

  requestCount++;

  if (requestCount > 15) {
    return res.status(429).json({
      error: "Too many requests, please try again later",
    });
  }

  next();
};

module.exports = rateLimiter;
