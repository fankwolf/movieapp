import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Page.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent!')
    setForm({ name: '', message: '' })
  }

  return (
    <motion.div className="page" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}>
      <h2>Contact Us 📞</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required></textarea>
        <button className="btn" type="submit">Send Message</button>
      </form>
    </motion.div>
  )
}

export default Contact
