import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import ProfilePage from "./ProfilePage";
import AboutUs from "./AboutUs";
import Products from "../../exercise-2/components/Products";
import ProductDetail from "../../exercise-2/components/ProductDetail";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className={'toolbar'}>
            <NavLink id={'link_home'} className={'link'} to={'/'}>Home</NavLink>
            <NavLink id={'link_products'} className={'link'} to={'/products'}>Products</NavLink>
            <NavLink id={'link_profile'} className={'link'} to={'/my-profile'}>My Profile</NavLink>
            <NavLink id={'link_about'} className={'link'} to={'/about-us'}>About Us</NavLink>
          </div>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/products'} component={Products}/>
          <Route exact path={'/my-profile'} component={ProfilePage}/>
          <Route exact path={'/about-us'} component={AboutUs}/>
          <Switch>
            <Route path={'/products/:id'} render={(props) => <ProductDetail {...props} />}/>
          </Switch>
        </Router>
      </div>
    );
  }

  componentDidMount() {
    document.getElementById('link_home').style.textDecoration = 'underline';
  }
}

export default App;
export const setUnderline = (id) => {
  document.getElementById('link_home').style.textDecoration = 'none';
  document.getElementById('link_products').style.textDecoration = 'none';
  document.getElementById('link_profile').style.textDecoration = 'none';
  document.getElementById('link_about').style.textDecoration = 'none';
  document.getElementById(id).style.textDecoration = 'underline';
}
