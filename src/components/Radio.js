import React from "react";
import styled from "styled-components";

const RadioArea = styled.div`
  margin: 5px 0;
  input {
    margin-right: 10px;
  }

  label {
    margin: 0 3px;
  }
`;

const Radio = ({ obj }) => {
  const onChange = (props) => {
    obj.texture = [];
    obj.texture.push(props.target.id);
  };
  return (
    <RadioArea>
      <strong>촉감</strong>
      <label htmlFor="soft">부드러움</label>
      <input type="radio" name="texture" id="soft" onChange={onChange} />
      <label htmlFor="normal">보통</label>
      <input type="radio" name="texture" id="normal" onChange={onChange} />
      <label htmlFor="rough">까칠함</label>
      <input type="radio" name="texture" id="rough" onChange={onChange} />
    </RadioArea>
  );
};

export default Radio;
