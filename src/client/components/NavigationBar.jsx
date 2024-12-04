import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navigationbar.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Navigationbar() {

  const { t, i18n } = useTranslation();

  
  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/client/mainpage"><img src="/images/logo.jpg" style={{width: 150}} alt="not found"/></Navbar.Brand><br/>
        <Navbar.Brand>
      

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            
            <Nav.Link as={Link} to="/client/products">{t('navigation.home')}</Nav.Link>
            <NavDropdown title={t('navigation.products')} id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/client/products">{t('navigation.candles')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/client/decorations">
              {t('navigation.decorations')}
              </NavDropdown.Item>
              <NavDropdown.Divider />
          
            </NavDropdown>
            <Nav.Link as={Link} to="/contact/contacts">
            {t('navigation.contacts')}
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/adminpage">
            {t('navigation.adminpage')}
            </Nav.Link>
            <Nav.Link as={Link} to="./client/MarketSchedule">
            {t('navigation.market')}
            </Nav.Link>
            <img onClick={() => changeLang("it")} className="languageIcon" src="/languageicons/it.png" alt="not found" />
            <img onClick={() => changeLang("en")} className="languageIcon" src="/languageicons/uk.png" alt="not found" />
            
          </Nav>
          

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder={t('navigation.search')}
              className="me-2"
              aria-label="Search"
              
            />
            <Button variant="outline-success">{t('navigation.search')}</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;