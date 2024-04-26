import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../containers/Layout'
import { Home } from '../pages/Home'
import { CharacterDetails } from '../pages/CharacterDetails'
import { MovieDetails } from '../pages/MovieDetails'
import { Movies } from '../pages/Movies'
import { Characters } from '../pages/Characters'
import { Login } from '../pages/Login'
import { AuthContext, AuthProvider } from '../context/AuthContext'
import { useContext } from 'react'
import { ProtectedRoute } from '../containers/ProtectedRoute'
export const AppRouter = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/movies" element={<Movies />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/movies/:id" element={<MovieDetails />} />
              <Route path="/characters/:id" element={<CharacterDetails />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  )
}
