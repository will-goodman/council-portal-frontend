import * as React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './index.scss';

interface ServiceButtonProps { 
  serviceName: string,
  icon: any,
  href: string
}

class ServiceButton extends React.Component<ServiceButtonProps> {

  render(): React.ReactNode {
    const Icon = this.props.icon
    return (
        <Button className="service-button" href={this.props.href}>
          <Container className="service-button-container">
            <Row className="justify-content-start align-items-center service-button-container-row">
              <Col className="service-button-icon-col">
                <Icon className="service-button-icon" />
              </Col>
              <Col>
                <h4 className="service-button-caption">{ this.props.serviceName }</h4>
              </Col>
            </Row>
          </Container>
        </Button>
    )
  }

}
export default ServiceButton
