import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 600,
  },

}));

export default function DynamicSelect(props) {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="dynamic-select-label">{props.label}</InputLabel>
      <Select
      fullWidth
        labelId={props.labelId || "labelId"}
        id="dynamic-select"
        value={props.selectedValue}
        onChange={props.onChange}
      >
        {props.menuItems.map((item, i) => (
          <MenuItem value={item.value} key={i}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
