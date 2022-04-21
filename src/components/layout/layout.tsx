import React, { Fragment } from "react";
import MainNavigation from "./mainNavigation";
import classes from './Layout.module.css';

const Layout = (props: any) => {
    return (
        <Fragment>
            <MainNavigation />
            <main className={classes.main}>
                {props.children}
            </main>
        </Fragment>
    );
};

export default Layout;