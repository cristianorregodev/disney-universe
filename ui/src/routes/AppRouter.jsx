import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../containers/Layout'
import { Home } from '../pages/Home'
import { CharacterDetails } from '../pages/CharacterDetails'
import { MovieDetails } from '../pages/MovieDetails'
import { Movies } from '../pages/Movies'
import { Characters } from '../pages/Characters'
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
