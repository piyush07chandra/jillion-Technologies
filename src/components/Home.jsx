
const Home = () => {
  return (
    <>
        <div className="home">
            <div>
            <h2 style={{color:'blueviolet'}}>WE MAKE YOUR IDEAS</h2>
            <h2 style={{color:'deeppink'}}>INTO REALITY</h2>
            <p>Some quick example text to build on the card title and make up the bulk of the cards <br/>
            Content. Some quick example text to build on the card title and make up the bulk of <br/>
            the cards Content </p>
            <section style={{display:'flex'}}>
                <button style={{backgroundColor:'blueviolet',color:'white',marginRight:'1rem',border:'1px solid blueviolet',padding:'4px',width:''}}>Get Started</button>
                <button style={{border:'1px solid blueviolet',color:'blueviolet',padding:'4px'}}>Contact Us</button>
            </section>
            </div>
            <div>
                <img className="first-image" src="/first.png"/>
            </div>

        </div>
    </>
  )
}

export default Home