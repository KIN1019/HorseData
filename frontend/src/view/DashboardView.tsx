import { ToggleButton } from '@mui/material';
import { NavigationBar } from '../component/NavigationBar';
import TableView from './TableView';
import { TableDialog } from '../component/Dialog';


export const DashboardView = () =>{
    return(
     <div style={{ display: 'flex' }}>
            <NavigationBar/>
            <TableDialog/>
            <TableView/>
     </div>
    )
}