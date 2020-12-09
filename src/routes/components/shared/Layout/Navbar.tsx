import React, { useContext } from 'react';

import {
  AppBar,
  Link,
  makeStyles,
  Toolbar,
  Typography
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { UserContext } from '../../../../utils/UserContext';
// import MenuIcon from '@material-ui/icons/Menu';

interface Props {
  barText: string;
}

const useStyles = makeStyles({
  link: {
    color: 'white'
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

const Navbar: React.FC<Props> = (props: Props) => {
  const styles = useStyles();
  const user = useContext(UserContext);

  return (
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6">
          <Link component={RouterLink} to="/" className={styles.link}>
            {props.barText}
          </Link>
        </Typography>
        <Typography>
          {user ? (
            <Link component={RouterLink} to="/logout" className={styles.link}>
              Log out
            </Link>
          ) : (
            <Link component={RouterLink} to="/login" className={styles.link}>
              Log in
            </Link>
          )}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
