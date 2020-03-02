import React from 'react';
import {MyInput, SubmitButton, FlexBox} from './Styles.js';

const Form = ({btnText, id, nameHolder, responseHolder, responseVal, submitHandler}) => {

  let nameText = React.createRef();
  let questionText = React.createRef();

  return (<FlexBox>
      <MyInput ref={nameText} placeholder={nameHolder}></MyInput>
      <MyInput ref={questionText} placeholder={responseHolder} defaultValue={responseVal}></MyInput>
      <SubmitButton onClick = {()=>submitHandler(id, questionText.current.value, nameText.current.value)}>{btnText}</SubmitButton>
  </FlexBox>)
};

export default Form;
