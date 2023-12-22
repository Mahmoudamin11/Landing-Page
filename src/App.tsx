import { useEffect, useState } from 'react'
import FirstPage from "./components/FirstPage" ;
import WhoAreWe from "./components/WhoAreWe" ;
import Logos from "./components/Logos" ;
import Footer from "./components/Footer";
import AboverFooter from "./components/AboverFooter";

function App() {
  
  return (
    <>
    <FirstPage />
    <WhoAreWe />
    <Logos/>
    {/* <AboverFooter /> */}
    <Footer />
    </>
  );
}

export default App ;
