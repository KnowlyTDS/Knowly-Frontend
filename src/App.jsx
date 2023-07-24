import './App.css'
import { Suspense } from 'react';
import { BrowserRouter,Routes, Route, Link} from 'react-router-dom'

// Components
import { Home, About } from '@/pages';
import { Layout } from './Layout';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>Not Found <Link to="/">Back to home</Link></div>} />   
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
