import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  List: {
    marginTop: "3.5rem",
  },
}));

export default function SideMenu(props) {
  const classes = useStyles();

  return (
    <Drawer
      open={true}
      variant="permanent"
      className={classes.drawer}
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List className={classes.List}>
        {props.categoryTree.map((text, index) => (
          <ListItem button key={text} key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

