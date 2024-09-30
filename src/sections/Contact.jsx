import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Contact = () => {

    const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#141010',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

   const formRef = useRef();


  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
//service_fqdg60k
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
   
  const handleSubmit = async (e) => {
    e.preventDefault() ; 

    try {
     setLoading(true);
   await  emailjs.send('service_fqdg60k','template_o1oss67',{
        from_name : form.name ,
        to_name : form.email , 
        to_email : "yessine305@gmail.com",
        message : form.message,
    },
    'UXhCJ1hWFGOhOsCGG');

    toast.success('Your message has been sent succefully') ;
    handleOpen() ; 
    setLoading(false);

    setForm({
         name: '', email: '', message: '' 
    });

    
}catch(err) {
    setLoading(false) ; 
    console.log(err) ; 
    toast.error('Something went wrong',err.message)
}


  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   return (
    <section className="c-space xl:h-fit" id="contact">
      <div className="relative flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text mt-10 ">Let{"'"}s talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., Misty"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., Misty@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
>
        <Box sx={style}>
            <Typography className='flex items-center justify-center' id="modal-modal-title" variant="h6" component="h2">
                <div className='rounded-full bg-black-100 h-20 w-20 relative flex items-center justify-center'>
                        <img src='/assets/tick.svg'  alt='right arrow' className='text-green-400 font-extrabold' >
                        </img>
                </div> 
    </Typography>
    <Typography className='text-white-700 text-center'  id="modal-modal-description" sx={{ mt: 2 }}>
      The email has been sended successfully
    </Typography>
  </Box>
</Modal>
            <button className="field-btn btn btn-active btn-neutral" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );

}

export default Contact;
