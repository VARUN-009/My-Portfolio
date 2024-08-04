import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Questions, thoughts, or just want to say hello? </p>
        {/* <p>Contact me now for a Free consultation.</p> */}
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:varunpunia009@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:varunpunia009@gmail.com">varunpunia009@gmail.com</a>
        </div>
        <div>
        <a href="tel:+918920392400"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+918920392400">(+91) 9971672372</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}