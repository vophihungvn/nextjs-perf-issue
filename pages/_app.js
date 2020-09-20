import React from "react";
import { useStore } from "../store";
import { Provider } from "react-redux";
import "antd/dist/antd.css";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
