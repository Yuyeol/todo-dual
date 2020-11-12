import React from "react";
import styled from "styled-components";

const Item = styled.div``;
const Title = styled.span`
  background-color: ${(props) =>
    props.active ? "rgba(0, 0, 0, 0.1)" : "white"};
  width: 270px;
  height: 52px;
  border-radius: 25px;
  display: flex;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  font-weight: 600;
  box-shadow: inset -6px -6px 15px rgba(145, 160, 180, 0.15),
    5px 5px 5px rgba(118, 146, 180, 0.5);
`;

const TodoItem = ({ id, title, select, handleSelect }) => (
  <Item>
    <Title
      active={select === true}
      onClick={() => {
        handleSelect(id);
      }}
    >
      {title}
    </Title>
  </Item>
);

export default TodoItem;
