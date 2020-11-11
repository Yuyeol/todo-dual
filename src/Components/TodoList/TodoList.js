import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const Container = styled.div``;

const Header = styled.header`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 25px;
  color: ;
`;

const List = styled.div``;
const Add = styled.div`
  display: flex;
  justify-content: center;
`;
const AddText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  width: 75px;
  height: 35px;
  border-radius: 15px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoList = ({ todos, handleSelect, openAdd }) => {
  const todoItem = todos.map((todo) => (
    <TodoItem key={todo.id} {...todo} handleSelect={handleSelect} />
  ));
  return (
    <Container>
      <Header>IAMTitle</Header>
      <Add onClick={openAdd}>
        <AddText>+Add</AddText>
      </Add>
      <List>{todoItem}</List>
    </Container>
  );
};

export default TodoList;
