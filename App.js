import React from 'react';
import styled from 'styled-components';
import {Container,
        SubmitButton,
        MyInput,
        QuestionStyle,
        QStyle,
        NameStyle,
        QuestionHolder,
        ReplyHolder,
        ScoreHolder} from './Styles.js';
import Form from './Form.js';

function App() {
  const [questions, setQuestions] = React.useState({});
  const [topLevelList, setTopLevelList] = React.useState([]);
  const [id, setId] = React.useState(0);
  const [replyId, setReplyId] = React.useState(-1);

  let nameText = React.createRef();
  let questionText = React.createRef();
  let replyText = React.createRef();
  let replyName = React.createRef();

  const handleReply = (replyId, replyText, replyName) =>{
    setQuestions({...questions, [id]: {name:replyName, question: replyText, score: 0, children: []}, [replyId]: {...questions[replyId], children: [...questions[replyId].children, id]}});
    setId(id + 1);
    setReplyId(-1);
  }

  const handleSubmit = (replyId, qText, qName) =>{
    if(qName.length > 0 && qText.length > 0){
      setQuestions({...questions, [id]: {name: qName, question: qText, score: 0, children:[]}});
      setTopLevelList([id, ...topLevelList])
      setId(id + 1);
    }
    else{
      window.alert("make sure to enter a name and question");
    }
  }

  const upVote = (id) =>{
    setQuestions({...questions, [id]: {...questions[id], score:questions[id].score+1}})
  }

  const downVote = (id) =>{
    setQuestions({...questions, [id]: {...questions[id], score:questions[id].score-1}})
  }

  const renderQuestion = (currId) =>(
    <QuestionHolder>
      <QuestionStyle>
        <div>
            <QStyle>{questions[currId].question}</QStyle>
            <NameStyle>Posted by {questions[currId].name}</NameStyle>
        </div>
        <ScoreHolder>
          <div onClick={()=>upVote(currId)}>&#9650; </div>
          <div>{questions[currId].score}</div>
          <div onClick={()=>downVote(currId)}> &#9660;</div>
        </ScoreHolder>
      </QuestionStyle>
      {questions[currId].children.map((childId, index) => renderQuestion(childId))}
      <ReplyHolder>
          {currId === replyId ? <Form nameHolder="Name..."
                                      responseHolder="Reply..."
                                      responseVal={`@${questions[replyId].name} `}
                                      submitHandler={handleReply}
                                      id = {replyId}
                                      btnText = "Post Reply"/>
                              :
                              <button onClick={()=>setReplyId(currId)}>Reply</button>}
      </ReplyHolder>
    </QuestionHolder>
  );
  return (
    <Container>
      <Form nameHolder="Name..." btnText="Post Question" responseHolder="Question..." submitHandler={handleSubmit}/>
      {topLevelList.map((item, i) => renderQuestion(item))}
    </Container>
  );
}

export default App;
