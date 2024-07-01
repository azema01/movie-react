import React from 'react'
import AppRoutes from './routes/AppRoutes'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Horror from './components/horror/Horror'


const App = () => {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Horror />
      <Footer />
    </div>
  )
}

export default App
