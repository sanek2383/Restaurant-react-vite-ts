import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface Testimonial {
  id: number
  name: string
  review: string
  imageUrl: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    review: "This is an amazing service!",
    imageUrl: "/img/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "I highly recommend this product.",
    imageUrl: "/img/testimonial-2.jpg",
  },
  {
    id: 3,
    name: "Tom Brown",
    review: "Exceptional quality and support!",
    imageUrl: "/img/testimonial-3.jpg",
  },
  {
    id: 4,
    name: "Lisa Own",
    review: "Dolor et eos labore.",
    imageUrl: "/img/testimonial-4.jpg",
  },
]

const TestimonialSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 650, 
          settings: {
            slidesToShow: 1, 
            slidesToScroll: 1 
          }
        }
      ]
  }

  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div
            className="testimonial-item bg-transparent border rounded p-4"
            key={testimonial.id}
          >
            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
            <p>{testimonial.review}</p>
            <div className="d-flex align-items-center">
              <img
                className="img-fluid flex-shrink-0 rounded-circle"
                src={testimonial.imageUrl}
                alt={testimonial.name}
                style={{ width: "80px", height: "80px" }}
              />
              <div className="ps-3">
                <small className="mb-1">Client Name</small>
                <h5>{testimonial.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default TestimonialSlider
