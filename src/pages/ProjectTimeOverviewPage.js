import React, { Component } from "react";
import AddNewProjectModal from "../modules/AddNewProjectModal";
import AddTimeToProjectModal from "../modules/AddTimeToProjectModal";
import { Button, withStyles } from "@material-ui/core";
import DynamicTable from "../components/DynamicTable";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import ProjectDetailsContext from "../contexts/ProjectDetailsContext";

const useStyles = (theme) => ({
  firstButton: {
    margin: theme.spacing(0, 0, 1, 1),
  },
  secondButton: {
    marginBottom: theme.spacing(1),
  },
});

class ProjectTimeOverviewPage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    handleModalProject: false,
    handleTimeModal: false,
  };

  componentDidMount() {
    this.handleModalOpenClose = this.handleModalOpenClose.bind(this);
  }

  handleModalOpenClose(modalName) {
    this.setState({ ...this.state, [modalName]: !this.state[modalName] });
  }

  getProjectRows() {
    const tableBodyValuesList = this.context.projectDetails.map(
      ({ projectName, companyName, time }) => {
        return {
          projectName,
          companyName,
          time: `${time.hours} hours, ${time.minutes} minutes`,
        };
      }
    );

    return {
      tableHeadNamesList: ["Project name", "Company", "Time spend"],
      tableBodyValuesList,
    };
  }

  render() {
    const { handleModalProject, handleTimeModal } = this.state;
    const { firstButton, secondButton } = this.props.classes;

    const disabledAddTimeBottom = this.context.projectDetails.length <= 0;

    return (
      <Layout
        user={{ name: "Davis", surname: "Iljins" }}
        categoryTree={["Project time overview"]}
      >
        <Button
          className={secondButton}
          variant="contained"
          color="primary"
          onClick={() => this.handleModalOpenClose("handleModalProject")}
        >
          Add new project
        </Button>
        <Button
          className={firstButton}
          variant="contained"
          disabled={disabledAddTimeBottom}
          color="primary"
          onClick={() => this.handleModalOpenClose("handleTimeModal")}
        >
          Add Time
        </Button>
        <AddNewProjectModal
          handleModal={handleModalProject}
          closeModal={() => this.handleModalOpenClose("handleModalProject")}
        />
        <AddTimeToProjectModal
          handleModal={handleTimeModal}
          closeModal={() => this.handleModalOpenClose("handleTimeModal")}
        />
        <DynamicTable rows={this.getProjectRows()} />
      </Layout>
    );
  }
}

ProjectTimeOverviewPage.contextType = ProjectDetailsContext;

export default withStyles(useStyles)(ProjectTimeOverviewPage);
