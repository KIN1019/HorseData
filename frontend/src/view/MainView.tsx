import { useContext, useEffect, useState } from "react"
import { EmptyDashboardStore } from "../store/EntryDashboardStore"
import LoginPage from "./LoginView"
import { DashboardView } from "./DashboardView"


export const MainView = () =>{

    const DashboardStore = useContext(EmptyDashboardStore)
    const [loginStatus, setLoginStatus] = useState<boolean>(DashboardStore.entity.loginStatus)
    useEffect(()=>{
        setLoginStatus(DashboardStore.entity.loginStatus)
      },[DashboardStore.entity])

    
    return(
        <>
            {loginStatus? <DashboardView/>:<LoginPage/>}
        </>
    )
       
    
}