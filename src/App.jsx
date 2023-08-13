import './App.css'
import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

// Components
import { Form } from '@/components';
import { Home, About, Dashboard, Register, Profile } from './pages';
import { Layout } from './Layout';
import { RequireAuth } from './auth/RequireAuth';
import { Course } from './pages/Dashboard/sections';




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
          <Route path="/profile/:username" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path="/course/:courserId" element={<RequireAuth><Course /></RequireAuth>} />
          <Route path="*" element={<div>Not Found <Link to="/" className='text-blue-700 bg-red-100 p-2 rounded-full'>Back to home</Link></div>} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
