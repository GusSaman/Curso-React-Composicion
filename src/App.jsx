
import './styles/index.css';
import './styles/features.css';

import { NavBar } from './components/navigation/NavBar';
import { CustomBanner } from './components/banners/customBanner';
import { CustomNewsSection } from './components/sections/CustomNewsSection';
import { Footer } from './components/navigation/Footer';
import { useState } from 'react';


const App = () => {
 
  const [isLogged, setIsLogged] = useState(false);

  const onClickLogin = () => {
    setIsLogged(!isLogged);
  }

  return (
    <>
      <NavBar onClick={onClickLogin}/>
      <CustomBanner />
      <CustomNewsSection isLoginUser={isLogged} />
      <Footer />
    </>
  );
}

export default App
