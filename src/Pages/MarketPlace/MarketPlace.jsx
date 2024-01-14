import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import './MarketPlace.Style.css'
import SearchBar from '../../components/SearchBar/SearchBar';
import ListingCard from '../../components/ListingCard/ListingCard';
import { listingProperties } from '../List/constant';

const MarketPlace = () => {
  return (
    <section>
      <Container fluid className="marketPlace" id="">
        <Container className="searching">
          <Col md={12}>
            <SearchBar />
          </Col>
        </Container>
      </Container>
      <Container fluid className="gridSystem" id="listId">
        <Row>
          <Col md={12} className="" style={{padding: 0,}}>
            <div className="listProperties">
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
    </section>
  )
}

export default MarketPlace
