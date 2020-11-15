import React from "react";
import { Nav, NavItem} from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGift } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";
const tabs = [{
    route: "/home",
    icon: faHome,
    label: "Home"
  },{
    route: "/challenge",
    icon: faGift,
    label: "Challenge"
  }]

const Navigation = (props) => {
   return (
      
      <nav className="navbar fixed-bottom navbar-light" role="navigation">
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {
              tabs.map((tab, index) =>(
                <NavItem key={'tab-${index}'}>
                  <NavLink to={tab.route} className="nav-link" activeClassName="active">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                      <FontAwesomeIcon size="lg" icon={tab.icon}/>
                      <div>{tab.label}</div>
                    </div>
                  </NavLink>
                </NavItem>
              ))
            }
          </div>
        </Nav>
      </nav>
  )
};

export default Navigation;