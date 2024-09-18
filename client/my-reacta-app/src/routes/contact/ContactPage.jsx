import './contactPage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebook, faWhatsapp,  faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare,faCoffee} from '@fortawesome/fontawesome-free-solid'



function ContactPage(){
  return (
    <div className='contactPage'>
        <div className="wrapper">
            <div className="textContainer">
                <h2>Contact Me</h2>
                <div className="icon">
                
                <a><FontAwesomeIcon icon={faTwitter} /></a>
                <a><FontAwesomeIcon icon={faFacebook} /></a>
                <a><FontAwesomeIcon icon={faLinkedin} /></a>
                <a> <FontAwesomeIcon icon={faWhatsapp} /></a>
                
                
               
                
                
                </div>
                
            </div>
            <div className="imgContainer">
               
            </div>

            
        </div>
    </div>
  )
}

export default ContactPage