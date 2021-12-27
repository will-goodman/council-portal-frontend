import * as React from 'react';
import * as GovUK from 'govuk-react';
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
                <ServiceButton serviceName="Council Tax" icon={Receipt} href="services/residents/council-tax"/>
                <ServiceButton serviceName="Rubbish & Recycling" icon={Trash} href="services/residents/waste" />
                <ServiceButton serviceName="Parking" icon={RiParkingFill} href="services/residents/parking" />
                <ServiceButton serviceName="Housing" icon={HouseDoor} href="services/residents/housing" />
                <ServiceButton serviceName="Children & Families" icon={MdFamilyRestroom} href="services/residents/children-families" />
                <ServiceButton serviceName="Adult Social Care & Health" icon={RiMentalHealthLine} href="services/residents/adult-social-care" />
                <ServiceButton serviceName="Births, Deaths, & Ceremonies" icon={FaBabyCarriage} href="services/residents/ceremonies" />
                <ServiceButton serviceName="Planning & Development" icon={Bricks} href="services/residents/development" />
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
                <ServiceButton serviceName="Business Rates" icon={AiOutlineShop} href="services/businesses/business-rates" />
                <ServiceButton serviceName="Commercial Waste" icon={Trash} href="services/businesses/waste" />
                <ServiceButton serviceName="Licensing" icon={GiWineBottle} href="services/businesses/licensing" /> 
              </div>
            </div>
          </div>
        </div>
      )
  }
}
export default Home
