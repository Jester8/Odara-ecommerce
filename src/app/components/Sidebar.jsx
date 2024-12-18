import React from 'react';
import { 
  Drawer,
  Card, 
  CardContent, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Divider 
} from '@mui/material';
import { 
  Language as LanguageIcon, 
  LocationOn as LocationIcon 
} from '@mui/icons-material';
import sidebarData from '../components/Utils/Sidebar';

export const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      className="md:hidden"
    >
      <Card className="w-64 h-full">
        <CardContent>
          <Typography variant="h4" className="mb-4 text-center">
            ODARA
          </Typography>

          {/* Popular Categories */}
          <Typography variant="h6" className="mb-2">Popular Categories</Typography>
          <List>
            {sidebarData.popularCategories.map((category) => (
              <ListItem key={category.id} className="hover:bg-gray-100">
                <ListItemIcon>
                  <img 
                    src={category.icon} 
                    alt={category.name} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </ListItemIcon>
                <ListItemText primary={category.name} />
              </ListItem>
            ))}
          </List>

          {/* Divider */}
          <Divider className="my-4" />

          {/* Settings */}
          <Typography variant="h6" className="mb-2">Settings</Typography>
          <List>
            {sidebarData.settings.map((setting) => (
              <ListItem key={setting.id} className="hover:bg-gray-100">
                <ListItemIcon>
                  {setting.id === 'language' ? (
                    <LanguageIcon />
                  ) : (
                    <LocationIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={setting.name} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Drawer>
  );
};