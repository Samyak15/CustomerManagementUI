// Header.js
import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, TextField } from '@material-ui/core';
import DropdownButton from './DropdownButton';
import { searchFilterOptions, sortByOptions, columnFields } from './Constants.js';
import AddCustomer from './AddCustomer.js';

const SubHeader = (props) => {
    const [value, setValue] = useState('');
    const [showModal, setShowModal] = useState(false);
    const onChange = (e) => {
        setValue(e.target.value);
    }
    const {setSearchType, setSearchVal} = props;
  return (
    <AppBar position="static" style={{backgroundColor: 'black'}}>
        <AddCustomer showModal={showModal} setShowModal={setShowModal} />
      <Toolbar>
        <Grid>
        <Typography variant="h6">
          <Button variant="contained" color="primary" onClick={() => setShowModal(true)} >ADD CUSTOMER</Button>
        </Typography>
        </Grid>
        <Grid style={{marginLeft: '10px'}}>
            <DropdownButton options={searchFilterOptions} onSelect={setSearchType} />
        </Grid>
       <Grid>
       <TextField
            label="Search"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setSearchVal(e.target.value)}
            value={value}
            InputProps={{
                style: { backgroundColor: 'white', marginLeft:'10px' },
                inputProps: {
                  style: { backgroundColor: 'white', marginLeft:'px' },
                },
              }}        
        />
       </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default SubHeader;