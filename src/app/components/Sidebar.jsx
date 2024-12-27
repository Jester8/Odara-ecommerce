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
  Divider,
  IconButton,
  Box,
} from '@mui/material';
import {
  Language as LanguageIcon,
  LocationOn as LocationIcon,
  Home as HomeIcon,
  Category as CategoryIcon,
  Settings as SettingsIcon,
  Info as InfoIcon,
  ContactMail as ContactIcon,
  Help as HelpIcon,
  Star as StarIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

import sidebarData from '../components/Utils/Sidebar';

export const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose} className="md:hidden">
      <Card className="w-64 h-full relative">
        {/* Close Icon */}
        <IconButton
          onClick={onClose}
          className="absolute top-1 left-[210px] text-black"
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>

        <CardContent>
          {/* ODARA Title */}
          <Typography
            variant="text-md font-bold"
            className="mb-4 text-start font-extrabold text-md"
          >
            ODARA
          </Typography>

          {/* Popular Categories */}
          <Typography variant="h6" className="mb-2 font-bold text-start">
           Categories
          </Typography>
          <Box
            className="overflow-y-auto"
            style={{ maxHeight: '50vh' }} 
          >
            <List>
              {sidebarData.popularCategories.map((category) => (
                <ListItem key={category.id} className="hover:bg-gray-100">
                  <ListItemIcon>
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText primary={category.name} />
                </ListItem>
              ))}

              {/* Additional Categories */}
              {[...Array(8)].map((_, index) => (
                <ListItem
                  key={`additional-category-${index}`}
                  className="hover:bg-gray-100"
                >
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Category ${index + 1}`} />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Divider */}
          <Divider className="my-4" />

          {/* Settings */}
          <Typography variant="h6" className="mb-2">
            Settings
          </Typography>
          <List>
            {sidebarData.settings.map((setting) => (
              <ListItem key={setting.id} className="hover:bg-gray-100">
                <ListItemIcon>
                  {setting.id === 'language' ? (
                    <LanguageIcon />
                  ) : setting.id === 'location' ? (
                    <LocationIcon />
                  ) : (
                    <SettingsIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={setting.name} />
              </ListItem>
            ))}

         
            <ListItem className="hover:bg-gray-100">
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="Help & Support" />
            </ListItem>
            <ListItem className="hover:bg-gray-100">
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem className="hover:bg-gray-100">
              <ListItemIcon>
                <ContactIcon />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Drawer>
  );
};
