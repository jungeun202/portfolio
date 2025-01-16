import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Jung Hwang",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script type="text/javascript">
        var sc_project = 13078514;
        var sc_invisible = 1;
        var sc_security = "56435565";
      </script>
      <script
        type="text/javascript"
        src="https://www.statcounter.com/counter/counter.js"
        async
      ></script>
      <noscript>
        <div className="statcounter">
          <a
            title="Web Analytics"
            href="https://statcounter.com/"
            target="_blank"
          >
            <img
              className="statcounter"
              src="https://c.statcounter.com/13078514/0/56435565/1/"
              alt="Web Analytics"
              referrerPolicy="no-referrer-when-downgrade"
              clothing="tag-value"
            />
          </a>
        </div>
      </noscript>
      <body className={JetBrainsMono.variable}>
        <Header />
        {/* <StairTransition/> */}
        {/* <PageTransition> */}
        {children}
        {/* </PageTransition> */}
      </body>
    </html>
  );
}
