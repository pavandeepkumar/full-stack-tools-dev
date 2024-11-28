import { API, instance } from "@/config";
import { paramsToQueryString } from "@/utils";
import { IGetDashboardList } from "./types";

export const getDashboardListApi = async (params: IGetDashboardList) => {
    if (!params) return null;
    const queryString = paramsToQueryString(params as unknown as Record<string, string | number | boolean>);
    if (API.dashboard.list) {
       try {
        const response = await instance.get(API.dashboard.list + queryString);
        if (response.data) return response.data.users;
        else {
            return null;
        }
       } catch (error) {
         console.log("Error", error);
         return null;
       }
    }
    return null;
};