import React, {Component} from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modify: false,
      todo: props.todo
    };
  }

  handleModify = () => {
    this.setState({
      modify: true
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onTodoModify(this.state.todo);
    this.setState({modify: false});
  };

  modifyState = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.todo.text} onChange={this.handleInputChange}/>
      </form>
    );
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      todo: {
        ...this.props.todo,
        text: event.target.value
      }
    });
  };

  readOnlyState = () => {
    return (
      <div>
      <span style={{textDecoration: this.props.todo.done ? 'line-through' : 'none'}}
            onClick={this.props.onTodoClick}>{this.props.todo.text}</span>
        <i className="fas fa-minus-circle" onClick={this.props.onTodoRemove}></i>
        <i className="fas fa-bug" onClick={this.handleModify}></i>
      </div>
    );
  };

  render() {
    const todoItem = this.state.modify ? (this.modifyState()) : (this.readOnlyState());
    return (
      <div>
        {todoItem}
      </div>
    );
  }
}

export default TodoItem;