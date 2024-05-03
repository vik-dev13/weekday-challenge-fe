/** @format */

import { store } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { Provider } from "react-redux";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={roboto.className}>
			<Provider store={store}>
				<Component {...pageProps} />;
			</Provider>
		</main>
	);
}
