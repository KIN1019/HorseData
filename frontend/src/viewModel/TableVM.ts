import { tableModel } from "../model/TableModel"
import { SearchCriteria } from "../store/DashboardStore"




export const tableVM = () =>{
    const getTableData = (searchCriteria : SearchCriteria) => {
        return tableModel().getTableData(searchCriteria)
    }


    return{
        getTableData : getTableData
    }
}