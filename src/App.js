import React, {Component} from "react";
import { Router } from "@reach/router";
import styled from "styled-components";

import Navbar from './components/navbar/Navbar';
import DashBoard from './components/Dashboard/Dashboard';


import GlobalStyle from './styles/Global';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <FlexContainer>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
       <Router>
          <DashBoard path="/"/>
        </Router> 
        <GlobalStyle />
      </FlexContainer>
    )
  }
}

export default App;


const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
