import React, { Fragment } from 'react';
import useActionList from '../Hook/Stadiums/useActionList';
import styled from 'styled-components';
const StyledBackgroundStart = styled.span`

background-color: #fff;
border-radius: 40px;
padding: 1rem 1rem ;
min-width: 90px;
height: 50px;
display: flex;
gap: 10px;
flex-direction: row;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
cursor: pointer;

&:hover{
    background-color: #f1faee;
}
`
const StyledSpanStart = styled.span`

font-size: 1.3rem;
font-weight: 500;
color: #48cae4;

`
const StyledSpanIcon = styled.span`

font-size: 1.1rem;

`

const StyledCriclePage = styled.div`

height: 10px;
width: 10px;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
border-radius: 40px;
/* background-color: #90e0ef; */

`
const StyledBackgroundCriclePage = styled.div`
display: flex;
gap: 10px;
flex-direction: row;
align-items: center;


`
const Pagniation = (props) => {
   
 // console.log(props.api);

    const items = [];
    for (let i = 1; i <= props.totalPage; i++) {
        items.push(<Fragment key={i} > <StyledCriclePage className={`transition-transform ease-in-out duration-300  ${props.next === i ? "bg-cyan-300" : ""}`}></StyledCriclePage>
        </Fragment>);
    }
    return (
        <Fragment>
            <StyledBackgroundStart onClick={props.handlePrevious} className={`${props.next === 1 ? "invisible" : ""} `}>
                <StyledSpanIcon><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" fill='#0096c7' fontWeight="900" /></svg></StyledSpanIcon>
                <StyledSpanStart>Prev</StyledSpanStart>
            </StyledBackgroundStart>
            <StyledBackgroundCriclePage >
                {items}
            </StyledBackgroundCriclePage>
            <StyledBackgroundStart onClick={props.handleNext} className={`${props.totalPage === props.next ? "invisible" : ""} `}>
                <StyledSpanStart>Next</StyledSpanStart>
                <StyledSpanIcon><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill='#0096c7' fontWeight="900" /></svg>
                </StyledSpanIcon>
            </StyledBackgroundStart>
        </Fragment>
    );
};

export default Pagniation;