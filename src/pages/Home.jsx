import { useEffect, useRef } from "react";
import { anticipate, motion } from "framer-motion";
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
  ArrowRightIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../redux/slices/jobSlice";
import { toast } from "react-toastify";

const Home = () => {
  const jobs = useSelector((state) => {
    return state.job.jobs;
  });
  const navigate = useNavigate();
  // refs are created for smooth scroll and bookmark concept
  const contactRef = useRef();
  const jobRef = useRef();
  const dispatch = useDispatch();

  //  we are not using the job Presentation component , as we want different UI here
  //  so we are  creating our own for the job section

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getAllJobs()).then((action) => {
        if (action.payload.success) {
          toast.success(action.payload.message);
        } else {
          // no need to show errro as it  is homepage so it does not look good
          //  No jobs are created will be shown there , code is written in UI component
          // toast.error(action.payload.message);
        }
      });
    };
    fetchData();
  }, []);
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center">
        <div className="container hero-content">
          <div className="row align-items-center">
            <motion.div
              className="col-lg-6 mb-5 mb-lg-0"
              initial={{ opacity: 0, x: -250 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: anticipate }}
            >
              <motion.h1
                className="hero-title mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Launch Your Career to New Heights
              </motion.h1>
              <motion.p
                className="hero-subtitle mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Join thousands of professionals who've found their dream careers
                through our cutting-edge job platform.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.button
                  className="btn btn-primary btn-lg me-3 px-4 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigate("#jobs");
                    jobRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore Opportunities{" "}
                  <ArrowRightIcon className="ms-2" size={20} />
                </motion.button>
                <motion.button
                  className="btn btn-outline-light btn-lg px-4 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigate("#contact");
                    contactRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact Us
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              className="col-lg-6 d-none d-lg-block"
              initial={{ y: -30 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Team Meeting"
                className="img-fluid rounded-4"
                style={{ boxShadow: "var(--shadow-lg)" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* modified stats */}
      <motion.section
        className="stats-section py-5"
        initial={{
          opacity: 0,
          scaleY: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scaleY: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <div className="container py-5">
          <div className="row g-4">
            {[
              {
                icon: <BriefcaseIcon size={32} className="text-white" />,
                number: "10K+",
                text: "Jobs Posted",
              },
              {
                icon: <Users2Icon size={32} className="text-white" />,
                number: "50K+",
                text: "Happy Users",
              },
              {
                icon: <BuildingIcon size={32} className="text-white" />,
                number: "1K+",
                text: "Companies",
              },
              {
                icon: <AwardIcon size={32} className="text-white" />,
                number: "98%",
                text: "Success Rate",
              },
            ].map((stat, index) => (
              <motion.div
                className="col-md-3"
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2, // Stagger effect
                  ease: "easeOut",
                }}
              >
                <motion.div
                  className="stat-card text-center"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <motion.div
                    className="gradient-bg rounded-circle d-inline-flex p-3 mb-4"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 120,
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.h3
                    className="stat-number"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-muted mb-0">{stat.text}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-5"
        initial={{ opacity: 0, scaleY: 0.8 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="container py-5">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="display-5 fw-bold mb-4">
              Empowering Your Career Journey
            </h2>
          </motion.div>
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
              <motion.div
                key={index}
                className="col-md-4"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  className="service-card p-4"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="service-icon"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 120,
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <h4 className="mb-3">{service.title}</h4>
                  <p className="text-muted mb-0">{service.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Jobs Section */}
      <motion.section
        ref={jobRef}
        className="py-5 bg-light"
        initial={{ opacity: 0, scaleY: 0.8 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="container py-5">
          <motion.div
            className="row align-items-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="col-md-6">
              <h2 className="display-5 fw-bold">Top Jobs This Week</h2>
            </div>
            <div className="col-md-6 text-md-end">
              <motion.button
                className="btn btn-primary px-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate("/dashboard/jobs");
                }}
              >
                View All Jobs <ArrowRightIcon size={16} className="ms-2" />
              </motion.button>
            </div>
          </motion.div>
          <div className="row g-4">
            {jobs.length > 0 ? (
              jobs.map((job, index) => (
                <motion.div
                  key={job}
                  className="col-md-4"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                >
                  <motion.div
                    className="card border-0 shadow-sm h-100"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-4">
                        <motion.div
                          className="gradient-bg rounded p-3 me-3"
                          initial={{ scale: 0.5 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.2 + 0.3,
                            type: "spring",
                            stiffness: 120,
                          }}
                        >
                          <BuildingIcon size={24} className="text-white" />
                        </motion.div>
                        <div>
                          <h5 className="mb-1">{job.company_domain}</h5>
                          <p className="text-muted mb-0">{job.company_name}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="badge bg-primary me-2">
                          {job.job_type}
                        </span>
                        <span className="badge bg-success">{job.job_mode}</span>
                      </div>
                      <motion.button
                        className="btn btn-outline-primary w-100"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          //  move it to authenticated job section
                          // authentication applied at frontend not at backend for
                          // /dashboard/jobs, to view  jobs and do manipulation over that

                          navigate("/dashboard/jobs");
                        }}
                      >
                        Apply Now
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              ))
            ) : (
              <p>No job is created yet </p>
            )}
          </div>

          {/* original */}
          {/* <div className="row g-4">
            {[1, 2, 3].map((job, index) => (
              <motion.div
                key={job}
                className="col-md-4"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  className="card border-0 shadow-sm h-100"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-4">
                      <motion.div
                        className="gradient-bg rounded p-3 me-3"
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2 + 0.3,
                          type: "spring",
                          stiffness: 120,
                        }}
                      >
                        <BuildingIcon size={24} className="text-white" />
                      </motion.div>
                      <div>
                        <h5 className="mb-1">Senior Developer</h5>
                        <p className="text-muted mb-0">TechCorp Inc.</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="badge bg-primary me-2">Full-time</span>
                      <span className="badge bg-success">Remote</span>
                    </div>
                    <motion.button
                      className="btn btn-outline-primary w-100"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </motion.section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="contact-section py-5 text-white"
      >
        <div className="container py-5">
          <div className="row">
            {/* contact contents  */}

            <motion.div
              className="col-lg-6 mb-5 mb-lg-0"
              initial={{ opacity: 0, x: -250 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
              }}
            >
              <h2 className="display-5 fw-bold mb-4">
                Let's Start Your Journey
              </h2>
              <p className="lead mb-5">
                Ready to take the next step in your career? Get in touch with
                our expert team.
              </p>
              <motion.div
                className="d-flex align-items-center mb-4"
                whileHover={{ x: 10 }}
              >
                <div className="gradient-bg rounded-circle p-3 me-4">
                  <PhoneCallIcon size={24} className="text-white" />
                </div>
                <div>
                  <p className="mb-0 text-white-50">Call Us</p>
                  <h5 className="mb-0">1234567890</h5>
                </div>
              </motion.div>

              {/* form */}
              <motion.div
                className="d-flex align-items-center"
                whileHover={{ x: 10 }}
              >
                <div className="gradient-bg rounded-circle p-3 me-4">
                  <MailIcon size={24} className="text-white" />
                </div>
                <div>
                  <p className="mb-0 text-white-50">Email Us</p>
                  <h5 className="mb-0">contact@jobhub.com</h5>
                </div>
              </motion.div>
            </motion.div>

            {/* contact form */}
            <div className="col-lg-6">
              <motion.div
                className="contact-form p-4 p-md-5"
                initial={{ opacity: 0, x: 250 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                }}
              >
                <form>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <motion.input
                        type="text"
                        className="form-control contact-input"
                        placeholder="Your Name"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                    <div className="col-md-6">
                      <motion.input
                        type="email"
                        className="form-control contact-input"
                        placeholder="Your Email"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                    <div className="col-12">
                      <motion.input
                        type="text"
                        className="form-control contact-input"
                        placeholder="Subject"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                    <div className="col-12">
                      <motion.textarea
                        className="form-control contact-input"
                        rows={4}
                        placeholder="Your Message"
                        whileFocus={{ scale: 1.02 }}
                      ></motion.textarea>
                    </div>
                    <div className="col-12">
                      <motion.button
                        type="submit"
                        className="btn btn-primary w-100 py-3"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send Message
                      </motion.button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="footer py-5 text-white"
        initial={{ opacity: 0, x: 250 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="container">
          <motion.div
            className="row g-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div
              className="col-lg-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="mb-4">JobHub</h3>
              <p className="text-white-50 mb-4">
                Your trusted partner in career development, connecting
                professionals with opportunities worldwide.
              </p>
              <p>Our Social Networks</p>
              <div className="d-flex gap-3">
                {["Facebook", "Twitter", "LinkedIn"].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="btn btn-outline-light"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {[
              {
                title: "Quick Links",
                links: ["About Us", "Find Jobs", "Post a Job", "Contact Us"],
              },
              {
                title: "Resources",
                links: [
                  "Blog",
                  "Career Tips",
                  "Interview Guide",
                  "Resume Tips",
                ],
              },
            ].map((section, index) => (
              <motion.div
                className="col-lg-2"
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <h5 className="mb-4">{section.title}</h5>
                <ul className="list-unstyled">
                  {section.links.map((link) => (
                    <motion.li
                      key={link}
                      className="mb-3"
                      whileHover={{ x: 5 }}
                    >
                      <a href="#" className="footer-link text-decoration-none">
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div
              className="col-lg-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h5 className="mb-4">Newsletter</h5>
              <p className="text-white-50 mb-4">
                Subscribe to our newsletter for the latest job updates and
                career tips.
              </p>
              <form className="mb-3">
                <div className="input-group">
                  <motion.input
                    type="email"
                    className="form-control contact-input"
                    placeholder="Your email"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.button
                    className="btn btn-primary px-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>

          <hr className="my-5 border-white opacity-10" />

          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0 text-white-50">
                © 2024 JobHub. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              {["Privacy Policy", "Terms of Service"].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="footer-link text-decoration-none me-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;
