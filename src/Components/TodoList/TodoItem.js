import React from "react";
import styled from "styled-components";

const Item = styled.div`
  background-color: ${(props) => (props.active ? "palegreen" : "white")};
`;
const Title = styled.span``;

const TodoItem = ({ id, title, select, handleSelect }) => (
  <Item active={select === true}>
    <Title
      onClick={() => {
        handleSelect(id);
      }}
    >
      {title}
    </Title>
  </Item>
);

export default TodoItem;
