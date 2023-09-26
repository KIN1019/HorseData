export interface DashboardStore {
    name : string
    password : string
    nameStatus : boolean
    passwordStatus : boolean
    loginStatus : boolean
    dialogStatus : boolean
}

export const EMPTY_DASHBOARD_STORE : DashboardStore = {
    name: "",
    password: "",
    nameStatus : false,
    passwordStatus: false,
    loginStatus : false,
    dialogStatus : false
}