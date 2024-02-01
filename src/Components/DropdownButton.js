// DropdownButton.js
import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';

const DropdownButton = ({ options, onSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOptionSelect = (selectedOption) => {
    onSelect(selectedOption);
    setSelectedOption(selectedOption)
    setAnchorEl(null); // Close the dropdown after selecting an option
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleButtonClick} >
        {selectedOption ? selectedOption : 'Search Type'}
      </Button>
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleOptionSelect(option)}>
            {option}
          </MenuItem>
        ))}
      </Popover>
    </div>
  );
};

export default DropdownButton;
