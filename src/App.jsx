import spinXTLogo from "./assets/spinXTLogo.jpg";
import "./App.css";
import spinning from "./assets/img/spinning.jpg"
import product1 from "./assets/img/portfolio/product1.jpg"

function App() {
  return (
//     <div className="App">
//       <header className="App-header">
//         <div className="mainDiv">
//         <img src={spinXTLogo} className="logo react" alt="React logo"></img>
//         <h4 style={{color:"teal", marginTop:"50px"}}>Welcome to SpinXT world of Textile Products!!!</h4>
      
//         </div>   
//         <div style={{width:"100%", minHeight:"200px", backgroundImage:`url(${BackgroundImage})` , backgroundRepeat: 'no-repeat', backgroundSize:"cover", opacity:0.9 }}>
//         <img src={BackgroundImage}  alt="React logo"></img></div> 
//       </header>
//       <div className="mainDiv"></div>
//       <div style={{ position: "fixed",
//   bottom: 0,
//   width: "100%",
// backgroundColor:"teal",
//   minHeight: "30px"}}>
//       </div>
//     </div>

<html lang="en">
    <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Freelancer - Start Bootstrap Theme</title>
        <link rel="icon" type="image/x-icon" href="./assets/favicon.ico" />
        <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" ></script>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        <link href="css/styles.css" rel="stylesheet" />
    </head>
    <body id="page-top">
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
            <img src={spinXTLogo} style={{width:"40px"}} alt="React logo"></img><a className="navbar-brand" href="#page-top">SpinTX Technology Products</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#products">Products</a></li>
                        <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
       
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
              
            
                <h1 className="masthead-heading text-uppercase mb-0">Welcome to SpinTx Technologies</h1>
           
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
              
                <p className="masthead-subheading font-weight-light mb-0">Let's explore the products </p>
            </div>
        </header>
        <section className="page-section bg-about text-white mb-0"  id="about">
            <div className="container">
              
                <h2 className="page-section-heading text-center text-uppercase text-white">About Us</h2>
             
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
            
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p className="lead">SpinTx is a manufacturing company to produce high quality, more innovative and high efficient Textile machine parts such as Mesh Aprons, Jackky Pullies, etc. Our product designs are very unique and efficient.</p></div>
                    <div className="col-lg-4 me-auto"><p className="lead">We are new to  manufacturing world but there are lot of texttile experts were involved in designing these high quality innovative products which will help solving your realtime problems.</p></div>
                </div>
              
               
            </div>
        </section>
     
        <section className="page-section bg-products" id="products">
            <div className="container">
            
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">PRODUCTS</h2>
             
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
           
                <div className="row justify-content-center">
             
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={product1} alt="..." />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={product1} alt="..." />
                        </div>
                    </div>
               
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={product1} alt="..." />
                        </div>
                    </div>
               
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={product1} alt="..." />
                        </div>
                    </div>
                   
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={product1} alt="..." />
                        </div>
                    </div>
                   
                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={product1} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>         
        <section className="page-section bg-contact" id="contact">
            <div className="container">
              
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact US</h2>
             
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
               
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                    
                
                    </div>
                </div>
            </div>
        </section>
    
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
              
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            5 Main Street,
                            <br />
                            Bangalore, India
                        </p>
                    </div>
                 
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
                    </div>
            
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">Email Us</h4>
                        <p className="lead mb-0">
                         spinXT.tech@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
       
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy; spinXT 2025</small></div>
        </div>
      
        
      
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
   
        <script src="js/scripts.js"></script>
     
    </body>
</html>


  );
}

export default App;
