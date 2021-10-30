// react
import React from "react";

// Components
import theme from "../../styles/Material-UI/theme";

// Material UI
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

const withLayout = (WrappedComponent, Layout) => {
    const hocComponent = ({ ...props }) => (
        <MuiThemeProvider theme={theme}>
            <Layout>
                <WrappedComponent {...props} />
            </Layout>
        </MuiThemeProvider>
    );

    return hocComponent;
};
export default withLayout;
