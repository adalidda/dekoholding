import React, { Component } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Router from "next/router";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Typography from '@material-ui/core/Typography';

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import { container, title } from "assets/jss/nextjs-material-kit.js";


const dashboardRoutes = [];
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


export default class Index extends Component {

  constructor (props) {
     super(props)
     this.state = {
  section: {
    padding: "70px 0",
    textAlign: "center",
    color: "#ff0000"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#FFFAF0"
  },
  description: {
    color: "#999"
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },  
     }
  }

  componentDidMount = () => {
    ;
  };


  componentWillUnmount () {
    ;
  };

  render() {
   return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand=""
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
    <Parallax filter responsive image={require("assets/img/agri-drone.jpg")}>
    <div className={this.state.section}>
      <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={this.state.title}><b>Transition toward climate friendly value chain in the Agrifood Industry</b></h1>
              <br />
            </GridItem>
      </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(this.state.main, this.state.mainRaised)}>
        <div className={this.state.container}>
          <TeamSection />
        </div>
      </div>
      <Footer />
    </div>
  );
  }
}
