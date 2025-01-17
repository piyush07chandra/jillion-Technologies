

const Navbar = () => {
  return (
    <>
        <nav style={{marginBottom:'3rem',marginTop:'1rem'}} className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" style={{color:'blueviolet'}} href="#">Jillion Technologies</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul  className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" style={{color:"blueviolet"}} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:"blueviolet"}} href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:"blueviolet"}} href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:"blueviolet"}} href="#">Testimonials</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:"blueviolet"}} href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar