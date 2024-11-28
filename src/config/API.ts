interface APIPaths {
    dashboard: {
        list?: string,
        add?: string,
        update?: string,
        delete?: string,
        getById?: string,
    }
}
const API: APIPaths = {
    dashboard: {
        add: 'dashboard/add',
        list: 'users',
        update: 'dashboard/update',
        delete: 'dashboard/delete',
        getById: 'dashboard/get',
    }
}
export default Object.freeze(API);

