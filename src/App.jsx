import './App.css'
import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

// Components
import { Form } from '@/components';
import { Home, About, Dashboard, Register} from '@/pages';
import { Layout } from './Layout';
import {RequireAuth } from './auth/RequireAuth';
export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Form type='login' />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="*" element={<div>Not Found <Link to="/">Back to home</Link></div>} />
        
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
