import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255, 0.6);
  padding: 20px 20px;
  border-radius: 30px;
  box-shadow: inset -6px -6px 15px rgba(145, 160, 180, 0.1),
    30px 30px 40px rgba(118, 146, 180, 0.1);
`;
const InputTitle = styled.input`
  width: 400px;
  font-size: 30px;
  color: grey;
  border: none;
  background: transparent;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => (props.active ? "red" : "lightgrey")};
  }
`;
const InputContents = styled.textarea`
  width: 400px;
  height: 600px;
  margin: 10px 0;
  font-size: 25px;
  color: grey;
  border: none;
  background: transparent;
  resize: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: lightgrey;
  }
`;
const BtnBox = styled.div`
  display: flex;
`;
const Btn = styled.input`
  display: ${(props) => (props.active ? "flex" : "none")};
  &:focus {
    outline: none;
  }
`;

const TodoInput = ({
  handleEdit,
  handleAdd,
  handleDelete,
  handleComplete,
  btnChange,
  fontChange,
  todos,
}) => {
  return (
    <Form>
      <InputTitle
        active={fontChange === true}
        className="js-input"
        placeholder={fontChange ? "제목을 입력해 주세요" : "제목"}
      />
      <InputContents className="js-textarea" placeholder="내용" />
      <BtnBox>
        <Btn
          active={btnChange === false}
          type="submit"
          value="추가"
          onClick={handleAdd}
        />
        <Btn
          active={btnChange === true}
          type="submit"
          className="js-editBtn"
          value="수정"
          onClick={handleEdit}
        />
        <Btn
          active={btnChange === true}
          type="submit"
          className="js-delBtn"
          value="완료"
          onClick={handleComplete}
        />
        <Btn
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
