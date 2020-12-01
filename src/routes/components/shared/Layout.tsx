import { Container } from '@material-ui/core';
import React from 'react';
import Navbar from './Layout/Navbar';

interface Props {
  children: any;
}

const Layout = (props: Props) => {
  return (
    <>
      <Navbar barText="K&amp;A" />
      <Container>{props.children}</Container>
    </>
  );
};

export default Layout;
