import { StrictMode } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import emailjs from '@emailjs/browser';

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import StarCanvas from "./components/canvas/Stars";

// Theme
import { darkTheme } from "./utils/Themes";

// Initialize EmailJS
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (!EMAILJS_PUBLIC_KEY) {
  console.warn('EmailJS public key is not set in environment variables');
} else {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <StrictMode>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Navbar />
          <Body>
            <StarCanvas />
            <main>
              <Hero />
              <Wrapper>
                <Skills />
                {/* <Experience /> */}
              </Wrapper>
              <Projects />
              <Wrapper>
                <Education />
                <Contact />
              </Wrapper>
              <Footer />
            </main>
          </Body>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
