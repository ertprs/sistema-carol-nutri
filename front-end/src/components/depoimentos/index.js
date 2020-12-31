import React from "react";
import ReactCardCarousel from "react-card-carousel";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

import {Container, Content} from './styles.js'

export default function MyCarousel(){
  return (
    <Container>
      <Content>
      <div className="CONTAINER_STYLE">
        <ReactCardCarousel autoplay={true} autoplay_speed={5000}>
          <div className="CARD_STYLE">
          <Card>
            <CardImg top width="100%" src="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Nome do usuário</CardTitle>
              <CardText>Depoimento.</CardText>
            </CardBody>
          </Card>
          </div>
          <div className="CARD_STYLE">
          <Card>
            <CardImg top width="100%" src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Nome do usuário</CardTitle>
              <CardText>Depoimento.</CardText>
            </CardBody>
        </Card>
          </div>
          <div className="CARD_STYLE">
          <Card>
        <CardImg top width="100%" src="https://images.pexels.com/photos/1853281/pexels-photo-1853281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Nome do usuário</CardTitle>
          <CardText>Depoimento.</CardText>
        </CardBody>
      </Card>
          </div>
          <div className="CARD_STYLE">
          <Card>
        <CardImg top width="100%" src="https://images.pexels.com/photos/5701173/pexels-photo-5701173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Nome do usuário</CardTitle>
          <CardText>Depoimento.</CardText>
        </CardBody>
      </Card>
          </div>
          <div className="CARD_STYLE">
          <Card>
        <CardImg top width="100%" src="https://images.pexels.com/photos/1334945/pexels-photo-1334945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Nome do usuário</CardTitle>
          <CardText>Depoimento.</CardText>
        </CardBody>
      </Card>
          </div>
        </ReactCardCarousel>
      </div>
      </Content>
    </Container>
  )
}