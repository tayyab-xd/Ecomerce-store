import React from 'react'
import '../App.css'


const Contact = () => {
  return (
    <div className='mainBox'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1409.8132066951355!2d71.42430443335401!3d33.954979881913076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDU3JzE5LjEiTiA3McKwMjUnMjUuNCJF!5e0!3m2!1sen!2s!4v1709069596655!5m2!1sen!2s" width='100%' height='400' style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="main">
        <form action="https://formspree.io/f/mkndbvjd" method="post" className="" >
            <input className="input" type="text" placeholder="username" name="username" autocomplete="off" required />
            <input className="input" type="text" placeholder="email" name="email" autocomplete="off" required />
            <textarea className="textarea" name="message" id="" cols="30" rows="10" autocomplete="off" required placeholder="Enter Your Message"></textarea>
            <input className="btn" type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact
