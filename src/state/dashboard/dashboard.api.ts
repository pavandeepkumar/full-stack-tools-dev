import { API, instance } from "@/config";
import { paramsToQueryString } from "@/utils";
import { IGetDashboardList } from "./types";



export const getDashboardListApi = async (params: IGetDashboardList) => {
    if (!params) return null;
    const queryString = paramsToQueryString(params as unknown as Record<string, string | number | boolean>);
    if (API.dashboard.list) {
        const response = await instance.get(API.dashboard.list + queryString);
        if (!response.data.data.error) return response.data.data;
        else {
            return null;
        }
    }
    return null;
};