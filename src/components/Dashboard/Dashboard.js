import React, {Component} from 'react';
import styled from "styled-components";

import {STAGES} from '../../config/Constants';
import Pills from './NavbarPills';
import workflow from "../../assets/workflow.jpg";

export default class DashBorad extends Component {
    

    render() {
        return (
            <div>
            <FlexContainer>
               { STAGES.map((stage, index) => {
                   return  <Pills id={index} text={stage}/>
                })
              }
            </FlexContainer>
                <Image src={workflow} alt="process" />
            </div>
        )
    }
}


const FlexContainer = styled.div`
  position: relative;
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;


const Image = styled.img`
  margin-top: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
  height: 600px;
`;