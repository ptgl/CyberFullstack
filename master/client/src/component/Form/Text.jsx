import React, { Component } from 'react';
import {
    FormGroup,
    Label,
    Input,
    FormFeedback,
  } from "reactstrap";


class Text extends Component {

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
        const {item, error} = this.props;
        return (
            <FormGroup >
              <Label for={`label${item.name}`}>{item.label}</Label>

              <Input
                type={item.type}
                name={item.name}
                onChange={this.onchange}
                value={this.state[item.name]}
                id={item.name}
                placeholder={item.label}
                invalid={error ? true : false}
              ></Input>

              {error && (
                <FormFeedback invalid>{error}</FormFeedback>
              )}
            </FormGroup>
        );
    }
}

export default Text;