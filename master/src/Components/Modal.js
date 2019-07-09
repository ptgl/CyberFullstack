import React, { Component } from "react";
import { Checkbox, CheckboxGroup } from "react-checkbox-group";

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
   console.log(memberIdArr)
     this.setState({
      memberIdArr 
     });
  };

  labelChange = labelArr => {
    console.log(labelArr)
      this.setState({
        labelArr 
      });
   };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      id: nextProps.task.id,
      name: nextProps.task.name,
      desc: nextProps.task.desc,
      priority: nextProps.task.priority,
      status: nextProps.task.status,
      labelArr: nextProps.task.labelArr,
      memberIdArr: nextProps.task.memberIdArr
    });
  }

  render() {
    let { task, action } = this.props;

    return (
      <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">
                {action === "add" ? "Add a new task" : "Edit Task"}
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
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
                  <option value={1}>Thấp</option>
                  <option value={2}>Trung bình</option>
                  <option value={3}>Cao</option>
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
                Nghĩa Văn<br/>
                <Checkbox value="user_2" />
                Minh Tuấn<br/>
                <Checkbox value="user_3" />
                Trung Hiếu<br/>
                <Checkbox value="user_4" />
                Tấn Khải<br/>
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
                Frontend<br/>
                <Checkbox value="Backend" />
                Backend<br/>
                <Checkbox value="API" />
                API<br/>
                <Checkbox value="Issue" />
                Issue<br/>
              </CheckboxGroup>

            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              {action === "add" ? (
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                >
                  Add
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                >
                  Edit
                </button>
              )}

              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
