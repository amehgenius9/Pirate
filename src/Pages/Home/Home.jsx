import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomePageBg from "../../assets/images/HomePage-bgImage.png";
import bestServices from "../../assets/images/connected-technology-removebg-preview 1.png"
import Button from "../../components/Button/Button"
import CardComponent from "./components/CardComponent/CardComponent";
import { services, listItems, listItems2, builts } from "./constant";
import BestServiceComponent from "./components/BestServiceComponent/BestServiceComponent";
import TransparentButton from "../../components/Button/TransparentButton";
import benefits from '../../assets/images/User-Benefits-Bg.png'
import './Home.Style.css';
import BuiltForCard from "../../components/BuiltForCard/BuiltForCard";
import ChatBot from "../../components/ChatBot/ChatBot";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
                <h1 className="heading-name">The Decentralized Real Estate Marketplace and Network Technology!</h1>
                <p className="heading-paragraph">List Properties on the goo...</p>
                <div className="buttons">
                  <Button
                    title="List"
                    className="butto"
                  />
                  <TransparentButton
                    title="Rent"
                    className="butto"
                  />
                  <TransparentButton
                    title="Buy"
                    className="butto"
                  />
                  {/* <TransparentButton
                    title="P2P"
                    className="butto"
                  /> */}
                </div>
            </Col>

            <Col md={5} style={{ paddingTop: 60,}}>
              <img
                src={HomePageBg}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "50rem" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Row>
          <Col md={12} className="ourServices">
            <h1 className="title-header">Our Services</h1>
            <div className="cardComponent">
              {services.map((service, index) => (
              <CardComponent 
                key={index}
                imageUrl={service.img}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
            </div>
          </Col>
        </Row>
    </Container>
    <Container fluid className="home-section" id="home">
          <Col md={12} className="ourServices">
            <h1 className="title-header">Our Best Services</h1>
            <p className="sub-header">Utilizing the Propout A.I to checkmate and conveniently flip property assets remotely. Open participation for all kinds of users with the following in-built AI tech integrations to foster trust, transperency, and convenience.</p>
          </Col>
          <Row className="row">
            <Col md={6}>
              <img
                src={bestServices}
                alt="home pic"
                className="imageBg"
              />
            </Col>
            <Col md={6}>
                <div className="mappedArray">
                    {listItems.map((list, index) => (
                      <BestServiceComponent
                        key={index}
                        img={list.img}
                        title={list.title}
                      />
                    ))}
                </div>
            </Col>
          </Row>
      </Container>
      <Container fluid className="home-section" id="home">
          <Col md={12} className="ourServices">
            <h1 className="title-header">User Benefits</h1>
            <p className="sub-header">Built for everyone to be inclusive in the real estate game.</p>
          </Col>
          <Row className="row">
            <Col md={6}>
                <div className="mappedArray">
                    {listItems2.map((list, index) => (
                      <BestServiceComponent
                        key={index}
                        img={list.img}
                        title={list.title}
                      />
                    ))}
                </div>
            </Col>
            <Col md={6}>
              <img
                src={benefits}
                alt="picture"
                className="imageBg"
              />
            </Col>
          </Row>
      </Container>
      <Container fluid className="builts" id="built">
        <Row className="builtContainer">
          <Col md={12} className="ourServices">
            <h1 className="title-header">Propout is Built For:</h1>
            <div className="built">
              {builts.map((built, index) => (
              <BuiltForCard 
                key={index}
                headTitle={built.headTitle}
                subTitle={built.subTitle}
              />
            ))}
            </div>
          </Col>
        </Row>
    </Container>
    <Container fluid className="chatbot">
        <Row className="bot">
          <Col md={12} className="">
            <ChatBot />
          </Col>
        </Row>
    </Container>
    </section>
  );
}

export default Home;
