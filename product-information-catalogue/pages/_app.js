// next
import App from "next/app";
import Head from "next/head";

// redux
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

// components
import withLayout from "../components/HOC/withLayout";

import theme from "../styles/Material-UI/theme";

// Material UI
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Style components
import "../styles/globals.css";
import HeaderandSidenav from "../layouts/HeaderandSidenav";

export class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <title>Next startup</title>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                </Head>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    {/* <ToastContainer /> */}
                    <Component {...pageProps} />
                </MuiThemeProvider>
            </>
        );
    }
}

// const makeStore = () => store;
// const wrapper = createWrapper(makeStore);

export default withLayout(MyApp, HeaderandSidenav);











// import App from 'next/app'
// import '../styles/globals.css'
// function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps} />
//   }
  
//   export default MyApp



