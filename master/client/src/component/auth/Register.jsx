import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/auth";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: "",
      userType: "",
      DOB: "",
      phone: ""
    };
  }

  onchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {}
  onSubmit = (e) => {
      e.preventDefault();
    const data = this.state;
    this.props.createUser(data);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onchange}
            value={this.state.value}
            id="exampleEmail"
            placeholder="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            onChange={this.onchange}
            value={this.state.value}
            name="password"
            id="Password"
            placeholder="password placeholder"
          />
        </FormGroup>

        <FormGroup>
          <Label for="Password2">Confirm Password</Label>
          <Input
            type="password"
            onChange={this.onchange}
            value={this.state.value}
            name="password2"
            id="Password2"
            placeholder="confirm password "
          />
        </FormGroup>

        <FormGroup>
          <Label for="DOB"> DOB</Label>
          <Input
            type="date"
            onChange={this.onchange}
            value={this.state.value}
            name="DOB"
            id="DOB"
            placeholder=""
          />
        </FormGroup>

        <FormGroup>
          <Label for="phone">Phone</Label>
          <Input
            type="text"
            onChange={this.onchange}
            value={this.state.value}
            name="phone"
            id="phone"
            placeholder=""
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">User Type</Label>
          <Input
            onChange={this.onchange}
            value={this.state.value}
            type="select"
            name="userType"
            id="userType"
          >
            <option value="passenger">Passenger</option>
            <option value="driver">Driver</option>
          </Input>
        </FormGroup>

        <Button >Submit</Button>
      </Form>
    );
  }
}

export default connect(
  null,
  { createUser }
)(Register);
