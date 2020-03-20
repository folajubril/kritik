import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { BrowserRouter  as Router, Switch, Route, Link} from 'react-router-dom';

import CreateUser from './components/addUser.component';
import UploadContent from './components/addContent.component';
import SearchContent from './components/searchContent.component';

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark" postion="fixed-top">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-user"} className="nav-link">
                Kritik.me
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-user"} className="nav-link">
                  Sign Up
                </Link>
              </Nav>

              <Nav>
                <Link to={"/upload-content"} className="nav-link">
                  Upload content
                </Link>
              </Nav>

              <Nav>
                <Link to={"/search-content"} className="nav-link">
                 Search Content
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateUser} />
                <Route path="/create-user" component={CreateUser} />
                <Route path="/upload-content" component={UploadContent} />
                <Route path="/search-content" component={SearchContent} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </Router>);
}

export default App;
