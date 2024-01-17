import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const endpoints = {
  default: "/api/review",
  getAll: "/get_all",
};

export const getReviews = async ({ productId }) => {
  try {
    const requestUrl =
      BASE_URL +
      endpoints.default +
      endpoints.getAll +
      `?productId=${productId}`;

    var config = {
      method: "get",
      url: requestUrl,
    };

    const response = await axios(config);

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
