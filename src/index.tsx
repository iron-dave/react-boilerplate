import React from "react";
import ReactDOM from "react-dom/client";
import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { store } from "redux/store";
import { Provider } from "react-redux";
import { loadLanguage } from "services/i18n";

import "./index.scss";

const skin = process.env.REACT_APP_SKIN_NAME as string;
const environment = process.env.REACT_APP_ENVIRONMENT as string;

if (!environment.toLowerCase().match(/^development$|^test$|^production$/)) {
  throw new Error(
    "Invalid environment specified (development,test,production): use --environment=<ENVIRONMENT> as script option"
  );
}
if (skin) {
  const App = lazy(() =>
    import(`skins/${skin}/App`).catch((error: Error) => {
      throw new Error(`Error while importing skin "${skin}": ${error.message}`);
    })
  );
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  loadLanguage(skin);
  
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={null}>
            <App />
          </Suspense>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
} else {
  throw new Error("No skin specified: use --skin=<SKIN_NAME> as script option");
}
