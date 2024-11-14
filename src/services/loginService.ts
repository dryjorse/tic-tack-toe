import { $api, apiConfig } from "../constants/api";
import { Login } from "../types/client.types";


export default new class LoginService {
  Login(body: Login) {
    return $api.post(apiConfig.Login, body);
  }
}


