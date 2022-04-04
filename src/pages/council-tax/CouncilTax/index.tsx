import * as React from 'react';
import * as GovUK from 'govuk-react';
import { Button } from 'react-bootstrap';

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
                <Button style={{width: "100%", height: "100px", margin: "5px"}} backgroun><h3>What your Council Tax pays for</h3></Button>
                <GovUK.H3>Need Help? <GovUK.Link href="/contact">Contact the Council Tax team</GovUK.Link></GovUK.H3>
            </div>
        )
    }
}
export default CouncilTax
