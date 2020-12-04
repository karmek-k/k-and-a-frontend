import React from 'react';

import { AppBar, Link, Toolbar, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
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
        <Typography variant="h6">
          <Link component={RouterLink} to="/" style={{ color: 'white' }}>
            {props.barText}
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
