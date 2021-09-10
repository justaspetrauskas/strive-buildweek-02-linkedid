import "../style/SideFeed.css"
import { Card, Dropdown } from 'react-bootstrap'

const SideFeed = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col" md={3}>
                    <Card
                        className="card"
                        style={{ width: '22rem' }}>
                        <h5><bold>Linkedin News</bold></h5>
                        <Card.Body>
                            <div className="news-feed">
                                <Card.Link href="#"><ul className="news-lists">
                                    <li>When interviewers call your bluff<br />
                                        <span className="details-news">1d ago <span className="dot">336 readers</span> </span>
                                    </li>
                                    <li>Bitcoins's rocky El Salvador debut<br />
                                        <span className="details-news">19h ago <span className="dot">4,866 readers</span></span>
                                    </li>
                                    <li>Overcooked?Byron faces staff anger<br />
                                        <span className="details-news">17 ago <span className="dot">92,866 readers</span></span>
                                    </li>
                                    <li>PM announces National Insurance hike<br />
                                        <span className="details-news">2d ago <span className="dot">14,834 readers</span></span>
                                    </li>
                                </ul></Card.Link>
                                <Dropdown className="dropdown">
                                    <Dropdown.Toggle variant="white">
                                        Show more
                                    </Dropdown.Toggle>
                                </Dropdown>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '22rem' }}>
                        <h5><bold>Today's top courses</bold></h5>
                        <Card.Body>
                            <div className="courses">
                                <Card.Link href="#"><ol className="course-lists">
                                    <li>What is Graphic Design<br />
                                        <span className="details-course">Sean Adams </span>
                                    </li>
                                    <li>Customer Service Foundations<br />
                                        <span className="details-course">Jeff Toister</span>
                                    </li>
                                    <li>Uncovering Your Authentic Self at...<br />
                                        <span className="details-course">Kenji Yoshino</span>
                                    </li>
                                    <li>PM announces National Insurance hike<br />
                                        <span className="details-course">2d ago <span className="dot">14,834 readers</span></span>
                                    </li>
                                </ol></Card.Link>
                                <Dropdown className="dropdown-course">
                                    <Dropdown.Toggle variant="white">
                                        Show more on Linkedin Learning
                                    </Dropdown.Toggle>
                                </Dropdown>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="footer">
                        <span className="footer-info">About   Accessibility   Help Center</span>
                        <br />
                        <span className="footer-info">Privacy & Terms<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                        </svg>    Ad Choices</span><br />
                        <span className="footer-info">Advertising   Business Services<svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                        </svg></span><br />
                        <span className="footer-info">Get the Linkedin app    More</span>
                        <span className="copyright">
                            <img
                                style={{
                                    textAlign: "left",
                                    width: "60px",
                                    paddingLeft: "0px",
                                    margin: "0px",
                                }}
                                src="https://loghi-famosi.com/wp-content/uploads/2020/04/Linkedin-Logo.png"
                                alt=""
                            /> Linkedin Corporation @2021

                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SideFeed