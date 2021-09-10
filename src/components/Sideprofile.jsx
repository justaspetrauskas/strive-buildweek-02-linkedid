import { Component } from "react";
import { Card, ListGroup, Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import "../style/Sideprofile.css"

class Sideprofile extends Component {

    state = {
        profiles: []
    }
    fetchData = async () => {
        const url = "https://striveschool-api.herokuapp.com/api/profile/ ";

        try {
            let response = await fetch(url,
                {
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2NjMxYTdiZTZjMTAwMTVmOWRiZDUiLCJpYXQiOjE2MzA5NTQyNjYsImV4cCI6MTYzMjE2Mzg2Nn0.HogYsweMAQUpppsrUiwowbIdCFQ7dOSSLbEGyxsl5IQ",
                    },
                });
            if (response.ok) {
                let profiles = await response.json();
                this.setState({ profiles })
                console.log(this.state.profiles)

            } else {
                console.log("There is an error!");
            }
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col md-3">
                        <Card
                            className="settings-card"
                            style={{ width: '20rem' }} >
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    Edit public profile & URL
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                    </svg>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Add profile in another language
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                    </svg>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        {
                            <div className="profiles"
                            >
                                <Card style={{ width: '20rem' }}>
                                    <h5><bold>People also viewed</bold></h5>
                                    {this.state.profiles.slice(23, 29).map(profile => (
                                        <> {// flexbox
                                            // you need to make this flex and then use the flex properties to do the alignment
                                            // d-flex, justify-content, align-items
                                            // you might also need to put them inside of another box (div) to do the aligment
                                        }

                                            <Card.Body className="profile-card-body ">
                                                <div className="d-flex p-3">
                                                    <Card.Img variant="bottom" src={profile.image} className="profile-img" />
                                                    <a href="">
                                                        <Card.Title className="profile-info">
                                                            <small><bold>{profile.name} {profile.surname}<br />

                                                                <span className="profile-title">  {profile.title}</span>  </bold></small></Card.Title>

                                                    </a></div>

                                                <Button
                                                    className="button1"
                                                    variant="light">Connect</Button>

                                            </Card.Body>


                                        </>
                                    )

                                    )}
                                    <hr className="hr" />
                                    <Dropdown className="dropdown">
                                        <Dropdown.Toggle variant="white">
                                            <big>Show more</big>
                                        </Dropdown.Toggle>
                                    </Dropdown>
                                </Card>


                            </div>


                        }
                        <Card style={{ width: '20rem' }}>
                            <h5><bold>People you may know</bold></h5>
                            {this.state.profiles.slice(46, 52).map(profile => (
                                <>
                                    <Card.Body className="profile-card-body ">
                                        <div className="d-flex p-3">
                                            <Card.Img variant="bottom" src={profile.image} className="profile-img" />
                                            <a href="">
                                                <Card.Title className="profile-info">
                                                    <small><bold>{profile.name} {profile.surname}<br />

                                                        <span className="profile-title">  {profile.title}</span>  </bold></small></Card.Title>

                                            </a></div>

                                        <Button
                                            className="button1"
                                            variant="light">Connect</Button>

                                    </Card.Body>


                                </>
                            )

                            )}
                            <hr className="hr" />
                            <Dropdown className="dropdown">
                                <Dropdown.Toggle variant="white">
                                    <big>Show more</big>
                                </Dropdown.Toggle>
                            </Dropdown>
                        </Card>
                    </div>
                </div>
            </div >
        )
    }
}

export default Sideprofile;
