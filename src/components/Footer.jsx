const Footer = () => {
  return (
    <footer className="text-center p-6 text-sm text-gray-400">
      <hr className="border-t border-gray-700 m-5" />
      <p>
        Construido con <strong>React</strong>, <strong>Vite</strong> y <strong>Tailwind CSS</strong> &mdash; usando datos de{" "}
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 underline hover:text-indigo-300"
        >
          The Movie Database (TMDB)
        </a>.
      </p>
      <p>
        © {new Date().getFullYear()} Jorge Rodríguez. Código abierto en{" "}
        <a
          href="https://github.com/jorge-r-rodriguez/react-movies"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 underline hover:text-indigo-300"
        >
          GitHub
        </a>.
      </p>
    </footer>
  );
};

export default Footer;
