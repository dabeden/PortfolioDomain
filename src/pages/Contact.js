import React, { useState, Suspense, useRef } from "react";
import emailjs from '@emailjs/browser';
import GradientBackground from "../components/GradientBackground";
import Loader from "../components/Loader";
import Trout from "../models/Trout.jsx";
import { Canvas } from "@react-three/fiber"; 




const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', message: ''});
    const [currentAnimation, setCurrentAnimation] = useState("idle");
    const [isLoading, setisLoading] = useState(false);


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setisLoading(true);

        console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID)
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            
            {
                from_name: form.name,
                to_name: "Devon",
                from_email: form.email,
                to_email: 'dabeden@gmail.com',
                message:form.message
            },
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            
        ).then(() => {
            setisLoading(false);
            // TODO: Show success message
            // TODO: Hide an alert
        }).catch((error) => {
            setisLoading(false);
            console.log(error);
            // TODO: Show error message
        });
    };
    
    const handleFocus = () => {};
    const handleBlur = () => {};
    

    return (
        
        <section className="relative flex lg:flex-row flex-col max-container">
            
            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text">Reach Out</h1>


                <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7 my-14"
                >
                <label className="text-black-500">
                    Name
                    <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="John"
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    />
                </label>
                <label className="text-black-500">
                    E-Mail
                    <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="johndoe@gmail.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    />
                </label>
                <label className="text-black-500">
                    Your Message
                    <textarea
                    name="message"
                    rows={4}
                    className="textarea"
                    placeholder="How can I help you?"
                    required
                    value={form.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    />
                </label>
                <button
                    type="submit"
                    className="btn"
                    disabled={isLoading}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}


                    </button>
                </form>
                </div>
                
                <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Trout
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>

                </section>
                
                
                
    )
}

export default Contact;