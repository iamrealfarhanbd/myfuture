import Header from "@/components/Header";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "My Future",
	description: "Generated by Farhan",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className} style={{textAlign:"center"}}>
				<Header />
				{children}
        <Footer/>
			</body>
		</html>
	);
}
