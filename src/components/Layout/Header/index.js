import React from "react";
import { NavLink } from "react-router-dom";
import { Layout } from "antd";
import { Logo } from "./../../../components/Logo/index";
import { Badge } from "antd";
import "./header.scss";

const { Header } = Layout;

const PageHeader = () => {
    return (
        <>
            <Header className={"header"}>
                <Logo />

                <div className={"headerFeatures"}>

                    <nav className={"navLinkGroup"}>
                        <NavLink
                            to="/"
                            exact

                            className={"headerNavLink"}
                        >
                            Add Todos
                        </NavLink>

                        <NavLink
                            to="/cart"
                            exact
                            className={"headerNavLink"}
                        >
                            View All Todos

                        </NavLink>

                        <NavLink
                            to="/order-history"
                            exact
                            activeStyle={{
                                color: "#25f525",
                            }}
                            className={"headerNavLink"}
                        >
                            Todos history
                        </NavLink>
                    </nav>
                </div>
            </Header>
        </>
    );
};

export default PageHeader;
