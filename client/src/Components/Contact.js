import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import '../App.css';

const Contact = () => {
  const form = useRef(null);
  const userName = useRef(null);
  const emailAddress = useRef(null);
  const messageRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    //sign in to emailjs and follow the docs
    emailjs
      .sendForm('SERVICE_ID', 'TEMPLATE_ID', form.current, 'PUBLIC_ID')
      .then(() =>
        setTimeout(() => {
          alert('Message sent successfully!');
          form.current.reset();
          setLoading(false);
        }, 1500)
      )
      .catch((error) => {
        console.log('FAILED...', error.text);
      });
  };

  return (
    <div className='my-28'>
      <div className='contact-container'>
        <h2 className='contact-title mt'>Contact Me</h2>
        <form onSubmit={handleSubmit} className='contact-form' ref={form}>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            ref={userName}
            className='contact-input'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            ref={emailAddress}
            className='contact-input'
            required
          />
          <textarea
            name='message'
            placeholder='Your Message'
            ref={messageRef}
            className='contact-textarea'
            rows={4}
            required
          ></textarea>
          <button type='submit' disabled={loading} className='contact-button'>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
