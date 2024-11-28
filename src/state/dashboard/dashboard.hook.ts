import { useQuery } from "@tanstack/react-query";
import { getDashboardListApi } from "./dashboard.api";
import { IGetDashboardList } from "./types";

export const useGetDashboardList = (params: IGetDashboardList) => {
    return useQuery({
        queryKey: ["dashboard", params],
        queryFn: () => getDashboardListApi(params),
        retry: 0,
        refetchOnWindowFocus: false,
    });
};