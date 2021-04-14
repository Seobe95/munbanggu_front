import React from 'react';
import styled from 'styled-components';
import HeaderLogin from './HeaderLogin';
import headerlogo from '../shared/header_logo.png'
import HeaderCategory from './HeaderCategory'

const HeaderScrollLogo=(props)=>{

    
  return (
    <React.Fragment>
      <Container>
        <LoginBox>
          <Box>
            <GridBox>
              <ImgBox>
                <Atag>
                  <Img src={headerlogo} />
                </Atag>
              </ImgBox>
              <il>
                <LoginText>로그인</LoginText>
                <TextBar />
              </il>
              <il>
                <LoginText>회원가입</LoginText>
                <TextBar />
              </il>
              <il>
                <LoginText>마이페이지</LoginText>
                <TextBar />
              </il>
              <il>
                <LoginText>
                  장바구니<CartCount>0</CartCount>
                </LoginText>
              </il>
            </GridBox>
          </Box>
          <HeaderCategory />
        </LoginBox>
      </Container>
    </React.Fragment>
  );
}


// <ScrollLogo>
//                 <LogoBox>

//                 </LogoBox>
//               </ScrollLogo>


const Container = styled.div`
position : relative;
background : #fff;
z-index : 99;
padding-bottom : 95px;
`
const LoginBox = styled.div`
height : 40px;
border-bottom : 1px solid #eaeaea;
background : #fff;
position : fixed;
width : 100%;
top : 0px;
`
const Box = styled.div`
    position : relative;
    width : 1200px; 
    margin : 0px auto;
`
const ImgBox = styled.div`
text-align : center;
float : left;
margin : 0px auto;
left : 36.3%;
`
// const ScrollLogo = styled.div`
//     position : relative;
//     width : 1200px;
//     margin : 0 auto;
//     display : flex;
    
// `
// const LogoBox = styled.div`
//     position : fixed;
//     top : 0;
//     left : 36.3%;
//     width : 27.3%;
//     z-index : 99;
//     height : 39px;
//     line-height : 39px;
// `
const Atag = styled.a`
    width : auto;
    display : block;
    margin : 0 300px;
`
const Img = styled.img`
height: 39px;
width: auto;

`
// const Ul = styled.ul`
//   float : left;
//   position : relative;
//   line-height : 1;
//   z-index : 99;
//   list-style : none;
// `
const GridBox = styled.div`
  float : right;
  position : relative;
  line-height : 1;
  z-index : 99;
  list-style : none;
`
const LoginText = styled.a`
    display : inline-block;
    height : 40px;
    padding : 0 10px 0 0;
    color : #717171;
    font-weight : 500;
    font-size : 12px;
    line-height : 40px;
    &: hover {
        cursor : pointer;
    }
`
const TextBar = styled.span`
    display : inline-block;
    width : 1px;
    height : 7px;
    margin : 0 10px 0 0;
    background : #ddd;
    vertical-align : 0px;
`
const CartCount = styled.strong`
    display : inline-block;
    padding : 0px 5px 3px 4px;
    color : #29C1BC;
    line-height : 11px;
    font-size : 10px;  
    vertical-align : middle; 
`


export default HeaderScrollLogo;