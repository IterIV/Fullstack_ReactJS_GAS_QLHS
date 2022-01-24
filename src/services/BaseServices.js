import axios from "axios";
import { DOMAIN } from "../ulti/settings/config";

export class BaseService {
  post = (view, method, data) => {
    return axios({
      url: `${DOMAIN}?v=${view}&method=${method}`,
      method: "POST",
      data: data,
    });
  };
}
