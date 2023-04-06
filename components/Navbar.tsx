import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

function NavbarComponent() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (isConnected) {
      localStorage.setItem("connectedWallet", address ?? "");
    } else {
      localStorage.removeItem("connectedWallet");
    }
  }, [isConnected, address]);
  return (
    <Navbar bg="light" expand="lg" className="my-5">
      <Container>
        <Navbar.Brand href="/">SmartCity</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isConnected ? (
              <div>
                <Button variant="success" onClick={() => disconnect()}>
                  Connected to {address}
                </Button>
              </div>
            ) : (
              <Button variant="warning" onClick={() => connect()}>
                Connect Wallet
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
