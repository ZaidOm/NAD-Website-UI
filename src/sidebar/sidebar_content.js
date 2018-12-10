import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./material_title_panel";
import fire from './../config/Fire';
import {withRouter} from "react-router-dom";
import { Link } from 'react-router-dom'

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
    height: "93%",
    backgroundColor: "#090E2E"
  }
};

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  
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

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <a href="HomePage.js" style={styles.sidebarLink}>
          Dashboard
        </a>
        <div style={styles.divider} />
        <a id="logoutLink" href="#" onClick={logout} style={styles.sidebarLink}>
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