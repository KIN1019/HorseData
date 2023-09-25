import BaseStore from "../store/BaseStore"
import { LoginStore } from "../store/LoginStore"
import BaseVM from "./BaseVM"

interface LoginVMProps extends BaseVM {
    stores: BaseStore<LoginStore>[],
}    
export const LoginVM = ({stores }: LoginVMProps) =>{
    
    const [loginStore] = stores
    
    const loginStoreDispatch = loginStore.dispatch ? loginStore.dispatch : () => null



    const nameStatus = (name : string) =>{
        console.log(name)
        loginStoreDispatch((prevState)=>({
            ...prevState,
            name : name
        }))

    }
    const passwordStatus = (password : string) =>{
        console.log(password)
        loginStoreDispatch((prevState)=>({
            ...prevState,
            password : password
        }))
    }
    const loginStatus = (name: string, password : string) =>{
        const correctname = "asd"
        const correctpassword = "asd"
        if(name == correctname && password == correctpassword){
            loginStoreDispatch((prevState)=>({
                ...prevState,
                loginStatus : true
            }))
        }else{
            loginStoreDispatch((prevState)=>({
                ...prevState,
                loginStatus : false
            }))
        }
    }   
    return{
        nameStatus : nameStatus,
        passwordStatus : passwordStatus,
        loginStatus : loginStatus
    }
}
