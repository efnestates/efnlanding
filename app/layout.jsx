import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const roboto = Roboto({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "EFN Estates",
  description: "Experts in the field.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-body-color ">
        <NavBar />
        <section className="main-container">
          <div className="w-full max-w-6xl">{children}</div>
        </section>
      </body>
    </html>
  );
}
