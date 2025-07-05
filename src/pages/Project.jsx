import React from 'react'
import { motion } from 'framer-motion'
import './Page.css'

const Project = () => {
  return (
    <motion.div className="page" initial={{ x: '-100vw' }} animate={{ x: 0 }} exit={{ x: '100vw' }} transition={{ type: 'spring', stiffness: 50 }}>
      <h2>Our Movie Projects 🎥</h2>
      <p>Discover our recent movie collections and upcoming projects.</p>
    </motion.div>
  )
}

export default Project
