import { ToggleButton } from '@mui/material';
import { NavigationBar } from '../component/NavigationBar';
import TableView from './TableView';
import { TableDialog } from '../component/Dialog';
import { useContext, useEffect } from 'react';
import { EmptyDashboardStore } from '../store/EntryDashboardStore';


export const DashboardView = () =>{
    const DashboardStore = useContext(EmptyDashboardStore)
    useEffect(()=>{
        // console.log(DashboardStore.entity.dialogStatus)
        console.log(DashboardStore.entity.dialogStatus)
    }, [DashboardStore.entity])
    return(
     <div style={{ display: 'flex' }}>
            <NavigationBar/>
            <TableView/>
     </div>
    )
}