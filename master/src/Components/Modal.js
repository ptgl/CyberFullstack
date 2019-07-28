import React, { Component } from "react";
import { Checkbox, CheckboxGroup } from "react-checkbox-group";
import Task from "../Model/Product";

import { connect } from "react-redux";
import isAddNewTask from "../Reducer/isAddNewTask";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      desc: "",
      priority: "",
      status: "",
      labelArr: [],
      memberIdArr: []
    };
  }

  handleChange = e => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  memberChange = memberIdArr => {
    console.log(memberIdArr);
    this.setState({
      memberIdArr
    });
  };

  labelChange = labelArr => {
    console.log(labelArr);
    this.setState({
      labelArr
    });
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.action === "edit") {
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        desc: nextProps.task.desc,
        priority: nextProps.task.priority,
        status: nextProps.task.status,
        labelArr: nextProps.task.labelArr,
        memberIdArr: nextProps.task.memberIdArr
      });
    } else {
      this.setState({
        id: "",
        name: "",
        desc: "",
        priority: "",
        status: "",
        labelArr: [],
        memberIdArr: []
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    let newTask = new Task(
      this.state.id,
      this.state.name,
      this.state.desc,
      this.state.priority,
      this.state.status,
      this.state.labelArr,
      this.state.memberIdArr
    );
    if (this.props.action === "add") {
      //console.log(newTask)
      this.props.addNewTask(newTask);
    } else {
      //console.log(newTask)
      this.props.editTask(newTask);
    }
  };

  render() {
    let { task, action, isAdd } = this.props;

    return (
      <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">
                {isAdd  ? "Add a new task" : "Edit Task"}
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <form role="form" onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="taskName">Tên công việc:</label>
                  <input
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    id="taskName"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Mô tả:</label>
                  <textarea
                    onChange={this.handleChange}
                    className="form-control"
                    value={this.state.desc}
                    rows={2}
                    name="desc"
                    id="description"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="priority">Độ ưu tiên:</label>
                  <select
                    value={this.state.priority}
                    name="priority"
                    onChange={this.handleChange}
                    className="form-control"
                    id="priority"
                  >
                    <option value="low">Thấp</option>
                    <option value="average">Trung bình</option>
                    <option value="high">Cao</option>
                  </select>
                </div>
                <label htmlFor="">Người thực hiện:</label>
                <br />

                <CheckboxGroup
                  name="memberIdArr"
                  value={this.state.memberIdArr}
                  onChange={this.memberChange}
                >
                  <Checkbox value="user_1" />
                  Nghĩa Văn
                  <br />
                  <Checkbox value="user_2" />
                  Minh Tuấn
                  <br />
                  <Checkbox value="user_3" />
                  Trung Hiếu
                  <br />
                  <Checkbox value="user_4" />
                  Tấn Khải
                  <br />
                </CheckboxGroup>

                <br />
                <br />
                <label htmlFor="">Nhãn:</label>
                <br />
                <CheckboxGroup
                  name="labelArr"
                  value={this.state.labelArr}
                  onChange={this.labelChange}
                >
                  <Checkbox value="Frontend" />
                  Frontend
                  <br />
                  <Checkbox value="Backend" />
                  Backend
                  <br />
                  <Checkbox value="API" />
                  API
                  <br />
                  <Checkbox value="Issue" />
                  Issue
                  <br />
                </CheckboxGroup>

                {/* Modal footer */}
                <div className="modal-footer">
                    <button type="submit" className="btn btn-success">
                      {isAdd ? "Add" : "Edit"}
                    </button>
                  

                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isAdd: state.isAddNewTask };
};

export default connect(mapStateToProps)(Modal);
