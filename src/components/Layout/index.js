import React from "react";
import { Layout } from "antd";
import PageHeader from "./Header";
import PageFooter from "./Footer";
import PageContent from "./Content";
import styles from "./layout.module.scss";

const PageLayout = ({ children }) => {
    return (
        <Layout className={styles.layout}>
            <PageHeader />
            <PageContent>{children}</PageContent>
            <PageFooter />
        </Layout>
    );
};
export default PageLayout;
