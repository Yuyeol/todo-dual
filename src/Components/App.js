import { Component } from "react";
import styled from "styled-components";
import TodoInput from "./TodoList/TodoInput";
import TodoList from "./TodoList/TodoList";

const Container = styled.div`
  display: flex;
`;

class App extends Component {
  id = 3;

  state = {
    todos: [
      { id: 0, title: "리액트 소개", contents: "contents", select: false },
      { id: 1, title: "리액트 만남", contents: "contents", select: false },
      { id: 2, title: "리액트 이별", contents: "contents", select: false },
    ],
    selectedTodo: null,
  };

  handleAdd = (e) => {
    e.preventDefault();
    const title = e.nativeEvent.path[1][0].value,
      contents = e.nativeEvent.path[1][1].value;
    this.createTodo(title, contents);
    const input = document.querySelector(".js-input"),
      textarea = document.querySelector(".js-textarea");
    input.value = "";
    textarea.value = "";
  };

  createTodo = (title, contents) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.concat({
        id: this.id++,
        title: title,
        contents: contents,
        select: false,
        grade: 0,
      }),
    });
  };

  handleSelect = (id) => {
    const { todos } = this.state;
    const copyTodos = [...todos];
    const selectedTodo = todos[id];
    copyTodos.map((copy) => (copy.select = false));
    copyTodos[id] = {
      ...selectedTodo,
      select: true,
    };
    this.setState({
      todos: copyTodos,
    });
    this.openTodo(selectedTodo);
  };

  openTodo = (selectedTodo) => {
    this.setState({ selectedTodo });
    const input = document.querySelector(".js-input"),
      textarea = document.querySelector(".js-textarea");
    const title = selectedTodo.title,
      contents = selectedTodo.contents;
    input.value = title;
    textarea.value = contents;
  };

  render() {
    // console.log(this.state);
    const { handleAdd, handleSelect, handleDelete } = this;
    return (
      <Container>
        <TodoList {...this.state} handleSelect={handleSelect} />
        <TodoInput handleAdd={handleAdd} handleDelete={handleDelete} />
      </Container>
    );
  }
}

export default App;
