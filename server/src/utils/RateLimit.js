import rateLimit from "express-rate-limit"

export const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes window
    max: 100,                // Allow up to 100 requests per window
    message: {
        code: '429',
        message: 'Too many requests. Please try again later.'
    }
});