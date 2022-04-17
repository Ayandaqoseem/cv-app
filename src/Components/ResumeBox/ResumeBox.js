import React from 'react'
import About from '../About/About'
import '../Body/styles.css'
import Header from '../Header/Header'

function ResumeBox() {
  return (
    <div className='resumeBox'>
        <About />
        <Header />
    </div>
  )
}

export default ResumeBox