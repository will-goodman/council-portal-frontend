import * as React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import * as GovUK from 'govuk-react';
import './index.scss';

interface ServiceButtonProps { 
  serviceName: string,
  width: string,
  icon: any
}

class ServiceButton extends React.Component<ServiceButtonProps> {

  render(): React.ReactNode {
    const Symbol = this.props.icon
    return (
      <span>
        <Button style={{backgroundColor: "#20b2aa", borderColor: "#20b2aa", width: "300px", height: "100px", margin: "5px", textAlign: "center"}}>
          <Symbol style={{width: "100px", height: "80px", float: "left"}} />
          <strong>{ this.props.serviceName }</strong>
          
          
          {/* <Container>
            
            {/* <Row><Symbol style={{height: "100%"}} /></Row> */}
            {/* <Row><GovUK.H6>{ this.props.serviceName }</GovUK.H6></Row> */}
          {/*</Container> */}
        </Button>
      </span>
      
    )
  }

}
export default ServiceButton
