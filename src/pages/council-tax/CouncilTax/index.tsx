import * as React from 'react';
import * as GovUK from 'govuk-react';

class CouncilTax extends React.Component {

    componentDidMount(): void {
        document.title = "Council Tax - RNSLN"
    }

    render(): React.ReactNode {
        return (
            <div>
                <GovUK.Breadcrumbs>
                    <GovUK.Breadcrumbs.Link href="/">
                        Home
                    </GovUK.Breadcrumbs.Link>
                    Council Tax
                </GovUK.Breadcrumbs>
                <GovUK.H1>Council Tax</GovUK.H1>
            </div>
        )
    }
}
export default CouncilTax
