import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    float: "right",
    margin: theme.spacing(1.5, 0, 0, 0.5),
  },
}));

export default function StyledModal(props) {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);

  return (
    <React.Fragment>
      <Modal open={props.handleModal} onClose={props.closeModal}>
        <div style={modalStyle} className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            {props.children}
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={props.saveData}
            >
              Save
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              onClick={props.closeModal}
            >
              Close
            </Button>
          </form>
        </div>
      </Modal>
    </React.Fragment>
  );
}
