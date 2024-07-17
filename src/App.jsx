
import AppRoutes from './routes/AppRoutes'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './i18n/i18n'
import { useTranslation } from 'react-i18next';
import React from 'react';

const App = () => {
  const { i18n } = useTranslation();
  React.useEffect(() => {
    const lang = localStorage.getItem('lang')
    if(lang){
      i18n.changeLanguage(lang)
    }
  },[])

  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App
