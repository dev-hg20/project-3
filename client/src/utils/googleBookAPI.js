import axios from "axios";

const APIKEY = "AIzaSyBGpmv6sIgbgTjSMP9n2zXV8LZNKVAr08o";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  search: function (query) {
    return axios.get(BASEURL + query + "&key=" + APIKEY);
  },
};

// api.search("book name").then(function () {});
