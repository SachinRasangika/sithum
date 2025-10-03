import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      text: "I couldn't recommend Sithuma Travel more highly - we had the most amazing holiday - every detail had been thought about and they were always on hand to answer any questions straight away. Very personal service.",
      name: "Camilla",
      rating: 5
    },
    {
      id: 2, 
      text: "Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Cannot wait for next year!",
      name: "Jeremy",
      rating: 5
    },
    {
      id: 3,
      text: "Fantastic customer service. Super friendly team and no question unanswered and no request too small. Really appreciated how they co-ordinated my family throughout the planning phase. Thank you Sithuma Travel.",
      name: "Jamie", 
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <div key={index} className="star">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_star)">
            <path d="M8.30474 0.620117L10.1009 6.14798H15.9132L11.2109 9.56441L13.007 15.0923L8.30474 11.6758L3.60246 15.0923L5.39857 9.56441L0.696289 6.14798H6.50863L8.30474 0.620117Z" fill="#FF6275"/>
          </g>
          <defs>
            <clipPath id="clip0_star">
              <rect width="16" height="14.5455" fill="white" transform="translate(0.304688 0.620117)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <div className="decorative-arrow decorative-arrow-left">
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.05469 14.6899C3.99331 14.5257 4.93652 14.3983 5.87884 14.271C6.51226 14.1855 7.14528 14.1 7.77622 14.0035C9.14026 13.7946 10.5141 13.6766 11.8806 13.5591C12.0865 13.5415 12.2922 13.5238 12.4977 13.5058C14.0644 13.1949 15.6494 13.08 17.2321 13.1625C18.8555 13.3445 20.4482 13.8596 21.9537 14.6899V15.0846C20.4482 15.9148 18.8555 16.43 17.2321 16.6118C15.6494 16.6944 14.0644 16.5796 12.4977 16.2686C10.9282 16.1313 9.35864 15.9597 7.77622 15.771C6.19379 15.5822 4.62424 15.3591 3.05469 15.0846V14.6899ZM18.8408 26.4257C19.0901 25.8439 19.364 25.2866 19.637 24.7313C19.7585 24.4842 19.8798 24.2373 19.9987 23.989C20.3846 23.1824 20.8221 22.4102 21.2852 21.6551C21.4537 21.3804 21.5934 21.0784 21.7306 20.7813C21.9706 20.2621 22.2035 19.7581 22.5717 19.4416C23.2676 18.8684 24.0695 18.5653 24.8875 18.5663L25.0547 18.8066C25.0466 19.8974 24.7958 20.9606 24.3343 21.8611C24.0737 22.4484 23.6373 22.7846 23.2005 23.1211C23.0121 23.2663 22.8234 23.4116 22.6489 23.5771C22.07 24.1262 21.4782 24.6582 20.8735 25.173C20.2689 25.6878 19.6513 26.1855 18.9952 26.6488L18.8408 26.4257ZM20.2943 3.80676C19.9039 3.46617 19.5145 3.12643 19.0982 2.81543L18.9181 3.03852C19.2655 3.89652 19.6386 4.7202 20.0245 5.52672C20.4105 6.33325 20.8222 7.12261 21.2338 7.89481C21.358 8.12763 21.4669 8.37918 21.5758 8.63064C21.828 9.21316 22.08 9.79518 22.5204 10.1428C23.1938 10.7632 23.9919 11.0982 24.8104 11.1038L24.9905 10.8806C25.0035 9.78752 24.7754 8.71341 24.3344 7.79185C24.097 7.30066 23.7192 6.98999 23.3299 6.66994C23.1072 6.48684 22.8807 6.30065 22.6747 6.07585C22.1087 5.45808 21.5555 4.87464 20.9379 4.35984C20.7201 4.17825 20.5071 3.99237 20.2943 3.80676Z" fill="#030922"/>
            </svg>
          </div>
          
          <h2 className="section-title">From our travellers</h2>
          
          <div className="decorative-arrow decorative-arrow-right">
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M22.2305 15.1932C21.5971 15.2788 20.9641 15.3642 20.3331 15.4608C18.9691 15.6696 17.5954 15.7876 16.2288 15.9052L16.227 15.9052C16.0217 15.9229 15.8165 15.9405 15.6116 15.9585C14.045 16.2693 12.46 16.3843 10.8772 16.3017C9.25383 16.1198 7.66121 15.6047 6.15569 14.7744V14.3797C7.66121 13.5494 9.25383 13.0342 10.8772 12.8524C12.46 12.7698 14.045 12.8847 15.6116 13.1956C17.1812 13.3329 18.7508 13.5045 20.3331 13.6932C21.9156 13.8821 23.4852 14.1051 25.0547 14.3797V14.7744C24.1161 14.9386 23.1729 15.0659 22.2305 15.1932ZM9.26856 3.03851C9.01928 3.62038 8.74535 4.17761 8.47237 4.73291C8.35088 4.98005 8.22955 5.22687 8.11069 5.47525C7.72474 6.28177 7.28732 7.05398 6.82418 7.80902C6.65563 8.08379 6.51605 8.38584 6.37877 8.68289C6.13882 9.20212 5.90592 9.70613 5.53766 10.0227C4.84174 10.5958 4.03982 10.8989 3.22193 10.8979L3.05469 10.6576C3.06278 9.56674 3.31353 8.50364 3.77514 7.6031C4.03574 7.01578 4.47208 6.67962 4.90881 6.34318C5.09732 6.19795 5.28592 6.05265 5.46047 5.88709C6.03941 5.33796 6.6312 4.806 7.23586 4.2912C7.84052 3.7764 8.45805 3.27875 9.11417 2.81543L9.26856 3.03851ZM7.81501 25.6574C8.20538 25.998 8.5948 26.3377 9.01116 26.6488L9.19128 26.4256C8.84391 25.5676 8.47081 24.7439 8.08486 23.9374C7.6989 23.131 7.28721 22.3415 6.87552 21.5693C6.75139 21.3365 6.64247 21.085 6.53358 20.8335C6.28134 20.251 6.02932 19.669 5.589 19.3214C4.91558 18.7009 4.11743 18.3659 3.29898 18.3604L3.11886 18.5836C3.10586 19.6767 3.33402 20.7507 3.77499 21.6724C4.0123 22.1635 4.39017 22.4742 4.77944 22.7943C5.00215 22.9773 5.22861 23.1635 5.43461 23.3884C6.00068 24.0061 6.55389 24.5896 7.17142 25.1044C7.38925 25.286 7.60227 25.4718 7.81501 25.6574Z" fill="#030922"/>
            </svg>
          </div>
        </div>

        <div className="testimonials-content">
          <div className="testimonials-list">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-stars">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <h3 className="testimonial-name">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-navigation">
          <button 
            className="nav-button nav-button-prev"
            onClick={prevSlide}
            aria-label="Previous testimonials"
          >
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4114 6.05957C15.7269 6.06027 15.9834 5.805 15.9841 5.48941C15.9847 5.17383 15.7295 4.91741 15.4139 4.91672L15.4114 6.05957ZM1.29522 5.05275C1.07157 5.27541 1.07076 5.63722 1.29342 5.86088L4.92189 9.50548C5.14455 9.72914 5.50636 9.72994 5.73002 9.50728C5.95366 9.28461 5.95447 8.92281 5.73181 8.69916L2.5065 5.45951L5.74615 2.2342C5.96981 2.01154 5.97061 1.64973 5.74795 1.42608C5.52529 1.20243 5.16348 1.20162 4.93982 1.42428L1.29522 5.05275ZM15.4139 4.91672L1.69965 4.88628L1.69711 6.02914L15.4114 6.05957L15.4139 4.91672Z" fill="#272B25"/>
            </svg>
          </button>
          
          <button 
            className="nav-button nav-button-next"
            onClick={nextSlide}
            aria-label="Next testimonials"
          >
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.69838 4.9012C1.38279 4.9012 1.12695 5.15704 1.12695 5.47263C1.12695 5.78821 1.38279 6.04405 1.69838 6.04405V4.9012ZM15.8168 5.87668C16.0399 5.65353 16.0399 5.29172 15.8168 5.06857L12.1802 1.43202C11.957 1.20886 11.5952 1.20886 11.3721 1.43202C11.1489 1.65517 11.1489 2.01698 11.3721 2.24013L14.6046 5.47263L11.3721 8.70512C11.1489 8.92827 11.1489 9.29008 11.3721 9.51323C11.5952 9.7364 11.957 9.7364 12.1802 9.51323L15.8168 5.87668ZM1.69838 6.04405H15.4127V4.9012H1.69838V6.04405Z" fill="#272B25"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
