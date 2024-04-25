export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-4 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="text-gray-500 dark:text-gray-400">© 2023 Movie App. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50" href="#">
            Privacy Policy
          </a>
          <a className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}
