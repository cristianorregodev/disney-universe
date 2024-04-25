import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../containers/Layout'
import { Home } from '../pages/Home'
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<h1>Hola desde persoanjes</h1>} />
          <Route path="/movies" element={<h1>Hola desde peliculas</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
