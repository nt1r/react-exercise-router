import React from 'react'
import {Link} from "react-router-dom";
import {setUnderline} from "./App";

class AboutUs extends React.Component {
  render() {
    return (
      <div className={'section'}>
        <p>Company: ThoughtWorks</p>
        <p>Local Location: Xi'an</p>
        <p/>
        <p>For more information, please view our <Link to={'/'} onClick={(event) => setUnderline('link_home', event)}>website</Link></p>
      </div>
    )
  }

  componentDidMount() {
    setUnderline('link_about');
  }
}

export default AboutUs;