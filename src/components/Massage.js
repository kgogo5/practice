import React from "react";
import styled from "styled-components";

const MassageArea = styled.div`
  margin: 5px 0;
  input {
    height: 18px;
  }
`;

const Massage = ({ obj }) => {
  const onChange = (props) => {
    obj.massage = props.target.value;
  };
  return (
    <MassageArea>
      <strong>메시지</strong>
      <input
        type="text"
        name="massage"
        id="massage"
        placeholder="입력"
        aria-label="메시지 입력"
        onChange={onChange}
      />
    </MassageArea>
  );
};

export default Massage;
