import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

export default function ApplyPage() {
  return (
    <>
      <Header />
      <HighContainer>
        <ApplyText>Apply</ApplyText>
      </HighContainer>
    </>
  );
}

const HighContainer = styled.div`
width:100%;
height: 300px;
background: #faf7f7;
`

const ApplyText = styled.div`
font-size: 50px;
text-align: left;
font-family:Pretendard-Bold;
margin-top: 4rem;
`