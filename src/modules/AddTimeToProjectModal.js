import React, { Component } from "react";
import StyledModal from "../components/StyledModal";
import DynamicSelect from "../components/DynamicSelect";
import ProjectDetailsContext from "../contexts/ProjectDetailsContext";
import { TextField } from "@material-ui/core";

class AddTimeToProjectModal extends Component {
  state = {
    selectedValue: 0,
    error: {
      hoursError: false,
      minutesError: false,
    },
    time: {
      hours: 0,
      minutes: 0,
    },
  };

  componentDidMount() {
    this.onChangeProject = this.onChangeProject.bind(this);
  }

  getProjects() {
    return this.context.projectDetails.map((project, i) => {
      return {
        text: project.projectName,
        value: i,
      };
    });
  }

  onChangeProject(e) {
    this.setState({ ...this.state, selectedValue: e.target.value });
  }

  addNewProjectTime() {
    const { selectedValue, time } = this.state;
      this.context.setProjectTime(selectedValue, time);
      this.closeModal();
  }

  closeModal() {
    this.setState(
      {
        ...this.state,
        selectedValue: 0,
        time: { ...this.state.time, hours: 0, minutes: 0 },
      },
      this.props.closeModal()
    );
  }

  onChangeMinutes = (e) => {
    this.setState({
      ...this.state,
      time: {
        ...this.state.time,
        minutes:
          e.target.value > 59 ? 59 : e.target.value < 0 ? 0 : e.target.value,
      },
    });
  };
  onChangeHours = (e) => {
    this.setState({
      ...this.state,
      time: {
        ...this.state.time,
        hours: e.target.value < 0 ? 0 : e.target.value,
      },
    });
  };

  render() {
    const body = (
      <React.Fragment>
        <DynamicSelect
          menuItems={this.getProjects()}
          label="Projects"
          onChange={this.onChangeProject}
          selectedValue={this.state.selectedValue}
        />
        <TextField
          fullWidth
          id="standard-number-hours"
          label="Hours"
          type="number"
          value={this.state.time.hours}
          onChange={this.onChangeHours}
          InputProps={{ inputProps: { min: 0 } }}
        />
        <TextField
          fullWidth
          id="standard-number-minutes"
          label="Minutes"
          type="number"
          value={this.state.time.minutes}
          onChange={this.onChangeMinutes}
          InputProps={{ inputProps: { min: 0, max: 59 } }}
        />
      </React.Fragment>
    );

    return (
      <StyledModal
        {...this.props}
        closeModal={() => this.closeModal()}
        saveData={() => this.addNewProjectTime()}
      >
        {body}
      </StyledModal>
    );
  }
}

AddTimeToProjectModal.contextType = ProjectDetailsContext;

export default AddTimeToProjectModal;
