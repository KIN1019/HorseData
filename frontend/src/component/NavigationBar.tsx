import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, People, Settings } from '@mui/icons-material';
import TableView from '../view/TableView';

export const NavigationBar = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem
        // component={<TableView/>}
        >


          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          
          <ListItemText primary="Dashboard" />


        </ListItem>
      </List>
    </Drawer>
  );
};

