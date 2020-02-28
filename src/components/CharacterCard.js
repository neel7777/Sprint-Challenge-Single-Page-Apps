import React from "react";
import styled from "styled-components";
import { Badge } from 'reactstrap';



export default function CharacterCard(props) {
  const RmCard = styled.div`
  background: lightgreen;
  
  max-width: 400px;
  max-height: 900px;
  border: 2px solid black;
  margin-left: 320px;
  text-align: center;
    
  
  
  
  margin-bottom: 20px;
`;


  return (
  
    <RmCard>
    <h1><Badge color="primary" pill>{props.name}</Badge></h1>        
    <h2>Status: {props.status}</h2>
    <h2>Species: {props.species}</h2>
    </RmCard>
    
  );
}
