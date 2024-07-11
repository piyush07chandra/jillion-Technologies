
const Testimonials = () => {
  return (
 <>
 <h4 style={{textAlign:'center',marginBottom:'1rem',marginTop:'3rem'}}>TESTIMONIALS</h4>
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="person-img" src="/paul1 (1).png"  />
      <p style={{textAlign:'center'}}>Phasellus vitae suscript justo. Mauris pharetra feugait ante id lacinia.Etiam faucibus mauris id tempor <br/>
      egestas. Duis luctus turpis at accumsan tuncidunt. Phasellus rirus rirus, volutpat vel tellus ac, tincidunt fringilla <br/>
      massa.Etiam hendrerit dolor eget rutrum</p>
      <span style={{color:'green'}}>PAULA WILSON,</span><span> Media Analyst</span>
    </div>
    <div className="carousel-item ">
      <img className="person-img" src="/paul1 (2).png"  />
      <p style={{textAlign:'center'}}>Phasellus vitae suscript justo. Mauris pharetra feugait ante id lacinia.Etiam faucibus mauris id tempor <br/>
      egestas. Duis luctus turpis at accumsan tuncidunt. Phasellus rirus rirus, volutpat vel tellus ac, tincidunt fringilla <br/>
      massa.Etiam hendrerit dolor eget rutrum</p> 
      <span style={{color:'green'}}>PAULA WILSON,</span><span> Media Analyst</span>
       </div>
    <div className="carousel-item ">
      <img className="person-img" src="/paul1 (3).png"  />
      <p style={{textAlign:'center'}}>Phasellus vitae suscript justo. Mauris pharetra feugait ante id lacinia.Etiam faucibus mauris id tempor <br/>
      egestas. Duis luctus turpis at accumsan tuncidunt. Phasellus rirus rirus, volutpat vel tellus ac, tincidunt fringilla <br/>
      massa.Etiam hendrerit dolor eget rutrum</p> 
      <span style={{color:'green'}}>PAULA WILSON,</span><span> Media Analyst</span>
       </div>

    </div>
  <button style={{marginTop:'-7rem'}} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button style={{marginTop:'-7rem'}} className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  <div className="carousel-indicators" style={{ bottom: '10px' }}>
                <button
                    style={{ backgroundColor: 'black' }}
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    style={{ backgroundColor: 'black' }}
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    style={{ backgroundColor: 'black' }}
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
 
</div>

 </>
  )
}

export default Testimonials