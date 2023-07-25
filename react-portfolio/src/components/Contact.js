import React from 'react';

const Contact = () => {
  return (
    <div>
      <figure class="image-mustache" alt="Alan's mustache"></figure>
      <section id="contact">
        <h2>Contact Me</h2>
        <form action="https://formsubmit.co/alandcuttill@gmail.com" method="POST">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required></input>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required></input>

              <label for="message">Message:</label>
              <textarea id="message" name="message" required></textarea>

              <button type="submit">Send Message</button>
              <input type="hidden" name="_next" value="https://alandbalan.github.io/02-Advanced-CSS-Style-Portfolio-Project/">
              </input>
            </form>
          </section>
    </div>
        );
};
        export default Contact;