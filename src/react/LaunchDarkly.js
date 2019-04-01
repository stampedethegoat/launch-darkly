import React, { Component } from 'react';
import '../assets/resources/grid.css'; 
import { withLDConsumer } from 'ldclient-react';

import Main from './_Main/App';
import FormulaOne from './FormulaOne/App';

class App extends Component {
  render() {
    let main, contactInfo, footer;
    const style ={ 
      fontFamily: this.props.flags.font,
    }

    if (this.props.flags.contactInfo) contactInfo = <ContactInfo />
    if (this.props.flags.footer) footer = <Footer />

    switch (this.props.flags.overview) {
      case 'main':
        main = <Main />
        break;
      case 'f1':
        main = <FormulaOne />
        break;
    }

    return (
      <div className="row" style={style}>
        {main}
        {contactInfo}
        {footer}
      </div>
    )
  }
}

export default withLDConsumer()(App);