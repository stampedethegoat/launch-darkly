import React, { Component } from 'react';
import '../assets/resources/grid.css'; 
import { withLDConsumer } from 'ldclient-react';

import Main from './_Main/App';

class App extends Component {
  render() {
  switch (this.props.flags.overview)
    return (
      <div className="row">
        <Main />
      </div>
    )
  }
}

export default withLDConsumer()(App);