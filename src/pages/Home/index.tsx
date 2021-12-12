import * as React from 'react';
import * as GovUK from 'govuk-react';


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
                <p className='govuk-body'>This is the content for Writing well for the web.</p>
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
                <p className='govuk-body'>This is the content for Writing well for specialists.</p>
              </div>
            </div>
          </div>
        </div>
      )
  }
}
export default Home
