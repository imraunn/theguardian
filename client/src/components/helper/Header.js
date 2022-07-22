
//import useState hook to create menu collapse state
import React, { useState} from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";


const Header = ({repo:{loading,info}}) => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)
    const location = useLocation();
    const path=location.pathname;
    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={path.includes('/dashboard')} icon={<FiHome />}>Home <Link to="/dashboard"/></MenuItem>
              <MenuItem active={path.includes('/parameter1')} icon={<FaList />}>Parameter 1 <Link to="/parameter1"/></MenuItem>
              <MenuItem active={path.includes('/parameter2')} icon={<FaRegHeart />}>Parameter 2 <Link to="/parameter2"/></MenuItem>
              <MenuItem active={path.includes('/parameter3')} icon={<RiPencilLine />}>Parameter 3 <Link to="/parameter3"/></MenuItem>
              <MenuItem active={path.includes('/parameter4')} icon={<BiCog />}>Parameter 4 <Link to="/parameter4"/></MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};
// style={{pointerEvents: info===null ? 'none' : '' }}
Header.protoTypes = {
  repo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  repo: state.repo,
});

export default connect(mapStateToProps,null)(Header);
