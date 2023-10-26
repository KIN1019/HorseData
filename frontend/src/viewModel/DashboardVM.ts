import dayjs from "dayjs"
import BaseStore from "../store/BaseStore"
import { DashboardStore } from "../store/DashboardStore"
import BaseVM from "./BaseVM"

interface DashBoardVMProps extends BaseVM {
    stores: BaseStore<DashboardStore>[],
}    
export const DashBoardVM = ({stores}: DashBoardVMProps) =>{
    
    const [dashboardStore] = stores
    
    const dashboardStoreDispatch = dashboardStore.dispatch ? dashboardStore.dispatch : () => null
    const dialogStatus = (e:boolean) => {
        dashboardStoreDispatch((prevState) => ({
            ...prevState,
            dialogStatus: e,
        }));
    }

    const dialogSubmit = (venue:string, round:string, date: dayjs.Dayjs | null) =>{
        const formattedDate = date!!.format('YYYY-MM-DD');
        const year = formattedDate.split("-")[0]
        const month =  formattedDate.split("-")[1]
        const day = formattedDate.split("-")[2]
        dashboardStoreDispatch((prevState) => ({
            ...prevState,
            searchCriteria: {
                venue: venue,
                round: round,
                year: year,
                month: month,
                day: day,
              },
        }));
    }
    const loginStatus = (name: string, password : string) =>{
        const correctname = "asd"
        const correctpassword = "asd"
        if(name == correctname && password == correctpassword){
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
        loginStatus : loginStatus,
        dialogStatus : dialogStatus,
        dialogSubmit : dialogSubmit
    }
}
