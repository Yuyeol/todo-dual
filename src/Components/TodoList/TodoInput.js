import React from "react";
import styled from "styled-components";

const Form = styled.form``;
const InputTitle = styled.input``;
const InputContents = styled.textarea``;
const Submit = styled.input``;

const TodoInput = ({ handleEdit, handleDelete }) => {
  return (
    <Form>
      <InputTitle className="js-input" placeholder="제목" />
      <InputContents className="js-textarea" placeholder="내용" />
      <Submit type="submit" id="add" value="수정" onClick={handleEdit} />
    </Form>
  );
};

export default TodoInput;
