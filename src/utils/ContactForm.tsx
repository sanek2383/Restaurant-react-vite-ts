import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <div className="col-md-6">
      <div className="wow fadeInUp" data-wow-delay="0.2s">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name">Your Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email">Your Email</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <label htmlFor="subject">Subject</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a message here"
                  id="message"
                  style={{ height: "150px" }}
                  value={formData.message}
                  onChange={handleChange}
                />
                <label htmlFor="message">Message</label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary w-100 py-3" type="submit">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
