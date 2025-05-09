import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react"
import ReduxWrapper from "../../Provider/ReduxWrapper";
export const metadata = {
  title: "CodeKpi",
  description: "Ready to showcase your potential by your design skills ",
  icons:{
    icon: "/favicon.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <ReduxWrapper>
     <html lang="en">
        <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Gain the skills and knowledge you need to succeed in today's competitive job market." />
        </head>

        <body className="english">


          <div> {children} </div>
          <ToastContainer />
          <Analytics/>
        </body>
      </html> 
    </ReduxWrapper>
      
  );
}
