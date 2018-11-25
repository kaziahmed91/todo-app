import React, { Component } from 'react';
import { connect } from "react-redux";
import { List, Checkbox, Divider, Button } from 'semantic-ui-react'

import {
  deleteItem,
  toggleItem,
} from "../actions/Creators";

import { bindActionCreators } from "redux";

class ListItems extends Component {
    render() {

        return (
            <List selection verticalAlign='middle'>
                <Divider/>
            {this.props.todos.map((todo) => (

                <List.Item key={todo.id}>
                    <div className="list-item" >
                        <Checkbox className="checkbox" 
                            onClick={() => this.props.toggleItem(todo.id)}
                        />
                        <List.Content>
                            <List.Header as='a'
                            style={{ textDecoration: todo.completed ? "line-through" : "none"}}
                            >{todo.text} </List.Header>
                        </List.Content>

                        <Button size="mini" 
                            className="delete-btn" floated='right'
                            onClick={() => this.props.deleteItem(todo.id)}
                        >Delete</Button>
                    </div>
                </List.Item>
                // <Divider/>
                
                ))
            }
            </List>
        );
    }
}


const mapStateToProps = state => {
    return { 
        todos: state.todos
   };
};
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        deleteItem,
        toggleItem,
      },
      dispatch
    );
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(ListItems);
