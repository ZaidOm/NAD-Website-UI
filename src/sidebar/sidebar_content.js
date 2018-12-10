import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./material_title_panel";
import Dashboard from "./../pages/HomePage";

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
    height: "100%",
    backgroundColor: "#090E2E"
  }
};

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  const links = [];

  for (let ind = 0; ind < 10; ind++) {
    links.push(
      <a key={ind} href="#" style={styles.sidebarLink}>
        Mock menu item {ind}
      </a>
    );
  }

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <a href="./../pages/HomePage.js" style={styles.sidebarLink}>
          Dashboard
        </a>
        <a href="responsive_example.html" style={styles.sidebarLink}>
          User Profile
        </a>
        <div style={styles.divider} />
        <a href="responsive_example.html" style={styles.sidebarLink}>
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