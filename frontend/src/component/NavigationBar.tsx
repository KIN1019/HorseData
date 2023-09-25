import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { ArrowBack, Dashboard } from '@mui/icons-material';

import { SetStateAction, useState } from 'react';

export const NavigationBar = () => {
  const [selectedItem, setSelectedItem] = useState(0); // Track the selected list item

  const handleItemClick = (index: SetStateAction<number>) => {
    setSelectedItem(index);
  };

  return (
    <Drawer variant="permanent">
      <ListSubheader component="div" id="nested-list-subheader">
          DashBoard
      </ListSubheader>
      <List>
        <ListItem button onClick={() => handleItemClick(0)} selected={selectedItem === 0}>
          <ListItemIcon>
            <ArrowBack />
          </ListItemIcon>
          </ListItem>
      </List>
    </Drawer>
  );
};