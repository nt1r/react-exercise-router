import React from 'react'
import {setUnderline} from "./App";

class ProfilePage extends React.Component {
  render() {
    return (
      <div className={'section'}>
        <p>Username: Leqi</p>
        <p>Male</p>
        <p>Work: IT industry</p>
        <p>Website: '/my-profile'</p>
      </div>
    )
  }

  componentDidMount() {
    setUnderline('link_profile');
  }
}

export default ProfilePage;