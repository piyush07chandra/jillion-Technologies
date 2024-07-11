

const Features = () => {
  return (
    <>
    {/* first */}
    <div>
        <h3 style={{textAlign:"center",marginTop:"4rem",marginBottom:'1rem'}}>Features</h3>
    
        <div className="first-feature">
          <div>
            <img className="feature-img" src="/kisspng-web-development-business-e-commerce-web-design-study-table-5b4769695dc8a8.7579437215314066973842.png"/>
          </div>
          <div className="feature-text">
            <h4>Card Title</h4>
            <p>Some quick example text to build on the card title and make up the  bulk of the cards content.</p>
          </div>
        </div>
    {/* second */}
    <div className="first-feature">
         <div className="feature-text">
            <h4>Card Title</h4>
            <p>Some quick example text to build on the card title and make up the  bulk of the cards content.</p>
         </div>
         <div>
            <img className="feature-img" src="/cfe7d2f56959aa56039f0c9aa04f3c09.png"/>
         </div>
    </div>
    {/* third */}
    <div className="first-feature">
          <div>
            <img className="feature-img" src="/transparent-education-classroom-course-teacher-school-5f475eebb27ab7.6083553115985128757311.png"/>
          </div>
          <div className="feature-text">
            <h4>Card Title</h4>
            <p>Some quick example text to build on the card title and make up the  bulk of the cards content.</p>
          </div>
        </div>
  </div>    
    </>
  )
}

export default Features