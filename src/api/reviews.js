import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const endpoints = {
  default: "/api/review",
  get: "/get",
};

export const getReview = async ({ productId, user }) => {
  try {
    const requestUrl =
      BASE_URL +
      endpoints.default +
      endpoints.get +
      `?productId=${productId}&user=${user}`;

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
