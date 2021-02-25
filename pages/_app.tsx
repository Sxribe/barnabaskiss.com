import '../styles/globals.scss'
import type { AppProps } from "next/app";

function Website( { Component, pageProps }: AppProps ) {
    return (
        <Component {...pageProps} />
    )
}

export default Website;