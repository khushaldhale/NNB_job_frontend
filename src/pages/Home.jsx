import { useState, useEffect } from "react";
import {
  BriefcaseIcon,
  Users2Icon,
  BuildingIcon,
  GraduationCapIcon,
  RocketIcon,
  TargetIcon,
  AwardIcon,
  PhoneCallIcon,
  MailIcon,
  MapPinIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
} from "lucide-react";

const Home = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center">
        <div className="container hero-content">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="hero-title mb-4 animate__animated animate__fadeInUp">
                Launch Your Career to New Heights
              </h1>
              <p className="hero-subtitle mb-5 animate__animated animate__fadeInUp animate__delay-1s">
                Join thousands of professionals who've found their dream careers
                through our cutting-edge job platform.
              </p>
              <div className="animate__animated animate__fadeInUp animate__delay-2s">
                <button className="btn btn-primary btn-lg me-3 px-4 py-3">
                  Explore Opportunities{" "}
                  <ArrowRightIcon className="ms-2" size={20} />
                </button>
                <button className="btn btn-outline-light btn-lg px-4 py-3">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Team Meeting"
                className="img-fluid rounded-4 floating"
                style={{ boxShadow: "var(--shadow-lg)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-3">
              <div className="stat-card text-center fade-up">
                <div className="gradient-bg rounded-circle d-inline-flex p-3 mb-4">
                  <BriefcaseIcon size={32} className="text-white" />
                </div>
                <h3 className="stat-number">10K+</h3>
                <p className="text-muted mb-0">Jobs Posted</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card text-center fade-up">
                <div className="gradient-bg rounded-circle d-inline-flex p-3 mb-4">
                  <Users2Icon size={32} className="text-white" />
                </div>
                <h3 className="stat-number">50K+</h3>
                <p className="text-muted mb-0">Happy Users</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card text-center fade-up">
                <div className="gradient-bg rounded-circle d-inline-flex p-3 mb-4">
                  <BuildingIcon size={32} className="text-white" />
                </div>
                <h3 className="stat-number">1K+</h3>
                <p className="text-muted mb-0">Companies</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-card text-center fade-up">
                <div className="gradient-bg rounded-circle d-inline-flex p-3 mb-4">
                  <AwardIcon size={32} className="text-white" />
                </div>
                <h3 className="stat-number">98%</h3>
                <p className="text-muted mb-0">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">
              Empowering Your Career Journey
            </h2>
          </div>
          <div className="row g-4">
            {[
              {
                icon: <RocketIcon size={24} className="text-white" />,
                title: "Career Launch",
                description:
                  "Kickstart your career with personalized guidance and opportunities",
              },
              {
                icon: <TargetIcon size={24} className="text-white" />,
                title: "Job Matching",
                description:
                  "AI-powered job matching to find your perfect role",
              },
              {
                icon: <GraduationCapIcon size={24} className="text-white" />,
                title: "Skill Development",
                description:
                  "Access courses and resources to enhance your skills",
              },
            ].map((service, index) => (
              <div key={index} className="col-md-4">
                <div className="service-card p-4 fade-up">
                  <div className="service-icon">{service.icon}</div>
                  <h4 className="mb-3">{service.title}</h4>
                  <p className="text-muted mb-0">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      {/*  we will have real and dynamic data  here  */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <h2 className="display-5 fw-bold">Top Jobs This Week</h2>
            </div>
            <div className="col-md-6 text-md-end">
              <button className="btn btn-primary px-4">
                View All Jobs <ArrowRightIcon size={16} className="ms-2" />
              </button>
            </div>
          </div>
          <div className="row g-4">
            {[1, 2, 3].map((job) => (
              <div key={job} className="col-md-4">
                <div className="card border-0 shadow-sm fade-up h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-4">
                      <div className="gradient-bg rounded p-3 me-3">
                        <BuildingIcon size={24} className="text-white" />
                      </div>
                      <div>
                        <h5 className="mb-1">Senior Developer</h5>
                        <p className="text-muted mb-0">TechCorp Inc.</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="badge bg-primary me-2">Full-time</span>
                      <span className="badge bg-success">Remote</span>
                    </div>
                    <button className="btn btn-outline-primary w-100">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-5 text-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4">
                Let's Start Your Journey
              </h2>
              <p className="lead mb-5">
                Ready to take the next step in your career? Get in touch with
                our expert team.
              </p>
              <div className="d-flex align-items-center mb-4">
                <div className="gradient-bg rounded-circle p-3 me-4">
                  <PhoneCallIcon size={24} className="text-white" />
                </div>
                <div>
                  <p className="mb-0 text-white-50">Call Us</p>
                  <h5 className="mb-0">1234567890</h5>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="gradient-bg rounded-circle p-3 me-4">
                  <MailIcon size={24} className="text-white" />
                </div>
                <div>
                  <p className="mb-0 text-white-50">Email Us</p>
                  <h5 className="mb-0">contact@jobhub.com</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form p-4 p-md-5">
                <form>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control contact-input"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control contact-input"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control contact-input"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control contact-input"
                        rows="4"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-3"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-5 text-white">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <h3 className="mb-4">JobHub</h3>
              <p className="text-white-50 mb-4">
                Your trusted partner in career development, connecting
                professionals with opportunities worldwide.
              </p>
              <p>Our Social Networks</p>
              <div className="d-flex gap-3">
                <a href="#" className="btn btn-outline-light ">
                  Facebook
                </a>
                <a href="#" className="btn btn-outline-light ">
                  Twitter
                </a>
                <a href="#" className="btn btn-outline-light ">
                  Linkdein
                </a>
              </div>
            </div>
            <div className="col-lg-2">
              <h5 className="mb-4">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a href="#" className="footer-link text-decoration-none">
                    About Us
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="footer-link text-decoration-none">
                    Find Jobs
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="footer-link text-decoration-none">
                    Post a Job
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="footer-link text-decoration-none">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h5 className="mb-4">Resources</h5>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a href="#" className="footer-link text-decoration-none">
                    Blog
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="footer-link text-decoration-none">
                    Career Tips
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="footer-link text-decoration-none">
                    Interview Guide
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="footer-link text-decoration-none">
                    Resume Tips
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className="mb-4">Newsletter</h5>
              <p className="text-white-50 mb-4">
                Subscribe to our newsletter for the latest job updates and
                career tips.
              </p>
              <form className="mb-3">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control contact-input"
                    placeholder="Your email"
                  />
                  <button className="btn btn-primary px-4">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <hr className="my-5 border-white opacity-10" />
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0 text-white-50">
                © 2024 JobHub. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a href="#" className="footer-link text-decoration-none me-4">
                Privacy Policy
              </a>
              <a href="#" className="footer-link text-decoration-none">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
