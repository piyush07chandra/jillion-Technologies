

const Products = () => {
  return (
    <>
      <h4 style={{textAlign:'center',marginBottom:'1rem',marginTop:'3rem'}}>Products</h4>
        <div className="cards">
          
            <div className="card" style={{width:'20rem'}}>
  <img src="/study1.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
  </div>
</div>
            <div className="card" style={{width:'20rem'}}>
  <img src="/study2.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
  </div>
</div>
            <div className="card" style={{width:'20rem'}}>
  <img src="/study3.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
  </div>
</div>
        </div>
    </>
  )
}

export default Products