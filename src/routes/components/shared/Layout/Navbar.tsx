import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

interface Props {
  barText: string;
}

const Navbar = (props: Props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6">{props.barText}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
