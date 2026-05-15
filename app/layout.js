import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata = {
  title: "AB Cafe & Eatery | Best Restaurant in Gudur",
  
  description:
    "Experience bold flavors, grilled specialties, quick bites, and unforgettable dining at AB Cafe & Eatery in Gudur.",

  keywords: [
    "AB Cafe & Eatery",
    "Best restaurant in Gudur",
    "Cafe in Gudur",
    "Best food in Gudur",
    "Chicken dishes in Gudur",
    "Family restaurant Gudur",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}