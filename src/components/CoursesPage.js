import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../store/actions/courseActions";
import { bindActionCreators } from "redux";

export class CoursesPage extends Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h5>Add Course</h5>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((course, index) => (
          <div key={index}>{course.title}</div>
        ))}
      </form>
    );
  }
}

// CoursesPage.propTypes = {
//   dispatch: propTypes.func.isRequired,
// };

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
