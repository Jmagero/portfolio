import {
  Routes,
  Route,
} from 'react-router-dom';
import { useState } from 'react';
import { send } from 'emailjs-com';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import ContactForm from './components/Contact';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_pmv0gw9',
      'template_mjvrldf',
      toSend,
      '9PLaSHxSbSXHAQ-Vf',
    )
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.text);
        }
        return response.json();
      }).then(() => setStatus("I'll be in touch soon."))
      .catch((err) => {
        setStatus(err.toString());
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  if (status) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
      </>
    );
  }
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route
          path="/contact"
          element={(
            <ContactForm
              onSubmit={onSubmit}
              handleChange={handleChange}
              toSend={toSend}
            />
)}
        />
      </Routes>
    </div>
  );
}

export default App;
