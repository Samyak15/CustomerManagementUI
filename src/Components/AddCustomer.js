import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Typography, Grid, Button, TextField } from "@material-ui/core";
import { columnFields } from "./Constants.js";
import { Cancel } from "@material-ui/icons";
import { createCustomer } from "../Apis.js";
// Modal styles
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  cancelIcon: {
    cursor: "pointer",
    borderRadius: "50%",
    backgroundColor: "#ff0000", // Change color as desired
    color: "#ffffff", // Change color as desired
    width: "30px", // Adjust width as needed
    height: "30px", // Adjust height as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  editIcon: {
    cursor: "pointer",
    borderRadius: "50%",
    width: "30px", // Adjust width as needed
    height: "30px", // Adjust height as needed
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
  },
  containerItem: {
    marginLeft: "8px",
  },
  editButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    marginTop: "5px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    }
  },
}));

const AddCustomer = (props) => {
  const classes = useStyles();
  const { showModal, setShowModal } = props;
  const [details, setDetails] = useState({
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    state: "",
    email: "",
    phone: "",
    street: ""
  });
  const handleSubmit = async () => {
    let res = await createCustomer(details);
    if(res){
        alert('Customer Added!!!');
        setShowModal(false);
    }
  };

  const handleChange = (e, key) => {
    console.log(e.target.value, key);
    let newDetails = {...details};
    newDetails[key] = e.target.value;
     setDetails(newDetails);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <Grid container className={classes.container}>
            <Grid item onClick={handleClose} className={classes.containerItem}>
              <div className={classes.cancelIcon}>
                <Cancel />
              </div>
            </Grid>
          </Grid>
          <Typography variant="h6" id="modal-title">
            CUSTOMER DETAILS
          </Typography>
          <Grid container alignItems="center">
            <Grid item className={classes.customerDiv} >
              <Grid container spacing={2} style={{display:'flex', flexDirection:'column'}}>
                <Grid item className={classes.idFields}>
                  {Object.keys(details)
                    .slice(0, 4)
                    .map((key) => {
                    return (
                      <TextField
                        value={details[key]}
                        label={columnFields[`${key}`]}
                        onChange={(e) => handleChange(e, key)}
                        style={{margin: '5px'}}
                      />
                    )})}
                </Grid>
                <Grid item className={classes.idFields}>
                  {Object.keys(details)
                    .slice(4, details.length)
                    .map((key) => (
                      <TextField
                        value={details[key]}
                        label={columnFields[key]}
                        onChange={(e) => handleChange(e, key)}
                        style={{margin: '5px'}}
                      />
                    ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            className={classes.editButton}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AddCustomer;
