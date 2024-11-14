import axios from "axios";

export const API_URL = import.meta.env.VITE_SERVER_URL;
export const $api = axios.create({ baseURL: API_URL });

export enum apiConfig {
  Login = "login/",
  Register = "register/",
}

export enum queryKeys {
  Login = "Login",
  Register = "Register",
}