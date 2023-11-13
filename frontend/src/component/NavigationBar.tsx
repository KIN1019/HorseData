import { Drawer, List, ListItem, ListItemIcon, Tooltip, Divider } from '@mui/material';
import { ArrowBack, Dashboard, TableView } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { UseVM } from '../viewModel/UseVM';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const NavigationBar = () => {
  const navigate = useNavigate();
  const vm = UseVM();

  return (
    <Drawer variant="permanent" sx={{ width: '60px', flexShrink: 0 }}>
      <List sx={{ width: '48px' }}>

        {/* Dashboard Header */}
        <ListItem sx={{ padding: '12px', borderRadius: '4px', marginBottom: '4px' }}>
          <Tooltip title="Dashboard" arrow placement="right">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
        <Divider />

        {/* Back to Dashboard */}
        <ListItem button onClick={() => navigate('/')} sx={{ padding: '12px', borderRadius: '4px', marginBottom: '4px' }}>
          <Tooltip title="Back" arrow placement="right">
            <ListItemIcon>
              <ArrowBack />
            </ListItemIcon>
          </Tooltip>
        </ListItem>

        {/* Open Dialog */}
        <ListItem button onClick={() => vm.dialogStatus(true)} sx={{ padding: '12px', borderRadius: '4px', marginBottom: '4px' }}>
          <Tooltip title="Open Dialog" arrow placement="right">
            <ListItemIcon>
              <ControlPointIcon />
            </ListItemIcon>
          </Tooltip>
        </ListItem>

        {/* Stop Fetching Table */}
        <ListItem button onClick={() => vm.stopFetchTable()} sx={{ padding: '12px', borderRadius: '5px', marginBottom: '5px' }}>
          <Tooltip title="Stop Fetching" arrow placement="right">
            <ListItemIcon>
              <StopCircleIcon />
            </ListItemIcon>
          </Tooltip>
        </ListItem>
      </List>
    </Drawer>
  );
};
