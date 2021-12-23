import * as React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './index.scss';

interface ServiceButtonProps { 
  serviceName: string,
  icon: any
}

class ServiceButton extends React.Component<ServiceButtonProps> {

  render(): React.ReactNode {
    const Icon = this.props.icon
    return (
        <Button className="service-button">
          <Container>
            <Row><Icon className="service-button-icon" /></Row>
            <Row><strong>{ this.props.serviceName }</strong></Row>
          </Container>
        </Button>
    )
  }

}
export default ServiceButton
