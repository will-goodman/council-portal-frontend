import * as React from 'react';
import * as GovUK from 'govuk-react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import PageNotFound from './pages/errors/PageNotFound';


class App extends React.Component {
  render() {
    return (
      <Router>
        <GovUK.GlobalStyle />
        <GovUK.TopNav
          bgColor="#20b2aa"
          company={<span className="Logo">RNSLN</span>}
          serviceTitle="Rinseln Council"
          children={[
            <GovUK.TopNav.Anchor key="home">Home</GovUK.TopNav.Anchor>,
            <GovUK.TopNav.Anchor key="services">Services</GovUK.TopNav.Anchor>,
            <GovUK.TopNav.Anchor key="news">News</GovUK.TopNav.Anchor>
          ]}
        />
        <GovUK.Page.WidthContainer>
          <GovUK.PhaseBanner level="alpha">This is a new service – your feedback will help us to improve it.</GovUK.PhaseBanner>
          <GovUK.Page.Main>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </GovUK.Page.Main>
        </GovUK.Page.WidthContainer>
        <footer className="govuk-footer " role="contentinfo">
          <div className="govuk-width-container ">
            <div className="govuk-footer__meta">
              <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
                <span className="govuk-footer__licence-description">
                  Rinseln Council,  North Rhine-Westphalia
                </span>
              </div>
            </div>
          </div>
        </footer>  
      </Router>
    );
  }
}
export default App
