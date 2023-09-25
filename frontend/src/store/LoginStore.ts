export interface LoginStore {
    name : string
    password : string
    nameStatus : boolean
    passwordStatus : boolean
    loginStatus : boolean
}

export const EMPTY_LOGIN_STORE : LoginStore = {
    name: "",
    password: "",
    nameStatus : false,
    passwordStatus: false,
    loginStatus : false
}