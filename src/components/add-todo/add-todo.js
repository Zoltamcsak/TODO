import React from 'react';
import {addTodo} from '../../store/actions';
import connect from 'react-redux/es/connect/connect';

const AddTodo = ({addTodo}) => {
  let input;
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          addTodo(input.value);
          input.value = ''
        }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (val) => dispatch(addTodo(val))
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);