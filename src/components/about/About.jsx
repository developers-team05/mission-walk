
// const About = () => {
//   return (
//     <div>
//     {/* <!-- Spinner Start --> */}
//     <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
//         <div className="spinner-grow text-primary m-1" role="status">
//             <span className="sr-only">Loading...</span>
//         </div>
//         <div className="spinner-grow text-dark m-1" role="status">
//             <span className="sr-only">Loading...</span>
//         </div>
//         <div className="spinner-grow text-secondary m-1" role="status">
//             <span className="sr-only">Loading...</span>
//         </div>
//     </div>
//     {/* <!-- Spinner End --> */}


//     {/* <!-- Topbar Start --> */}
//     <div className="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
//         <div className="row gx-0">
//             <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
//                 <div className="d-inline-flex align-items-center">
//                     <small className="py-2"><i className="far fa-clock text-primary me-2"></i>Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed </small>
//                 </div>
//             </div>
//             <div className="col-md-6 text-center text-lg-end">
//                 <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
//                     <div className="me-3 pe-3 border-end py-2">
//                         <p className="m-0"><i className="fa fa-envelope-open me-2"></i>info@example.com</p>
//                     </div>
//                     <div className="py-2">
//                         <p className="m-0"><i className="fa fa-phone-alt me-2"></i>+012 345 6789</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     {/* <!-- Topbar End --> */}


//     {/* <!-- Navbar Start --> */}
//     <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
//         <a href="index.html" className="navbar-brand p-0">
//             <h1 className="m-0 text-primary"><i className="fa fa-tooth me-2"></i>DentCare</h1>
//         </a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarCollapse">
//             <div className="navbar-nav ms-auto py-0">
//                 <a href="index.html" className="nav-item nav-link">Home</a>
//                 <a href="about.html" className="nav-item nav-link active">About</a>
//                 <a href="service.html" className="nav-item nav-link">Service</a>
//                 <div className="nav-item dropdown">
//                     <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
//                     <div className="dropdown-menu m-0">
//                         <a href="price.html" className="dropdown-item">Pricing Plan</a>
//                         <a href="team.html" className="dropdown-item">Our Dentist</a>
//                         <a href="testimonial.html" className="dropdown-item">Testimonial</a>
//                         <a href="appointment.html" className="dropdown-item">Appointment</a>
//                     </div>
//                 </div>
//                 <a href="contact.html" className="nav-item nav-link">Contact</a>
//             </div>
//             <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
//             <a href="appointment.html" className="btn btn-primary py-2 px-4 ms-3">Appointment</a>
//         </div>
//     </nav>
//     {/* <!-- Navbar End --> */}


//     {/* <!-- Full Screen Search Start --> */}
//     <div className="modal fade" id="searchModal" tabIndex="-1">
//         <div className="modal-dialog modal-fullscreen">
//             <div className="modal-content" style="background: rgba(9, 30, 62, .7);">
//                 <div className="modal-header border-0">
//                     <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div className="modal-body d-flex align-items-center justify-content-center">
//                     <div className="input-group" style="max-width: 600px;">
//                         <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword"/>
//                         <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     {/* <!-- Full Screen Search End --> */}


//     {/* <!-- Hero Start --> */}
//     <div className="container-fluid bg-primary py-5 hero-header mb-5">
//         <div className="row py-3">
//             <div className="col-12 text-center">
//                 <h1 className="display-3 text-white animated zoomIn">About Us</h1>
//                 <a href="" className="h4 text-white">Home</a>
//                 <i className="far fa-circle text-white px-2"></i>
//                 <a href="" className="h4 text-white">About</a>
//             </div>
//         </div>
//     </div>
//     {/* <!-- Hero End --> */}


//     {/* <!-- About Start --> */}
//     <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
//         <div className="container">
//             <div className="row g-5">
//                 <div className="col-lg-7">
//                     <div className="section-title mb-4">
//                         <h5 className="position-relative d-inline-block text-primary text-uppercase">About Us</h5>
//                         <h1 className="display-5 mb-0">The Worlds Best Dental Clinic That You Can Trust</h1>
//                     </div>
//                     <h4 className="text-body fst-italic mb-4">Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem sit clita duo justo magna dolore</h4>
//                     <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
//                     <div className="row g-3">
//                         <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
//                             <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Award Winning</h5>
//                             <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Professional Staff</h5>
//                         </div>
//                         <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
//                             <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>24/7 Opened</h5>
//                             <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Fair Prices</h5>
//                         </div>
//                     </div>
//                     <a href="appointment.html" className="btn btn-primary py-3 px-5 mt-4 wow zoomIn" data-wow-delay="0.6s">Make Appointment</a>
//                 </div>
//                 <div className="col-lg-5" style="min-height: 500px;">
//                     <div className="position-relative h-100">
//                         <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/about.jpg" style="object-fit: cover;"/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     {/* <!-- About End --> */}
    

//     {/* <!-- Newsletter Start --> */}
//     <div className="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style="z-index: 1;">
//         <div className="container">
//             <div className="bg-primary p-5">
//                 <form className="mx-auto" style="max-width: 600px;">
//                     <div className="input-group">
//                         <input type="text" className="form-control border-white p-3" placeholder="Your Email"/>
//                         <button className="btn btn-dark px-4">Sign Up</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
//     {/* <!-- Newsletter End --> */}
    

//     {/* <!-- Footer Start --> */}
//     <div className="container-fluid bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.3s" style="margin-top: -75px;">
//         <div className="container pt-5">
//             <div className="row g-5 pt-4">
//                 <div className="col-lg-3 col-md-6">
//                     <h3 className="text-white mb-4">Quick Links</h3>
//                     <div className="d-flex flex-column justify-content-start">
//                         <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
//                         <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
//                         <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
//                         <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
//                         <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
//                     </div>
//                 </div>
//                 <div className="col-lg-3 col-md-6">
//                     <h3 className="text-white mb-4">Popular Links</h3>
//                     <div className="d-flex flex-column justify-content-start">
//                         <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
//                         <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
//                         <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
//                         <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
//                         <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
//                     </div>
//                 </div>
//                 <div className="col-lg-3 col-md-6">
//                     <h3 className="text-white mb-4">Get In Touch</h3>
//                     <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>123 Street, New York, USA</p>
//                     <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2"></i>info@example.com</p>
//                     <p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i>+012 345 67890</p>
//                 </div>
//                 <div className="col-lg-3 col-md-6">
//                     <h3 className="text-white mb-4">Follow Us</h3>
//                     <div className="d-flex">
//                         <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
//                         <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
//                         <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
//                         <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#"><i className="fab fa-instagram fw-normal"></i></a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="container-fluid text-light py-4" style="background: #051225;">
//         <div className="container">
//             <div className="row g-0">
//                 <div className="col-md-6 text-center text-md-start">
//                     <p className="mb-md-0">&copy; <a className="text-white border-bottom" href="#">Your Site Name</a>. All Rights Reserved.</p>
//                 </div>
//                 <div className="col-md-6 text-center text-md-end">
//                     <p className="mb-0">Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a>
//                     <br />
//                         Distributed by <a className="text-white border-bottom" href="https://themewagon.com">ThemeWagon</a>          
                    
//                     </p>
//                 </div>
//             </div>
//         </div>
//     </div>
//     {/* <!-- Footer End --> */}


//     <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i className="bi bi-arrow-up"></i></a>




// </div>

//   )
// }

// export default About