
import {Info, Titles} from "./footer.styled"
const Footer = () => (
    <div className="footer">
      <Info>
       <div className ="About us">
       <Titles>About us</Titles>
           <ul>
             <li>How we started</li>
            <li>Our policy</li>
           <li>Careers</li>
           </ul>
        </div>
      <div className ="Legal">
      <Titles>Legal Stuff</Titles>
          <ul>
          <li>Terms and conditions</li>
          <li>terms of use</li>
          <li>privacy statement</li>
          </ul>
      </div>
      <div className ="locations">
      <Titles>Locations</Titles>
      <ul>
          <li>United Kingdom</li>
          <li>United States</li>
          <li>Australia</li>
          </ul>
      </div>
        
      </Info>
    </div>
  );
  
  export default Footer;