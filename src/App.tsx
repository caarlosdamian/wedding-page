import './App.scss'
import { Footer } from './sections/footer/Footer'
import { Form } from './sections/form/Form'
import { Header } from './sections/header/Header'
import { Middle } from './sections/middle/Middle'

function App() {

  return (
    <main>
      <Header/>
      <Middle/>
      <Form/>
      <Footer/>
    </main>
  )
}

export default App
