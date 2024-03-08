import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

import { Posts } from "../models/posts.model.js";

const getposts = asyncHandler(async (req, res) => {
  try {
    const data = await Posts.find();

    return res.status(200).json(
      new ApiResponse(
        200,
        {
          data,
        },
        "All posts"
      )
    );
  } catch (error) {
    throw new ApiError(500, "Something went wrong while fetching posts")
  }
});

export { getposts };
