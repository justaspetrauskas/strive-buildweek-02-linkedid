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
                let profilePortion = profiles.slice(0, 6)
                this.setState({ profiles: profilePortion })
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
                        <Card style={{ width: '20rem' }}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    Edit public profile & URL
                                    <i class="bi bi-question-circle-fill">
                                    </i>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Add profile in another language
                                    <i class="bi bi-question-circle-fill">
                                    </i>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        {
                            <div className="profiles"
                            >
                                <Card style={{ width: '20rem' }}>
                                    <h5><bold>People also viewed</bold></h5>
                                    {this.state.profiles.map(profile => (
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
                                    <hr />
                                    <Dropdown className="dropdown">
                                        <Dropdown.Toggle variant="white">
                                            Show more
                                        </Dropdown.Toggle>
                                    </Dropdown>
                                </Card>


                            </div>


                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Sideprofile;
