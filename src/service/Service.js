import Axios from "axios";
import log from 'loglevel';

const client = Axios.create();
client.defaults.timeout = 10000;

export const getData = (url) => {
    return client.get(url).then(response => {
        return response.data;

      }).catch(error => {
        log.error('error fetching url %s, error: %s', url, error);
        throw new Error(error);
      })
};