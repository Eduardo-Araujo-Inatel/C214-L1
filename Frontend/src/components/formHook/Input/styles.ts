import styled from "styled-components";

export const InputForm = styled.input`
  border-radius: 5px;
  padding: 10px;
  font-weight: 600;
  font-size: 16px;
  height: 15px;
  min-width: 423px;
  max-width: 423px;
  padding-left: 16px;
  background: transparent;
  color: #000;
  outline: none;
  border: 1px solid rgb(133, 133, 133);

  :placeholder {
    color: #949494;
  }

  .error {
    color: #FF0000;
  }
`;

export const InputDiv = styled.div`
  .error {
    border: 1px solid #FF0000;
    height: 15px;
  }
`;

export const ErrorLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 29px;
  color: #FF0000;
  position: absolute;
  justify-content: flex-end;
  right: 10px;
  top: 2px;

  @media(max-width: 740px) {
    font-size: 10px;
  }
`