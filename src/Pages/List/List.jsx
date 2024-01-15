import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import BgImg from '../../assets/images/List Assets.png';
import './List.Style.css';
import DropdownButton from '../../components/DropdownButton/DropdownButton';
import CaseScenarioComponent from './components/CaseScenarioComponent/CaseScenarioComponent';
import Mobile from '../../assets/images/mobile-phone.png';
import { listingProperties, scenario } from './constant';
import ListingCard from '../../components/ListingCard/ListingCard';
import Robot from '../../assets/images/robot-image.png'
import CardComponent from '../Home/components/CardComponent/CardComponent';
import { services } from '../Home/constant';
import CardDisplay from './components/CardDiaplay/CardDisplay';
import ChatBot from '../../components/ChatBot/ChatBot';

const List = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
                <h1 className="heading-name">List Properties Online</h1>
                <p className="heading-paragraph">Re-list random properties up "for sale" or "to let". Join the real estate affiliate markets
                </p>
                <DropdownButton />
            </Col>
            <Col md={5} style={{ paddingTop: 60,}}>
              <img
                src={BgImg}
                alt="home pic"
                className="imageBg"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="secondPart" id="secondPart">
          <Col md={12}>
            <h1 style={{textAlign: 'center'}}>How it work</h1>
            <p className='subHeader'>Listing properties on Propout. Flip at your convenience and earn well! Bringing the real estate sector into one single marketplace and transparent community.
            </p>
          </Col>
        <Container className="">
          
          <Row>
            <Col md={3}>
              <img src={Mobile} alt='mobille' className='mobile' />
            </Col>
          </Row>
          <Col md={8}>
            <div className='caseScenario'>
              {scenario.map((items, index) => (
                <CaseScenarioComponent
                key={index}
                header={items.header}
                listing={items.listedItems}
                />
              ))}
              <img className='robot' src={Robot} alt='robot' />
            </div>
            </Col>
        </Container>
      </Container>
      <Container fluid className="listContainer" id="listId">
        <Row>
          <Col md={12} className="listPropertyParent">
            <h1 className="listTitle">Featured Listings</h1>
            <div className="listProperty">
              {listingProperties.map((property, index) => (
              <ListingCard
                key={index}
                coverImg={property.coverImg}
                listStatus={property.listStatus}
                amount={property.amount}
                titleHeader={property.titleHeader}
                description={property.description}
                listNumber={property.listNumber}
                listNumber2={property.listNumber2}
                listNumber3={property.listNumber3}
                listType={property.listType}
                listType2={property.listType2}
                listType3={property.listType3}
                agentName={property.agentName}
                agentStatus={property.agentStatus}
                agentImg={property.agentImg}
                onClick={{}}
              />
            ))}
            </div>
          </Col>
        </Row>
    </Container>
    <Container fluid className="carded" id="">
        <Container className="">
          <Col md={12}>
            <CardDisplay />
          </Col>
        </Container>
      </Container>
      <Container fluid className="chatbot">
        <Row className="bot">
          <Col md={12} className="">
            <ChatBot />
          </Col>
        </Row>
    </Container>
    </section>
  )
}

export default List