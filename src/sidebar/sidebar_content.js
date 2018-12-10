import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./material_title_panel";
<<<<<<< HEAD
import fire from './../config/Fire';
import {withRouter} from "react-router-dom";
import { Link } from 'react-router-dom'
=======
import { Link } from 'react-router-dom';
import fire from './../config/Fire';
>>>>>>> b11caf6b2915ab6fef7e244c511287a007f319be

const styles = {
  sidebar: {
    width: 256,
    height: "100%"
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "white",
    textDecoration: "none"
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#757575"
  },
  content: {
    padding: "16px",
<<<<<<< HEAD
    height: "93%",
=======
    height: "100%",
>>>>>>> b11caf6b2915ab6fef7e244c511287a007f319be
    backgroundColor: "#090E2E"
  }
};

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

<<<<<<< HEAD
  
  this.state = {
    modal: false
  };
  const toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  const logout = () => {
    fire.auth().signOut();
  }
  const handleClick = () => {
    this.props.history.push("/userprofile");
  };
=======
  const links = [];

  for (let ind = 0; ind < 10; ind++) {
    links.push(
      <a key={ind} href="#" style={styles.sidebarLink}>
        Mock menu item {ind}
      </a>
    );
  }
  
  const logout = () => {
    fire.auth().signOut();
  }
>>>>>>> b11caf6b2915ab6fef7e244c511287a007f319be

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <a href="HomePage.js" style={styles.sidebarLink}>
          Dashboard
        </a>
<<<<<<< HEAD
        <div style={styles.divider} />
        <a id="logoutLink" href="#" onClick={logout} style={styles.sidebarLink}>
=======
        <a href="UserProfile.js" style={styles.sidebarLink}>
          User Profile
        </a>
        <div style={styles.divider} />
        <a id="logoutLink" href="#" onClick={logout}>
>>>>>>> b11caf6b2915ab6fef7e244c511287a007f319be
            Logout
        </a>
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;