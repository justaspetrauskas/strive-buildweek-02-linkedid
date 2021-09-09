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
                </div>
            </div>
        </div>

    )
}

export default SideFeed