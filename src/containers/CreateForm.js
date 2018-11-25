import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import { addItem } from '../actions/Creators';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'


class CreateForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toDoText: ''
        }
    }

    onTextChange = (e) => {
        this.setState({toDoText: e.target.value});
    }

    clearText = (e) => {
        this.setState({toDoText: "" });
    }

    render() {
        return (
           <Form>
                <Form.Field>
                    <label>List Item</label>
                    <input placeholder="To Do Item" 
                        onChange={this.onTextChange} 
                        onKeyDown= { (e) => {
                            if (e.keyCode === 13 ) {
                                this.props.addItem(this.state.toDoText) 
                                this.clearText();
                            }
                        }}
                        value={this.state.toDoText}
                        type="text"
                        />
                </Form.Field>
           </Form>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addItem
    }, dispatch)
}



export default connect(null, mapDispatchToProps)(CreateForm)
