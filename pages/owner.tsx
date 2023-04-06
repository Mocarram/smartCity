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

function owner() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <Layout>
      <NavbarComponent />

      <Container>
        <Row>
          <div className="d-flex gap-4">
            <Button variant="primary" onClick={handleShow}>
              Create new department
            </Button>
            <Button variant="dark" onClick={handleShow2}>
              Delegate voting power
            </Button>
          </div>

          {/* Create new department modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Create New Department</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Department Name</Form.Label>
                  <Form.Control type="text" placeholder="Department" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Department Wallet Address</Form.Label>
                  <Form.Control type="text" placeholder="Wallet Address" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Create
                </Button>
              </Form>
            </Modal.Body>
          </Modal>

          {/* Delegate voting power to citizens */}
          <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
              <Modal.Title>Delegate voting power</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Citizen Wallet Address</Form.Label>
                  <Form.Control type="text" placeholder="Wallet Address" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Delegate
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Tabs
            defaultActiveKey="depts"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="depts" title="Departments">
              <ListGroup>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <span>Road and Transport Department</span>
                  <Badge bg="info">
                    0x788473Ef269493dfg205A8325cE7c8397B30f3ed
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <span>Education Department</span>
                  <Badge bg="info">
                    0x788473Ef269493dfg205A8325cE7c8397B30f3ed
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Tab>
            <Tab eventKey="citizens" title="Delegated Citizens">
              <ListGroup>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <span>Ens name</span>
                  <Badge bg="info">
                    0x788473Ef269493dfg205A8325cE7c8397B30f3ed
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <span>Ens name</span>
                  <Badge bg="info">
                    0x788473Ef269493dfg205A8325cE7c8397B30f3ed
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </Layout>
  );
}

export default owner;
