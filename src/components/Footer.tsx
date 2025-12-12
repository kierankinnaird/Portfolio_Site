export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-sm">
          Built by <span className="text-white font-medium">Kieran Kinnaird</span> —{' '}
          <a
            href="https://kinnaird.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            kinnaird.dev
          </a>
          {' '}© {currentYear}
        </p>
      </div>
    </footer>
  );
}

