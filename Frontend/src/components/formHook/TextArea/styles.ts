import styled from "styled-components";

export const TextAreaForm = styled.textarea`
  border-radius: 5px;
  padding: 10px;
  font-weight: 600;
  font-size: 16px;
  min-height: 60px;
  max-height: 60px;
  min-width: 423px;
  max-width: 423px;
  padding-left: 16px;
  background: transparent;
  color: #000;
  outline: none;

  :placeholder {
    color: #949494;
  }

  .error {
    color: #FF0000;
  }
`;

export const TextAreaDiv = styled.div`
  .error {
    border: 1px solid #FF0000;
    height: 40px;
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