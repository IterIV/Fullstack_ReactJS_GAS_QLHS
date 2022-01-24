import { LOGIN_METHOD, VIEW_AUTH } from "../ulti/settings/config";
import { BaseService } from "./BaseServices";

class UserServices extends BaseService {
  login = (data) => {
    return this.post(VIEW_AUTH, LOGIN_METHOD, data);
  };
}

export const userServices = new UserServices();
