// Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import { Layout } from '../components/Layout'
import { Error } from '../components/Error'

export const DefaultRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
