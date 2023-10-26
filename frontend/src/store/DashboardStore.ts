export interface DashboardStore {
    name : string
    password : string
    nameStatus : boolean
    passwordStatus : boolean
    loginStatus : boolean
    dialogStatus : boolean
    searchCriteria : SearchCriteria
}

export const EMPTY_DASHBOARD_STORE : DashboardStore = {
    name: "",
    password: "",
    nameStatus : false,
    passwordStatus: false,
    loginStatus : false,
    dialogStatus : false,
    searchCriteria: {
        venue: "",
        round: "",
        year: "",
        month: "",
        day: "",
      },
}

interface SearchCriteria {
    venue : string
    round : string
    year : string
    month : string
    day : string
}