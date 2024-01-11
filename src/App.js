import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="todo-app">
        <header>
          <h1 className="todo-app__header">todos</h1>
          <input type="text"
                 className="todo-app__new-todo"/>
          <button/>
        </header>
        <div className="todo-app__main">
          <ul className="todo-list">
            <li className="todo-item">
              <button className="toggle"/>
              <div className="todo-item__view">
                <div className="todo-item__view__text">text</div>
                <button className="todo-item__destroy"/>
              </div>
              <input type="text"
                     className="todo-item__edit"/>
            </li>
          </ul>
        </div>
        <footer className="footer">
          <span className="todo-count">
            <strong>1</strong>
              <span>item</span>
            left
          </span>
          <ul className="todo-filters">
            <li><a href="#none">All</a></li>
            <li><a href="#none">Active</a></li>
            <li><a href="#none">Completed</a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
