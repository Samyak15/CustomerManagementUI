// Header.js
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';


const CenteredTypography = styled(Typography)`
  flex: 1;
  text-align: center;
  color: #fff
`;

const Header = () => {
  return (
    <AppBar position="static" style={{backgroundColor:'black', marginBottom:'1px'}}>
      <Toolbar>
        <CenteredTypography variant="h6">
          CUSTOMER LIST
        </CenteredTypography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
