import * as React from 'react';
import * as GovUK from 'govuk-react';


class PageNotFound extends React.Component {

    componentDidMount(): void {
        document.title = "Page not found - RNSLN"
    }

    render(): React.ReactNode {
        return (
            <div>
                <GovUK.H1>Page not found</GovUK.H1>
                <GovUK.Paragraph>If you typed the web address, check it is correct.</GovUK.Paragraph>
                <GovUK.Paragraph>If you pasted the web address, check you copied the entire address.</GovUK.Paragraph>
            </div>
        )
    }
}
export default PageNotFound
