import React, { Component } from 'react';
import {
    FormGroup,
    Label,
    Input,
  } from "reactstrap";


class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            [props.item.name]: props.value
        }
    }
    onchange = e => {
        const {item} = this.props;
        this.setState({
          [e.target.name]: e.target.value
        },()=>{
            this.props.getFieldValue({[item.name]: this.state[item.name]})
        });
      };
    render() {
        const {item} = this.props;
        return (
            <FormGroup >
              <Label for={`label${item.name}`}>{item.label}</Label>
              <Input
                onChange={this.onchange}
                value={this.state[item.name]}
                type="select"
                name={item.name}
                id={item.name}
              >
                {item.options.map((o, idx) => (
                  <option key={idx} value={o.value}>
                    {o.text}
                  </option>
                ))}
              </Input>
            </FormGroup>
        );
    }
}

export default Select;