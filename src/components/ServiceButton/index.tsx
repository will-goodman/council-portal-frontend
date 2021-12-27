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
          <Container style={{height: "100%", width: "100%"}}>
            <Row className="justify-content-start align-items-center" style={{height: "100%"}}>
              <Col style={{maxWidth: "86px"}}>
                <Icon className="service-button-icon" />
              </Col>
              <Col style={{marginLeft: "5px"}}>
                <h5 style={{verticalAlign: "middle", textAlign: "left"}}>{ this.props.serviceName }</h5>
                {/* <strong>{ this.props.serviceName }</strong> */}
              </Col>
            </Row>
          </Container>
        </Button>
    )
  }

}
export default ServiceButton
