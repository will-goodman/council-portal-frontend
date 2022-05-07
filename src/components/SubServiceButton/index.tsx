import * as React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './index.scss';

interface SubServiceButtonProps { 
  subServiceName: string,
  subServiceDescription: string,
  icon: any,
  href: string
}

class SubServiceButton extends React.Component<SubServiceButtonProps> {

  render(): React.ReactNode {
    const Icon = this.props.icon
    return (
        <Button className="sub-service-button" href={this.props.href}>
          <Container className="sub-service-button-container">
            <Row className="justify-content-start align-items-center sub-service-button-container-row">
              <Col className="sub-service-button-icon-col">
                <Icon className="sub-service-button-icon" />
              </Col>
              <Col className="sub-service-button-caption">
                <Row>
                    <h3>{ this.props.subServiceName }</h3>
                </Row>
                <Row>
                    <h6>{ this.props.subServiceDescription }</h6>
                </Row>
              </Col>
            </Row>
          </Container>
        </Button>
    )
  }

}
export default SubServiceButton
