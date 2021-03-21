import React, { useState } from 'react'
import './Testimonials.css'

const Testimonials = () => {

    const arrTestimonials = [
        {id:1, name:"Jake", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {id:2, name:"Ludmila", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    ]

    const [testimonials, setTestimonials] = useState(arrTestimonials)

    const [newTestimonials, setNewTestimonials] = useState({
        id:"",
        name:"",
        text:"",
    })

    const handleNameChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            name:e.target.value
        }))
    }

    const handleTextChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            text:e.target.value
        }))
    }

    const sendForm = (e) => {
        e.preventDefault()
        setTestimonials(value => {
            return [...value, newTestimonials]
        })
        setNewTestimonials({
            id:"",
            name:"",
            text:"",
        })
    }

    return (
        <>
            <h2 className="flat-secondary-title">Comments</h2>

            <form onSubmit={sendForm} className='flat-form-wrap'>
                <div className="flat-form-input">
                    <input
                        text="text"
                        placeholder="Your name"
                        value={newTestimonials.name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="flat-form-textarea">
                    <textarea
                        placeholder="Your message" 
                        value={newTestimonials.text}
                        onChange={handleTextChange}
                    ></textarea>
                </div>
                <button className="flat-btn">Send</button>
            </form>

            {
                testimonials.map((item) => (
                    <div className="flat-testimonial-wrap" key={item.id}>
                        <div className="flat-user-name">Name:<span>{item.name}</span></div>
                        <div className="flat-user-message">Message:<span>{item.text}</span></div>
                    </div>
                ))
            }
        </>
    )
}

export default Testimonials