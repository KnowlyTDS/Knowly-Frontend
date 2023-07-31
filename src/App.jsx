import './App.css'
import { Suspense } from 'react';
import { BrowserRouter,Routes, Route, Link} from 'react-router-dom'

// Components
import { Home, About } from '@/pages';
import { Layout } from './Layout';
import { Form } from '@/components';
import { Dashboard } from './pages/Dashboard';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Form type='login'/>}/>
        <Route path="/register" element={<Form type='register'/>}/>
        <Route path="*" element={<div>Not Found <Link to="/">Back to home</Link></div>} />   
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
