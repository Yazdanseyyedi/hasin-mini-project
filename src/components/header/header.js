import React, {useEffect, useState, } from "react";
import "./header.css";
import {NavLink,useHistory} from "react-router-dom";
import {RoutePath} from "../../data/route";
import {connect} from "react-redux";

const Header = (props) => {
    const [status, setStatus] = useState(props.isOpen);
    const detail = props.information;
    const history=useHistory()

    useEffect(() => {
        setStatus(props.isOpen);
    }, [props.isOpen]);

    return (
            <div className="header-items">
                <NavLink
                    to={RoutePath.aboutus}
                    activeClassName="active"
                    className="item"
                >
                    {/* <i className="material-icons">home</i> */}
                    <p>درباره ما</p>
                </NavLink>
                <NavLink
                    to={RoutePath.list}
                    activeClassName="active"
                    className="item"
                >
                    {/* <i className="material-icons">map</i> */}
                    <p>فهرست</p>
                </NavLink>
            </div>
    );
};

export default Header;
