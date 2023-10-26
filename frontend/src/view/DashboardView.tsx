import { ToggleButton } from '@mui/material';
import { NavigationBar } from '../component/NavigationBar';
import TableView from './TableView';
import { TableDialog } from '../component/Dialog';
import { useContext, useEffect, useState } from 'react';
import { EmptyDashboardStore, SearchProvider } from '../store/EntryDashboardStore';
import { DashboardStore, EMPTY_DASHBOARD_STORE } from '../store/DashboardStore';
import LoginPage from './LoginView';


export const DashboardView = () =>{
    const [dashboard, setDashboard] = useState<DashboardStore>(EMPTY_DASHBOARD_STORE);

    return (
        <SearchProvider value={{
            entity: dashboard,
            dispatch: (newDashboard) => {
                setDashboard(newDashboard)
            }
        }}>
        <div style={{ display: 'flex' }}>
            <NavigationBar/>
            <TableView/>
            <TableDialog/>
        </div>
        </SearchProvider>
    )
}