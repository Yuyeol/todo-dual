import React from "react";
import styled from "styled-components";

const Item = styled.div`
  width: 270px;
  background-color: ${(props) =>
    props.active ? "rgba(0, 0, 0, 0.1)" : "white"};
  border-radius: 25px;
  box-shadow: inset -6px -6px 15px rgba(145, 160, 180, 0.15),
    5px 5px 5px rgba(118, 146, 180, 0.5);
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;
const Title = styled.span`
  width: 230px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Complete = styled.span`
  display: flex;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 7px 9px;
  border-radius: 10px;
  margin-right: 5px;
`;

const TodoItem = ({ id, title, select, handleSelect, complete }) => (
  <Item active={select === true}>
    <Title
      active={complete === true}
      onClick={() => {
        handleSelect(id);
      }}
    >
      {complete ? <Complete>Done!</Complete> : ""}
      {title}
    </Title>
  </Item>
);

export default TodoItem;
