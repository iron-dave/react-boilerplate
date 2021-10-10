import React, { ReactElement, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./styles.module.scss";
import { Paper } from "@mui/material";

const Home = lazy(() => import("../../routes/Home"));
const NotFound = lazy(() => import("routes/NotFound"));

export default function Content(): ReactElement {
  return (
    <Paper variant="outlined" className={styles.content}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </Paper>
  );
}
