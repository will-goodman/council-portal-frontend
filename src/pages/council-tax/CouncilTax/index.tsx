import * as React from 'react';
import * as GovUK from 'govuk-react';
import { FaRoad, FaUser, FaChartLine } from 'react-icons/fa';
import SubServiceButton from '../../../components/SubServiceButton';
import './index.scss';

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
                <SubServiceButton subServiceName="What your Council Tax pays for"  subServiceDescription="" icon={FaRoad} href="/council-tax/what-council-tax-pays-for" />
                <SubServiceButton subServiceName='Who needs to pay' subServiceDescription='Including discounts and exemptions.' icon={FaUser} href="/council-tax/who-needs-to-pay" />
                <SubServiceButton subServiceName='Bands and rates' subServiceDescription='' icon={FaChartLine} href='/council-tax/bands-and-rates' />
                <SubServiceButton subServiceName='Manage your Council Tax' subServiceDescription='Pay, register, request a refund, adjust payment plan and more.' icon={FaUser} href='/council-tax/manage-your-council-tax' />
                <GovUK.H3 id="contact-link">Question not answered? <GovUK.Link href="/contact">Contact the Council Tax team</GovUK.Link></GovUK.H3>
            </div>
        )
    }
}
export default CouncilTax
