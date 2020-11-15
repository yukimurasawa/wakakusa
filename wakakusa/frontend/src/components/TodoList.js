import React from 'react';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showTodo: false,
        todoDatas: [],
    };
  }
  
  componentDidMount() {
    this._requestData();
  }
  
  _requestData() {
    let self = this;
    const apiUrl = "https://b11aec923fff4b5faa7b4b3b5246730c.vfs.cloud9.ap-southeast-1.amazonaws.com/api/todos/";
    fetch(apiUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        self.setState({
          todoDatas: data,
        });
      });
  }

  render() {
    if(!this.state.todoDatas) return null;
    return (
      <dev>
        <h1 style={{fontSize: "36px"}}>11月14日のTodo</h1>
        <div style={{margin: "20px 30px"}}>
          {this.state.todoDatas.map((todo, idx) => {
            const style = todo.completed ? {textDecoration: "line-through"} : {};
            return (
              <div keys={idx}>
                <div style={style}>{todo.title}</div>
              </div>
              );
            }, this)}
          </div>
      </dev>
    );
  }
}

TodoList.propTypes = {
  showTodos: PropTypes.bool.isRequired,
};


export default TodoList;
