import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

import soybean from "assets/img/faces/soybean.jpg";
import flour from "assets/img/faces/flour.jpg";
import research from "assets/img/faces/research.jpg";
import startups from "assets/img/faces/startups.jpg";
import agroexport from "assets/img/faces/export.jpg";
import consortium from "assets/img/faces/consortium.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgCardTop,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
          <h2 className={classes.title}>Our Core Business</h2>
          <h5 className={classes.description}>
            Deko Holding is operating in West Africa in six key business activities.
          </h5>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={soybean} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Agricultural Services
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  We provide turn-key services for the development of commercial plantations: feasibility study, pilot projects, land preparation, crop nursery, crop plantations.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Button
                color="danger"
                size="lg"
                href="./components"
                target="_self"
                rel="noopener noreferrer"
              >
                Read more
              </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={flour} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Agrifood Manufacturing
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  We transform harvested crops into high value products such as cassava starch, bioethanol, animal feed, by-products for industries, etc...
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Button
                color="danger"
                size="lg"
                href="./components"
                target="_self"
                rel="noopener noreferrer"
              >
                Read more
              </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={research} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Research & Innovation
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Our Research & Innovation Unit works with local and international researchers to disrupt the agrifood industry.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Button
                color="danger"
                size="lg"
                href="./components"
                target="_self"
                rel="noopener noreferrer"
              >
                Read more
              </Button>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={startups} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Startups Incubator
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  We nurture agrifood startups by providing our expertise, our business network and our global market. Moreover, we help them to catch with any funding opportunity.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Button
                color="danger"
                size="lg"
                href="./components"
                target="_self"
                rel="noopener noreferrer"
              >
                Read more
              </Button>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={agroexport} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Agrifood Export
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  We market our agrifood products for the local, regional and international markets.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Button
                color="danger"
                size="lg"
                href="./components"
                target="_self"
                rel="noopener noreferrer"
              >
                Read more
              </Button>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={consortium} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Deko Consortium
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Deko Consortium is a consortium of agrifood producers and manufacturers in Africa. Our members cooperate together on Research & Innovation, Branding and Access to the global market.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
              <Button
                color="danger"
                size="lg"
                href="./components"
                target="_self"
                rel="noopener noreferrer"
              >
                Read more
              </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
