import React,{useState} from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

export default function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = (e) => {
    setId(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }
  const onLogin = (e) => {
    e.preventDefault();
    if(!id || !password) {
      alert("값을 모두 입력해주세요");
      return
    }
  }
  return (
    <>
      <Header/>
      <Container>
        <LoginContainer>
          <MainText>CORE</MainText>
          <form method="POST">
          <IdForm placeholder='아이디 입력' 
          id="id" 
          name="id"
          value={id}
          type="text"
          onChange={onChangeId}
          ></IdForm>
          <IdForm placeholder='비밀번호 입력' 
          id="password" 
          name="password" 
          type="password"
          value={password}
          onChange={onChangePassword}
          />
          <SubmitButton type="submit" onClick={onLogin}>로그인</SubmitButton>
          </form>
          <LowBarContainer>
            <LowBar href="#">아이디찾기</LowBar>
            <LowBar href="#">비밀번호찾기</LowBar>
            <LowBar1 href="#">회원가입</LowBar1>
          </LowBarContainer>
        </LoginContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  display:flex;
  width: 100%;
  height: 100%;
  padding: 8% 3%;
  box-sizing:border-box;

`

const LoginContainer = styled.div`
width: 40%;
height: 600px;
background: #FFF;
display:block;
justify-content:center;
margin: 0 auto;
text-align:center;
`

const MainText = styled.div`
width: 100%;
height: 70px;
font-size:60px;
font-family:Pretendard-ExtraBold;
margin-bottom: 30px;
`
const IdForm = styled.input`
width: 500px;
height: 80px;
border-radius:40px;
border: solid 1px #e8e8e8;
font-size: 20px;
padding: 0 30px;
box-sizing: border-box;
margin-top: 30px;
font-family:Pretendard-Regular;
`

const SubmitButton = styled.button`
width: 500px;
height: 80px;
border-radius:40px;
border: solid 1px #6458f5;
text-align:center;
background:#6458f5;
color:#fff;
font-size: 20px;
padding: 0 20px;
margin-top: 30px;
font-family:Pretendard-Regular;
cursor:pointer;
`

const LowBarContainer = styled.div`
display:flex;
justify-content:center;
margin-top: 30px;
`
const LowBar = styled.a`
display:flex;
justify-content:center;
margin-top: 30px;
background:white;
border-right: 1px solid #e8e8e8;
margin-left: 20px;
padding-right: 15px;
font-family:Pretendard-Regular;
text-decoration: none;
color:black;

`
const LowBar1 = styled.a`
display:flex;
justify-content:center;
margin-top: 30px;
background:white;
margin-left: 20px;
padding-right: 15px;
font-family:Pretendard-Regular;
text-decoration: none;
color:black;

`