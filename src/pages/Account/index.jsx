import React from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Route, Routes, useMatch, useResolvedPath } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import AddAddress from '../../components/AddAddress';
import Address from '../../components/Address';
import Order from '../../components/Order';
import Profile from '../../components/Profile';
import Logout from '../../components/Logout';
import { Link } from 'react-router-dom';

export default function Account() {
  const resolved = useResolvedPath('');
  const match = useMatch(resolved.pathname);

  return (
    <Container className="mt-5 p-5">
      <Card>
        <Card.Header>
          Account
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={3}>
              <ListGroup>
                <Link to="/account" exact>
                  <ListGroup.Item action>
                    Profil
                  </ListGroup.Item>
                </Link>
                <Link to="/account/orders" exact>
                  <ListGroup.Item action>
                    Pemesanan
                  </ListGroup.Item>
                </Link>
                <LinkContainer to="/account/address" exact>
                  <ListGroup.Item action>
                    Alamat
                  </ListGroup.Item>
                </LinkContainer>
                <LinkContainer to="/account/logout" exact>
                  <ListGroup.Item action>
                    Logout
                  </ListGroup.Item>
                </LinkContainer>
              </ListGroup>
            </Col>
            <Col md={9}>
              <Routes>
                <Route path={`${match.url}`} component={Profile} exact />
                <Route path={`${match.url}/logout`} component={Logout} exact />
                <Route path={`${match.url}/orders`} component={Order} exact />
                <Route path={`${match.url}/address`} component={Address} />
                <Route path={`${match.url}/add-address`} component={AddAddress} />
              </Routes>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}
