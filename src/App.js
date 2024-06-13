import Banner from "./components/Banner";
import Faq from "./components/Faq";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Testomonial from "./components/Testomonial";
import { ThemeProvider } from "./Context/Theme";
import { useEffect, useState } from 'react'


function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  return (
   <>
   <div className="dark:bg-black">
   <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
   <Nav />
   <Hero />
   <Feature />
   <Testomonial />
   <Faq />
   <Banner />
   <Footer />
   </ThemeProvider>
   </div>
   </>
  );
}

export default App;
