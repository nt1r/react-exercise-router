import React from 'react'
import {setUnderline} from "./App";

class Home extends React.Component {
  render() {
    return (
      <div className={'section'}>
        <p>This is a beautiful Home Page.</p>
        <p>And the url is '/'.</p>
      </div>
    )
  }

  componentDidMount() {
    setUnderline('link_home');
  }
}

export default Home;