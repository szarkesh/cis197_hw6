import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 50px;
`

export const FlexBox = styled.div`
  width: 200px;
  max-width: 100%;
  padding: 10px;
`

export const MyInput = styled.input`
  font-size: 20px;
  width: 500px;
  padding: 5px 10px;
  height: ${props => props.height};
  margin: 5px;
  border-radius: 10px;
  display: block;
`

export const SubmitButton = styled.button`
  background-color: #3399ff;
  color: white;
  font-size: 20px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin: 10px;
`;

export const QuestionStyle = styled.div`
  width: 50vw;
  min-height:50px;
  border-radius: 0px;
  border-left: 1px solid red;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`

export const QStyle = styled.div`
  font-size: 20px;
  padding: 10px;
  padding-left: 0px;
`

export const NameStyle = styled.div`
  font-size: 10px;
  color: #555555;
`

export const QuestionHolder = styled.div`
  margin-left: 20px;
  margin-bottom:10px;
  width: 100vw;
`;

export const ScoreHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

export const ReplyHolder = styled.div`
  margin: 10px 0px;
`
