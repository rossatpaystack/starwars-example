import Axios from "axios";

export const getData = (url) => {
    return Axios.get(url).then(response => {
        return response.data;
      })
};