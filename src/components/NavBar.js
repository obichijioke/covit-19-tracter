import React from "react";
import {
  HomeOutlined,
  MapOutlined,
  LibraryBooksOutlined,
  HeadsetMicOutlined,
  PanToolOutlined,
} from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "1rem",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav
      style={{
        backgroundColor: "white",
        padding: "1rem",
        borderRadius: "1rem",
        display: "block",
        alignItems: "center",
        width: "100%",
        height: "70vh",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          border: "0",
          padding: "2rem 0",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <li className="menuItem">
          <HomeOutlined fontSize="large" onClick={handleOpen} />
        </li>
        <li className="menuItem">
          <MapOutlined fontSize="large" onClick={handleOpen} />
        </li>
        <li className="menuItem">
          <LibraryBooksOutlined fontSize="large" onClick={handleOpen} />
        </li>
        <li className="menuItem">
          <HeadsetMicOutlined fontSize="large" onClick={handleOpen} />
        </li>
        <li className="menuItem">
          <PanToolOutlined fontSize="large" onClick={handleOpen} />
        </li>
      </ul>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Feature</h2>
            <p id="transition-modal-description">Coming Soon....</p>
          </div>
        </Fade>
      </Modal>
    </nav>
  );
};

export default NavBar;
