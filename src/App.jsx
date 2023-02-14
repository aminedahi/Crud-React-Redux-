import React from 'react'
import {Routes,Route} from 'react-router-dom'
import List from './pages/List'
import CreateUser from './pages/CreateUser'
import Edit from './pages/Edit'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/edit/:id" element={<Edit />} />
    </Routes>
    </div>
  )
}
