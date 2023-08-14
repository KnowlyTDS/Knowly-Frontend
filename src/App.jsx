import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'

// Components
import { Form } from '@/components';
import { Layout } from '@/Layout'; 
import { Home, About, Dashboard, Register, Profile, Calendar, Course, NotFound } from './pages';
import { RequireAuth } from './auth/RequireAuth';
import './App.css'




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
          <Route path="/calendar" element={<RequireAuth><Calendar /></RequireAuth>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
