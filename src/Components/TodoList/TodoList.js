import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const Container = styled.div`
  margin-right: 30px;
  width: 270px;
`;

const Header = styled.header`
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.7);
`;

const List = styled.div`
  width: 290px;
  height: 440px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Add = styled.div`
  display: flex;
  justify-content: center;
`;
const AddText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  width: 80px;
  height: 35px;
  border-radius: 30px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset -6px -6px 15px rgba(145, 160, 180, 0.1),
    30px 30px 40px rgba(118, 146, 180, 0.1);
`;

const TodoList = ({ todos, handleSelect, openAdd }) => {
  const todoItem = todos.map((todo) => (
    <TodoItem key={todo.id} {...todo} handleSelect={handleSelect} />
  ));
  return (
    <Container>
      <Header>TODOList</Header>
      <Add onClick={openAdd}>
        <AddText>Add+</AddText>
      </Add>
      <List>{todoItem}</List>
    </Container>
  );
};

export default TodoList;
