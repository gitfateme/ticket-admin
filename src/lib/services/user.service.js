import { API_ENDPOINTS } from "@/lib/constants/apiEndpoints";
import { apiClient } from "@/lib/httpClient";

export const getUsersService = async () => {
  const response = await apiClient.get(`${API_ENDPOINTS.GET_USERS}`);
  return response.data;
};

export const logout = async () => {
  const response = await apiClient.get(API_ENDPOINTS.LOG_OUT);
  return response.data;
};

export const getUserProfileInfo = async () => {
  const response = await apiClient.get(API_ENDPOINTS.GET_USER_INFO);
  return response.data;
};

export const getUserInfo = async () => {
  const response = await apiClient.get(
    `${API_ENDPOINTS.GET_USER_ACCOUNT_INFO}?platform=web&number=1`,
  );
  return response.data;
};

export const getUserAvatar = async () => {
  const response = await apiClient.get(API_ENDPOINTS.GET_AVATAR, {
    responseType: "blob",
  });
  return response.data;
};
