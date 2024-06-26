import "./globals.css";
import SmoothScrolling from "./components/lenis/SmoothScrolling";
import PreloaderContextProvider from "./context/preloaderContext";
import Preloader from "./components/preloader/Preloader";
export const metadata = {
  title: "WIN School",
  description: "WIN School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PreloaderContextProvider>
          <SmoothScrolling>
            <Preloader />

            {children}
          </SmoothScrolling>
        </PreloaderContextProvider>
      </body>
    </html>
  );
}
