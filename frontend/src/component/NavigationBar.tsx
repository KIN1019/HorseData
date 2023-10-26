import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { ArrowBack, Dashboard, TableView } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { UseVM } from '../viewModel/UseVM';

export const NavigationBar = () => {
  const navigate = useNavigate();
  const vm = UseVM()
  return (
    <Drawer variant="permanent">
      <ListSubheader component="div" id="nested-list-subheader">
          DashBoard
      </ListSubheader>
      <List>
        <ListItem onClick={() => navigate('/')}>
          <ListItemIcon>
            <ArrowBack />
          </ListItemIcon>
        </ListItem>
        <ListItem onClick={() => {
            vm.dialogStatus(true)}}>
          <ListItemIcon>
            <TableView />
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};