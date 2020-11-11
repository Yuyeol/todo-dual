import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const Container = styled.div``;

const Header = styled.header``;

const List = styled.div``;

const TodoList = ({ todos, handleSelect }) => {
  const todoItem = todos.map((todo) => (
    <TodoItem key={todo.id} {...todo} handleSelect={handleSelect} />
  ));
  return (
    <Container>
      <Header>Header</Header>
      <List>{todoItem}</List>
    </Container>
  );
};

export default TodoList;
