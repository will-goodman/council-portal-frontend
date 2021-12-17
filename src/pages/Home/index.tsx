import * as React from 'react';
import * as GovUK from 'govuk-react';
import * as ReactBootstrap from 'react-bootstrap';
import { HouseDoor, Trash, Receipt, Bricks } from 'react-bootstrap-icons';
import { RiParkingFill, RiMentalHealthLine } from 'react-icons/ri';
import { MdFamilyRestroom } from 'react-icons/md';
import { FaBabyCarriage } from 'react-icons/fa';
import { AiOutlineShop } from 'react-icons/ai';
import { GiWineBottle } from 'react-icons/gi';
import ServiceButton from '../../components/ServiceButton';


class Home extends React.Component {

  componentDidMount() {
    if (typeof window !== "undefined") {
      require("govuk-frontend").initAll()
    }
  }

  render(): React.ReactNode {
      return (
        <div>
          <GovUK.H1>Welcome to Rinseln</GovUK.H1>
          <GovUK.LeadParagraph>
            Use this website to interact with Rinseln Council.
          </GovUK.LeadParagraph>
          <GovUK.H3>Services</GovUK.H3>
          <div className="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
            <div className="govuk-accordion__section ">
              <div className="govuk-accordion__section-header">
                <h2 className="govuk-accordion__section-heading">
                  <span className="govuk-accordion__section-button" id="accordion-default-heading-1">
                    Residents
                  </span>
                </h2>
                <div className="govuk-accordion__section-summary govuk-body" id="accordion-with-summary-sections-summary-1">
                  Council Tax, Bins/Recycling, Parking, and more.
                </div>
              </div>
              <div id="accordion-default-content-1" className="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-1">
                <ServiceButton serviceName="Council Tax" icon={Receipt} width="25%" />
                <ServiceButton serviceName="Bins/Recycling" icon={Trash} width="25%" />
                <ServiceButton serviceName="Parking" icon={RiParkingFill} width="25%" />
                <ServiceButton serviceName="Housing" icon={HouseDoor} width="25%" />
                {/* <ReactBootstrap.Container>
                  <ReactBootstrap.Row style={{height: "50%"}}>
                    <ServiceButton serviceName="Council Tax" icon={Receipt} width="25%" />
                    <ServiceButton serviceName="Bins/Recycling" icon={Trash} width="25%" />
                    <ServiceButton serviceName="Parking" icon={RiParkingFill} width="25%" />
                    <ServiceButton serviceName="Housing" icon={HouseDoor} width="25%" />
                  </ReactBootstrap.Row>
                  <ReactBootstrap.Row style={{height: "50%"}}>
                    <ServiceButton serviceName="Children & Families" icon={MdFamilyRestroom} width="25%" />
                    <ServiceButton serviceName="Adult Social Care & Health" icon={RiMentalHealthLine} width="25%" />
                    <ServiceButton serviceName="Births, Deaths, & Ceremonies" icon={FaBabyCarriage} width="25%" />
                    <ServiceButton serviceName="Planning & Development" icon={Bricks} width="25%" />
                  </ReactBootstrap.Row>
                </ReactBootstrap.Container> */}
              </div>
            </div>
            <div className="govuk-accordion__section ">
              <div className="govuk-accordion__section-header">
                <h2 className="govuk-accordion__section-heading">
                  <span className="govuk-accordion__section-button" id="accordion-default-heading-2">
                    Businesses
                  </span>
                </h2>
                <div className="govuk-accordion__section-summary govuk-body" id="accordion-with-summary-sections-summary-1">
                  Business Rates, Commercial Waste, and Licensing.
                </div>
              </div>
              <div id="accordion-default-content-2" className="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-2">
                <ReactBootstrap.Container>
                  <ReactBootstrap.Row>
                    <ServiceButton serviceName="Business Rates" icon={AiOutlineShop} width="25%" />
                    <ServiceButton serviceName="Commercial Waste" icon={Trash} width="25%" />
                    <ServiceButton serviceName="Licensing" icon={GiWineBottle} width="25%" />
                  </ReactBootstrap.Row>
                </ReactBootstrap.Container>
              </div>
            </div>
          </div>
        </div>
      )
  }
}
export default Home
