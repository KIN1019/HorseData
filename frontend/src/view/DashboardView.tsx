import { NavigationBar } from '../component/NavigationBar';
import { TableDialog } from '../component/Dialog';
import { useState } from 'react';
import {  SearchProvider } from '../store/EntryDashboardStore';
import { DashboardStore, EMPTY_DASHBOARD_STORE } from '../store/DashboardStore';
import { UseVM } from '../viewModel/UseVM';
import { Button } from '@mui/material';
import { TableView } from './TableView';


export const DashboardView = () =>{
    const [dashboard, setDashboard] = useState<DashboardStore>(EMPTY_DASHBOARD_STORE);
    const vm = UseVM()
    return (
        <SearchProvider value={{
            entity: dashboard,
            dispatch: (newDashboard) => {
                setDashboard(newDashboard)
            }
        }}>
        <div style={{ display: 'flex' }}>
            <div>
            <NavigationBar/>
            </div>
            <div>
            <TableView/>
            <TableDialog/>
            </div>
        </div>


        </SearchProvider>
    )
}