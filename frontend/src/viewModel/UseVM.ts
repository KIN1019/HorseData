import { useContext } from "react"
import { EmptyDashboardStore } from "../store/EntryDashboardStore"
import { DashBoardVM } from "./DashboardVM"

export const UseVM =()=>{
    const dashboardStore = useContext(EmptyDashboardStore)
    const dashBoardVM = DashBoardVM({
        stores : [dashboardStore],
    })
            
    return dashBoardVM
}