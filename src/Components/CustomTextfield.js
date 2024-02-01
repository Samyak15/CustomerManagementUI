import React from "react";
import TextField from "@mui/material/TextField";

const CustomTextField = (props) => {
  const { editMode, error, onChange, value } = props;
  return (
    <>
       {editMode && <TextField
          variant="outlined"
          error={error}
          onChange={onChange}
          value={value}
          disabled={!editMode}
        />} 
        {!editMode && value}
    </>
  );
};

export default CustomTextField;