import BaseStore from "../store/BaseStore"
import { DashboardStore } from "../store/DashboardStore"
import BaseVM from "./BaseVM"

interface DashBoardVMProps extends BaseVM {
    stores: BaseStore<DashboardStore>[],
}    
export const DashBoardVM = ({stores }: DashBoardVMProps) =>{
    
    const [dashboardStore] = stores
    
    const dashboardStoreDispatch = dashboardStore.dispatch ? dashboardStore.dispatch : () => null

    const dialogStatus = (e:boolean) => {
        dashboardStoreDispatch((prevState)=>({
            ...prevState,
            dialogStatus : true
        }))
    }

    // const nameStatus = (name : string) =>{
    //     console.log(name)
    //     dashboardStoreDispatch((prevState)=>({
    //         ...prevState,
    //         name : name
    //     }))

    // }
    // const passwordStatus = (password : string) =>{
    //     console.log(password)
    //     dashboardStoreDispatch((prevState)=>({
    //         ...prevState,
    //         password : password
    //     }))
    // }
    const loginStatus = (name: string, password : string) =>{
        const correctname = "asd"
        const correctpassword = "asd"
        if(name == correctname && password == correctpassword){
            console.log(true)
            dashboardStoreDispatch((prevState)=>({
                ...prevState,
                loginStatus : true
            }))
        }else{
            dashboardStoreDispatch((prevState)=>({
                ...prevState,
                loginStatus : false
            }))
        }
    }   


    return{
        // nameStatus : nameStatus,
        // passwordStatus : passwordStatus,
        loginStatus : loginStatus,
        dialogStatus : dialogStatus
    }
}
