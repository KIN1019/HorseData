export interface DashboardStore {
    name : string
    password : string
    nameStatus : boolean
    passwordStatus : boolean
    loginStatus : boolean
    dialogStatus : boolean
    submitStatus : boolean
    searchCriteria : SearchCriteria
}

export const EMPTY_DASHBOARD_STORE : DashboardStore = {
    name: "",
    password: "",
    nameStatus : false,
    passwordStatus: false,
    loginStatus : false,
    dialogStatus : false,
    submitStatus : false,
    searchCriteria: {
        date : "",
        venue: "",
        round: ""
      },
}

export interface SearchCriteria {
    date : string
    venue : string
    round : string
}