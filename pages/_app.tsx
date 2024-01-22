import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Navbar from "@/components/Nav/nav";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import * as en from "@/lang/en.json";
import * as vi from "@/lang/vi.json";
import AOS from 'aos'
import 'aos/dist/aos.css'
function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const messages = {
    vi,
    en,
  };
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })
  return (
    <>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Navbar />
        <Component {...pageProps} />
      </IntlProvider>
    </>
  );
}

export default MyApp;
