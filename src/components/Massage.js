import React from "react";
import styled from "styled-components";

const MassageArea = styled.div`
  margin: 5px 0;
  input {
    height: 18px;
  }
`;

const Massage = () => {
  return (
    <MassageArea>
      <strong>메시지</strong>
      <input
        type="text"
        name="massage"
        id="massage"
        placeholder="입력"
        aria-label="메시지 입력"
      />
    </MassageArea>
  );
};

export default Massage;
