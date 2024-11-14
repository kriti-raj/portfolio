import { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 50px 0;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  padding: 0 20px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({ disabled }) =>
    disabled ? "#666" : "hsla(271, 100%, 50%, 1)"};
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ disabled }) =>
      disabled ? "#666" : "hsla(271, 100%, 60%, 1)"};
  }
`;

const SuccessMessage = styled.div`
  color: #00ff00;
  font-size: 16px;
  text-align: center;
  margin-top: 8px;
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 16px;
  text-align: center;
  margin-top: 8px;
`;

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setSuccess(false);
    setError("");

    const {
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID,
      VITE_EMAILJS_PUBLIC_KEY,
    } = import.meta.env;

    if (
      !VITE_EMAILJS_SERVICE_ID ||
      !VITE_EMAILJS_TEMPLATE_ID ||
      !VITE_EMAILJS_PUBLIC_KEY
    ) {
      setError("Email service not configured properly");
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      form.current.reset();

      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      setError(error.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput
            type="email"
            required
            placeholder="Your Email"
            name="from_email"
            disabled={loading}
            aria-label="Your email address"
          />
          <ContactInput
            type="text"
            required
            placeholder="Your Name"
            name="from_name"
            disabled={loading}
            aria-label="Your name"
          />
          <ContactInput
            type="text"
            required
            placeholder="Subject"
            name="subject"
            disabled={loading}
            aria-label="Email subject"
          />
          <ContactInputMessage
            required
            placeholder="Message"
            name="message"
            rows={4}
            disabled={loading}
            aria-label="Your message"
          />
          {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
          {success && (
            <SuccessMessage role="alert">
              Message sent successfully!
            </SuccessMessage>
          )}
          <ContactButton
            type="submit"
            value={loading ? "Sending..." : "Send"}
            disabled={loading}
          />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
