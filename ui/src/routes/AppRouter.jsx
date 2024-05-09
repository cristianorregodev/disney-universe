import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from '../containers/Layout'
import { Home } from '../pages/Home'
import { CharacterDetails } from '../pages/CharacterDetails'
import { MovieDetails } from '../pages/MovieDetails'
import { Movies } from '../pages/Movies'
import { Characters } from '../pages/Characters'
import { Login } from '../pages/Login'
import { ProtectedRoute } from '../containers/ProtectedRoute'
import { Series } from '../pages/Series'
import { useSelector } from 'react-redux'
import { NotFound } from '../containers/NotFound'
import { CreateSerie } from '../pages/CreateSerie'
export const AppRouter = () => {
    const isAuth = useSelector((state) => state.auth)
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={!isAuth ? <Login /> : <Navigate to="/" replace />} />
                    <Route path="/characters" element={<Characters />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/series" element={<Series />} />
                    <Route path="/series/create" element={<CreateSerie />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/movies/:id" element={<MovieDetails />} />
                        <Route path="/characters/:id" element={<CharacterDetails />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
