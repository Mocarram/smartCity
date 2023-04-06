import NavbarComponent from "@/components/Navbar";
import {
  Alert,
  Badge,
  Button,
  Container,
  Form,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";

import Layout from "@/components/Layout";
import { useState } from "react";

function department() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Layout>
      <NavbarComponent />

      <Container>
        <Row>
          <div className="d-flex gap-4">
            <Button variant="primary" onClick={handleShow}>
              Create new election
            </Button>
          </div>

          {/* Create new department modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Create New election</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Add proposal [comma separated]</Form.Label>
                  <Form.Control type="text" placeholder="Proposals" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Voting Duration</Form.Label>
                  <Form.Control type="number" placeholder="Duration" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Create
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Tabs
            defaultActiveKey="openElections"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="openElections" title="Open Elections">
              <ListGroup>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <span>Road and Transport Department</span>
                  <Badge bg="info">Voting Open</Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <span>Education Department</span>
                  <Badge bg="info">Voting open</Badge>
                </ListGroup.Item>
              </ListGroup>
            </Tab>
            <Tab eventKey="closedElections" title="Closed Elections">
              <ListGroup>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <span>Education Department</span>
                  <Badge bg="info">Build a school proposal won</Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <span>Education Department</span>
                  <Badge bg="info">Build a school proposal won</Badge>
                </ListGroup.Item>
              </ListGroup>
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </Layout>
  );
}

export default department;
