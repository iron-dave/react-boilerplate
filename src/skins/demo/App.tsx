import React, { ReactElement, useEffect } from "react";
import "./App.scss";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "skins/demo/components/Header";
import Footer from "skins/demo/components/Footer";
import Navigation from "skins/demo/components/Navigation";
import Content from "./components/Content";
import Grid from "@mui/material/Grid";
import setLanguage from "services/i18n";
import { useAppSelector } from "redux/hooks";

function App(): ReactElement {
  const navigation = useAppSelector((state) => state.navigation.visible);
  const locale = useAppSelector((state) => state.settings.locale);

  useEffect(() => {
    setLanguage(locale);
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
          <Header title="React Boilerplate"></Header>
        </Grid>
        {navigation && (
          <Grid item xs={12} md={2}>
            <Navigation></Navigation>
          </Grid>
        )}
        <Grid item xs={12} md={navigation ? 10 : 12}>
          <Content></Content>
        </Grid>
        <Grid item xs={12} md={12}>
          <Footer websiteName="Your website"></Footer>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
