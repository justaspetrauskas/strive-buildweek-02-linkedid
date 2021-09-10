import { ImPencil } from "react-icons/im"
import { FiPlus } from "react-icons/fi"
import { GiHamburgerMenu } from "react-icons/gi"
import "../style/Education.css";




const Education = () => {
  
  return (
    <div id="experience-education-div" className="border p-4 mb-3">
      
     
      <header>
          
        <h3 className="edu">Education</h3>
        <div className="change-icons text-muted d-flex justify-content-center align-items-center">
          <FiPlus />
        </div>
      </header>
      <ul>
        <li>
          <div className="Ed-largest my-5">
            <div className="allContainer">
              <div className="infoContainer">
                <div className="image-div ">
                  <img
                    className="Ed-image mb-5"
                    src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1639008000&v=beta&t=38emh8r8X3fw7Ah3ky91KyaVJT_6wSkxl1MqF2QRf5E"
                    alt=""
                  />
                </div>
                <div className="d-flex underline">
                  <a href="/" className="Ed-info">
                  <div>  <h4><b>Strive School </b> </h4><p>Student FS Developer 2021-2022</p> </div>
                  </a>
                </div>
              </div>
              <div className="icons text-muted">
                <div className="change-icons text-muted d-flex justify-content-center align-items-center">
                  <ImPencil className="Ed-pencil" />
                </div>
                <GiHamburgerMenu className="Ed-burger" />
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="Ed-largest">
            <div className="allContainer">
              <div className="infoContainer">
                <div className="image-div">
                  <img
                    className="Ed-image"
                    src="https://agoodsignabq.com/wp-content/uploads/2017/09/il_fullxfull.1329799157_c9l7.jpg"
                    alt=""
                  />
                </div>
                <div className="d-flex underline">
                  <a href="/" className="Ed-info">
                   <div>  <h4><b>The Ministry of Silly Walks</b></h4><p>Unexpected and chaotic activities 2009-2020</p> </div>
                    
                    
                  </a>
                </div>
              </div>
              <div className="icons text-muted">
                <div className="change-icons text-muted d-flex justify-content-center align-items-center">
                  <ImPencil className="Ed-pencil" />
                </div>
                <GiHamburgerMenu className="Ed-burger" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Education
