import React from 'react'
import { motion } from 'framer-motion'
import './Page.css'

const Home = () => {
  const movies = [
    { title: 'BABY BLUES - UCHE MONTANA, FREDERICK LEONARD, PASCALINE ALEX, Latest 2025 Nigerian Movie', video: 'https://www.youtube.com/embed/z8bKop7XfGc' },
    { title: 'TWO CITIES ONE HEART - UCHE MONTANA, UZEE USMAN, TOLU ASANU LATEST 2025 NIGERIAN MOVIE', video: 'https://www.youtube.com/embed/G0uR_MRY8_U' },
    { title: 'MORE THAN MARRIAGE - UCHE MONTANA, RAY EMODI, SOPHIA CHSIOM (SOSO), Latest 2025 Nigerian Movie', video: 'https://www.youtube.com/embed/x0mSqMG0kVI' },
  ]

  return (
    <motion.div className="page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2>Welcome to MovieSite Pro 🎬</h2>
      <p>Explore our top movies below:</p>
      <div className="gallery">
        {movies.map((movie, index) => (
          <motion.div className="card" key={index} whileHover={{ scale: 1.05 }}>
            <iframe
              width="300"
              height="200"
              src={movie.video}
              title={movie.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>{movie.title}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Home
