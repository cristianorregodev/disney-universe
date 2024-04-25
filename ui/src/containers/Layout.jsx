import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-full mx-auto px-4 py-8 bg-gray-200 dark:bg-gray-950">{children}</main>
      <Footer />
    </>
  )
}
