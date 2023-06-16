import { useRouter } from "next/router";
import useApi from "./useApi";
import BASE_URL from "../pages/api/apiConfig";

const useAuthApi = (router) => {
  const { isLoading, error, makeRequest } = useApi();

  const login = async (email, password) => {
    const data = {
      email,
      password,
    };

    try {
      const response = await makeRequest(`${BASE_URL}/api/login`, "POST", data);

      if (response.status === true) {
        // alert(response.status);
        router.push("/home");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      throw error;
    }
  };

  const register = async (
    firstName,
    lastName,
    email,
    phone,
    password,
    refer_user = ""
  ) => {
    const data = {
      firstName,
      lastName,
      email,
      phone,
      password,
      refer_user,
    };

    try {
      const response = await makeRequest(
        `${BASE_URL}/api/register`,
        "POST",
        data
      );

      if (response.status === true) {
        router.push("/");
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      throw error;
    }
  };

  return { isLoading, error, login, register };
};

export default useAuthApi;
