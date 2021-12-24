import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "24796652-91261c2217f863e1b8ad91622";

const getSearchImages = (page, perPage, query) => {
  const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}&key=${API_KEY}`;
  return axios.get(url).then((response) => {
    if (response.status === 200 && response.data.hits.length !== 0) {
      return response.data;
    } else {
      return null;
    }
  });
};

export default { getSearchImages };