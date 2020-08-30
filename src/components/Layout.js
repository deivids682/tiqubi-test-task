import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  fullWidth: {
    width: "100%",
    flexGrow: 1,
    padding: theme.spacing(12),
  },
}));

export default function Layout(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header user={props.user} />
        <SideMenu categoryTree={props.categoryTree} />
        <main className={classes.fullWidth}>{props.children}</main>
      <Footer />
    </div>
  );
}

