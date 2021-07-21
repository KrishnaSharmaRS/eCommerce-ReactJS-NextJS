import type { AppProps } from "next/app";

import { wrapper } from "../redux/store";
import PageBodyContainer from "../components/PageBodyContainer";

import "../styles/app.styles.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <PageBodyContainer>
      <Component {...pageProps} />
    </PageBodyContainer>
  );
}

export default wrapper.withRedux(App);
