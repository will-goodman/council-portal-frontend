import * as React from 'react';
import * as GovUK from 'govuk-react';


class Home extends React.Component {
  render(): React.ReactNode {
      return (
        <div>
          <GovUK.H1>Welcome to Rinseln</GovUK.H1>
          <GovUK.LeadParagraph>
            Use this website to interact with Rinseln Council.
          </GovUK.LeadParagraph>
        </div>
      )
  }
}
export default Home
