export const paramsToQueryString = (
    params: Record<string, string | number | boolean> | null | undefined
  ): string => {
    if (params) {
      let queryString = "?";
      Object.keys(params).forEach((key) => {
        queryString += `${encodeURIComponent(key)}=${encodeURIComponent(
          params[key].toString()
        )}&`;
      });
      queryString = queryString.slice(0, -1);
      return queryString;
    }
    return "";
  };
  