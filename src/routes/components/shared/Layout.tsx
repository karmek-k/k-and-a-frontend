import { Container } from '@material-ui/core';
import React from 'react';
import Navbar from './Layout/Navbar';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  className?: string;
}

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.className}>
      <Navbar barText="K&amp;A" />
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
