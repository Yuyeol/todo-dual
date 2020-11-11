import { Component } from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import TodoInput from "./TodoList/TodoInput";
import TodoList from "./TodoList/TodoList";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: rgb(218, 207, 161, 0.3);
  width: 800px;
  height: 600px;
  padding: 30px;
  border-radius: 30px;
`;

class App extends Component {
  id = 3;

  state = {
    todos: [
      {
        id: 0,
        title: "리액트 소개",
        contents: "contents",
        select: false,
        Priority: 1,
      },
      {
        id: 1,
        title: "리액트 만남",
        contents: "contents",
        select: false,
        Priority: 2,
      },
      {
        id: 2,
        title: "리액트 이별",
        contents: "contents",
        select: false,
        Priority: 3,
      },
    ],
    // selectedTodo: null,
    // 추가, 수정버튼 토글 용도
    // select: false,
    btnChange: false,
  };

  //title, contents의 text를 변경함
  setText = (text1, text2) => {
    const input = document.querySelector(".js-input"),
      textarea = document.querySelector(".js-textarea");
    input.value = text1;
    textarea.value = text2;
  };

  //Add창 여는버튼 클릭
  openAdd = () => {
    const { todos } = this.state;
    const copyTodos = [...todos];
    copyTodos.map((copy) => (copy.select = false));
    this.setState({ todos: copyTodos, btnChange: false });
    this.setText("", "");
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

  //추가버튼 클릭
  handleAdd = (e) => {
    e.preventDefault();
    const title = e.nativeEvent.path[2][0].value,
      contents = e.nativeEvent.path[2][1].value;
    if (title !== "") {
      this.createTodo(title, contents);
      this.setText("", "");
    }
  };

  //수정버튼 클릭
  handleEdit = (e) => {
    e.preventDefault();
    const title = document.querySelector(".js-input").value,
      contents = document.querySelector(".js-textarea").value;
    const id = Number(e.nativeEvent.path[2][4].id);
    const { todos } = this.state;
    const copyTodos = [...todos];
    const selected = todos[id];
    copyTodos[id] = {
      ...selected,
      title,
      contents,
    };
    this.setState({
      todos: copyTodos,
    });
  };

  //삭제버튼 클릭
  handleDelete = (e) => {
    e.preventDefault(e);
    const id = Number(e.nativeEvent.path[2][4].id);
    const { todos } = this.state;
    this.setState({ todos: todos.filter((todo) => todo.id !== id) });
    this.setText("", "");
  };

  //리스트아이템 클릭
  handleSelect = (id) => {
    const { todos } = this.state;
    //id 비교를 하지 않고 받은 id 바로 삭제했더니 id 비교가 불일치해서 오류났었음.
    const index = todos.findIndex((todo) => todo.id === id);
    const copyTodos = [...todos];
    const selectedTodo = todos[index];
    copyTodos.map((copy) => (copy.select = false));
    copyTodos[index] = {
      ...selectedTodo,
      select: true,
    };
    this.setState({
      todos: copyTodos,
      btnChange: true,
    });
    const title = selectedTodo.title,
      contents = selectedTodo.contents;
    this.setText(title, contents);
    const delBtn = document.querySelector(".js-delBtn"),
      editBtn = document.querySelector(".js-editBtn");
    //해당 리스트를 열 때 버튼에도 id를 줌으로써 후에 어떤 값을 삭제 할지 알려줌
    delBtn.id = id;
    editBtn.id = id;
  };

  render() {
    // console.log(this.state);
    const { handleEdit, handleSelect, handleAdd, openAdd, handleDelete } = this;
    return (
      <>
        <Container>
          <TodoList
            {...this.state}
            handleSelect={handleSelect}
            openAdd={openAdd}
          />
          <TodoInput
            {...this.state}
            handleEdit={handleEdit}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
          />
        </Container>
        <GlobalStyles />
      </>
    );
  }
}

export default App;
