import { useContext, useEffect, useState } from "react"
import { EmptyLoginStore } from "../store/EntryLoginStore"
import LoginPage from "./LoginView"
import { DashboardView } from "./DashboardView"


export const MainView = () =>{

    const loginStore = useContext(EmptyLoginStore)
    const [loginStatus, setLoginStatus] = useState<boolean>(loginStore.entity.loginStatus)
    useEffect(()=>{
        setLoginStatus(loginStore.entity.loginStatus)
      },[loginStore.entity])

    
    return(
        <>
            {loginStatus? <DashboardView/>:<LoginPage/>}
        </>
    )
       
    
}