import { NavigationBar } from '../component/NavigationBar';
import TableView from './TableView';


export const DashboardView = () =>{
    return(
     <div style={{ display: 'flex' }}>
            <NavigationBar/>
            <TableView/>
     </div>
    )
}