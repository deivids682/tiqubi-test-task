import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import StyledModal from "../components/StyledModal";
import ProjectDetailsContext from "../contexts/ProjectDetailsContext";

class AddNewProjectModal extends Component {
  state = {
    error: {
      errorCompany: false,
      errorProject: false,
    },
    projectName: "",
    companyName: "",
  };

  componentDidMount() {
    this.addNewProject = this.addNewProject.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  addNewProject() {
    const { projectName, companyName } = this.state;

    if (projectName.length > 0 && companyName.length > 0) {
      this.context.setProjectDetails({
        projectName,
        companyName,
        time: { hours: 0, minutes: 0 },
      });
      this.closeModal();
    } else {
      this.setState({
        ...this.state,
        error: {
          ...this.state.error,
          errorCompany: companyName <= 0,
          errorProject: projectName <= 0,
        },
      });
    }
  }

  closeModal() {
    this.setState(
      {
        ...this.state,
        error: {
          ...this.state.error,
          errorCompany: false,
          errorProject: false,
        },
        projectName: "",
        companyName: "",
      },
      () => this.props.closeModal()
    );
  }

  onChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  render() {
    const { errorCompany, errorProject } = this.state.error;
    const body = (
      <React.Fragment>
        <TextField
          fullWidth
          error={errorProject}
          name="projectName"
          id="project-name"
          onChange={this.onChange}
          helperText="Procject name"
        />
        <TextField
          fullWidth
          error={errorCompany}
          name="companyName"
          id="company-name"
          onChange={this.onChange}
          helperText="Company"
        />
      </React.Fragment>
    );

    return (
      <StyledModal
        {...this.props}
        closeModal={() => this.closeModal()}
        saveData={() => this.addNewProject()}
      >
        {body}
      </StyledModal>
    );
  }
}

AddNewProjectModal.contextType = ProjectDetailsContext;

export default AddNewProjectModal;
