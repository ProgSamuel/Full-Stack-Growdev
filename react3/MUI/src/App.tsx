import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeReviewCard from './components/teste'
import TemporaryDrawer from './components/tolltip'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <RecipeReviewCard/>
      <TemporaryDrawer/>
    </>
  )
}

export default App
