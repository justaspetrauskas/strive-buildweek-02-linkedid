import { Component } from "react";
import { Card, ListGroup, Container, Row, Col } from 'react-bootstrap'




class Sideprofile extends Component {


    fetchData = async () => {
        const url = 'https://striveschool-api.herokuapp.com/api/profile/ '
        try {
            let response = await fetch(url)
            if (response.ok) {
                let data = await response.json()
            } else {
                console.log('There is an error!')
            }
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.fetchData()
    }


    render() {
        return (

            <Container>
                <Row>
                    <Col>
                        <div className="settings">
                            <Card style={{ width: '20rem' }}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Edit public profile & URL
                                        <i class="bi bi-question-circle-fill">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                            </svg>
                                        </i>
                                    </ListGroup.Item>
                                    <ListGroup.Item>Add profile in another language
                                        <i class="bi bi-question-circle-fill">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                            </svg>
                                        </i>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Sideprofile



