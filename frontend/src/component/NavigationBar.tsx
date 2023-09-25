import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { ArrowBack, Dashboard, TableView } from '@mui/icons-material';

import { SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TableDialog } from './Dialog';
export const NavigationBar = () => {
  const navigate = useNavigate();

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
        <ListItem onClick={() => <TableDialog/>}>
          <ListItemIcon>
            <TableView />
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};