

const ContactUs = () => {
  return (
    <>
    <div className="contact-us">
<div >
    <img className="contact-img" style={{width:'300px'}} src="/kisspng-smartphone-message-telephone-call-illustration-boy-phone-smile-5a9afa905ed6a1.8221413015201061283885.png"/>
</div>
   
        <form className="formm">
 <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="name" className="form-control" id="name" />
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" />
  </div>
  <div className="mb-3">
  <label  className="form-label">Example textarea</label>
  <textarea className="form-control" ></textarea>
 
</div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


</div>
    </>
  )
}

export default ContactUs