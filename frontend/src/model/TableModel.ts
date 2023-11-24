import axios from "axios";
import { SearchCriteria } from "../store/DashboardStore";

export const tableModel = () => {

    const getTableData = (searchCriteria : SearchCriteria) => {
        var data = JSON.stringify(searchCriteria)
        var config = {
          method: 'post',
          url: 'http://localhost:5000/post_json',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        };
    
        return axios(config)
          .then(function (response: any) {
            return response.data
          })
          .catch(function (error: any) {
            console.log(error);
        });
        }

    return{
        getTableData : getTableData
    }
}
