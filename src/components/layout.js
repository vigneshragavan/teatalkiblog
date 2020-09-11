
import React ,{useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import overlayMenu from './overlaymenu';
import Hamurger from './Hamburger';
import Footer from './Footer';
import './layout.css';
import 'bootstrap/dist/css/bootstrap-grid.css';


const Primary = styled.main`
  padding: 110px 0 0 0;
` 
const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen);
  }
    return (
      <React.Fragment>
        <Hamburger handleOverlayMenu={handleOverlayMenu} />
        <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
        <Header />
        <Primary id="primary" className="content-area">
          <main id="main" className='site-main' role='main'>
            {children}
          </main>
        </Primary>
        <Footer />
      </React.Fragment>
    )
  }
  
  Layout.propTypes = {
    children: PropTypes.node.isRequired
  }

  export default Layout;

  
