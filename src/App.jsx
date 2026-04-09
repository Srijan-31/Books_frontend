import './App.css'
import Books from "./components/Books"
import BooksByAuthor from './components/BooksByAuthor'
import BooksByTitle from "./components/BooksByTitle"
import AddBooks from "./components/AddBooks"

export default function App(){
  return(
    <main>
      <Books/>
      <br/>
      <BooksByTitle title="Chokher Bali"/>
      <br/>
      <BooksByAuthor author="Dan Brown"/>
      <br/>
      <AddBooks/>
    </main>
  )
}