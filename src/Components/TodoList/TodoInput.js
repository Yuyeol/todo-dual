import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(218, 207, 161, 0.6);
  padding: 20px 10px;
  border-radius: 10px;
`;
const InputTitle = styled.input`
  width: 400px;
  font-size: 30px;
  border: none;
  background: transparent;
  &:focus {
    outline: none;
  }
`;
const InputContents = styled.textarea`
  width: 400px;
  height: 600px;
  margin: 10px 0;
  font-size: 25px;
  border: none;
  background: transparent;
  resize: none;
  &:focus {
    outline: none;
  }
`;
const BtnBox = styled.div``;
const Add = styled.input`
  display: ${(props) => (props.active ? "inline" : "none")};
`;
const Edit = styled.input`
  display: ${(props) => (props.active ? "inline" : "none")};
`;
const Delete = styled.input`
  display: ${(props) => (props.active ? "inline" : "none")};
`;

const TodoInput = ({ handleEdit, handleAdd, handleDelete, btnChange }) => {
  return (
    <Form>
      <InputTitle className="js-input" placeholder="제목" />
      <InputContents className="js-textarea" placeholder="내용" />
      <BtnBox>
        <Add
          active={btnChange === false}
          type="submit"
          value="추가"
          onClick={handleAdd}
        />
        <Edit
          active={btnChange === true}
          type="submit"
          className="js-editBtn"
          value="수정"
          onClick={handleEdit}
        />
        <Delete
          active={btnChange === true}
          type="submit"
          className="js-delBtn"
          value="삭제"
          onClick={handleDelete}
        />
      </BtnBox>
    </Form>
  );
};

export default TodoInput;
