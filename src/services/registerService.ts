import { $api, apiConfig } from "../constants/api";
import { Register } from "../types/client.types";

class RegisterService {
    Register(body: Register) {
        return $api.post(apiConfig.Register, body);
    }
}

export default new RegisterService();
