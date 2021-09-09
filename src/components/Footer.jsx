import { Row, Col, Container, DropdownButton, Dropdown } from "react-bootstrap";
import "../style/Footer.css";
const Footer = () => {
  return (
    <footer className="container text-dark text-start ">
      <Row
        style={{
          margin: "0px",
        }}
      >
        <ul className="footer-ul">
          <li>
            <img
              style={{
                textAlign: "left",
                width: "100px",
                paddingLeft: "0px",
                margin: "0px",
              }}
              src="https://loghi-famosi.com/wp-content/uploads/2020/04/Linkedin-Logo.png"
              alt=""
            />
          </li>
        </ul>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={2} lg={2} xl={2} className="col-2">
          <ul className="footer-ul">
            <li>About</li>
            <li>Community Guidelines</li>
            <li>Privacy & Terms</li>
            <li>Sales Solutions</li>
            <li>Safety Center</li>
            <hr />
            <p>LinkedIn Corporation 2021</p>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={2} lg={2} xl={2} className="col-2">
          <ul className="footer-ul">
            <li>Accessibility</li>
            <li>Careers</li>
            <li>Add Choices</li>
            <li>Mobile</li>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={2} lg={2} xl={2} className="col-2">
          <ul className="footer-ul">
            <li>Talent Solutions</li>
            <li>Marketing Solutions</li>
            <li>Advertising</li>
            <li>Small Bussiness</li>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={3} lg={3} xl={3} className="col-3">
          <ul style={{ listStyleType: "none" }}>
            <li className="pb-3 ">
              <i className="bi bi-question-circle-fill pr-2"></i>Questions ?
              <span>
                <li className="small">Visit Our Help Center</li>{" "}
              </span>
            </li>
            <li>
              <i className="bi bi-gear-fill pr-2"></i>
              Manage your Account and Privacy
              <span>
                <li className="small">Go to Your Settings</li>
              </span>
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={3} lg={3} xl={3} className="col-3 w-100">
          <span className="small">Select Language</span>
          <DropdownButton
            id="dropdown-basic"
            size="lg"
            variant="#cfcfcf"
            title="English(Uk)"
          >
            <Dropdown.Item href="#/action-1">italian</Dropdown.Item>
            <Dropdown.Item href="#/action-2">spanish</Dropdown.Item>
            <Dropdown.Item href="#/action-3">french</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
    </footer>
  );
};
export default Footer;
