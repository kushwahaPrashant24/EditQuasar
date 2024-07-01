import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Nav.css";

import Lightbox from './Lightbox';


const menuConfig = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services", content: "Services Content" },
  { name: "Industries", path: "/Industries" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [sticky, setSticky] = useState(false);
  const [hoverBoxContent, setHoverBoxContent] = useState(null);
  const [selectedService, setSelectedService] = useState(null); 
  const [showLightbox, setShowLightbox] = useState(false); 
    

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMouseEnter = (content) => {
    setHoverBoxContent(content);
  };

  const handleMouseLeave = () => {
    setHoverBoxContent(null);
  };

  const handleOpenLightbox = (serviceName) => () => {
    setShowLightbox(true);
    setSelectedService(serviceName);
  };

  const handleCloseLightbox = () => {
    setShowLightbox(false);
  };

  
  
  
    return (
      <>
        <div id="full-scr">
          <div className="full-div1"></div>
        </div>
        <AppBar
          position="sticky"
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "flex" },
            justifyContent: "space-around",
            backgroundColor: sticky ? "rgb(45, 15, 94)" : "transparent",
            transition: "background-color 0.3s",
            borderRadius: "50px",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "space-around",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <img src={Logo} style={{ height: "60px", width: "60px" }} />
              </Typography>

              <Box
                sx={{
                  flexGrow: 10,
                  display: { xs: "flex", sm: "none", md: "none" },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {menuConfig.map((menu) => (
                    <MenuItem key={menu.name} onClick={handleCloseNavMenu}>
                      <Button
                        key={menu.name}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "black", display: "block" }}
                        component={Link}
                        to={menu.path}
                      >
                        {menu.name}
                      </Button>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <img src={Logo} style={{ height: "60px", width: "60px" }} />
              </Typography>
              <Box

                sx={{
                  flexGrow: 10,
                  display: { xs: "none", sm: "flex", md: "flex" },
                  justifyContent: "space-around",
                  
                }}
              >
                {menuConfig.map((menu) => (
                  <div
                    key={menu.name}
                    onMouseLeave={() => handleMouseLeave()}
                    style={{ position: "relative"}}
                  
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white" }}
                      component={Link}
                      to={menu.path}

                      onMouseEnter={() => handleMouseEnter(menu.content)}
                      
                      
                    >
                      {menu.name}
                    </Button>
                    {menu.content && (
                      <Box
                        className={`hover-box ${hoverBoxContent === menu.content ? "visible" : ""}`}
                        
                      >
                        {/* <Typography variant="h6" color="primary" sx={{ padding: 2 }}>
                          {menu.content}
                        </Typography> */}
                        {menu.content === 'Services Content' && (
                          <div className="grid-container">
                            
                            <div className="grid-item">
                              <p className="services-header">Building Strong Capabilities to Empower Your Brand</p>
                              <div className="service-arrow">
                              <p className="services-dis" onClick={handleOpenLightbox(menu.name)}>
                              Start Your Personalized Project{' '} 
                                <span className="material-symbols-outlined">
                                  arrow_forward
                                </span>
                                </p>
                              
                              </div>
                            </div>
                            <div className="grid-item">
                              <div>
                              <a href="./Services/Branding" className="sub-heading-title">Branding 
                                 <span className="material-symbols-outlined">
                                  arrow_forward
                                </span></a>
                              <ul className="service-heading-title">
                                <li>Brand Identity</li>
                                <li>Brand Consulting</li>
                                <li>Logo Design</li>
                                <li>2D/3D Visualisation</li>
                                <li>Graphic Design</li>
                              </ul>
                              </div>
                              <div> 
                                <p className="sub-heading-title">Design Fusion</p>
                                <ul className="service-heading-title">
                                  <li>Personalized Advertising Poster Creation</li>
                                  <li>Personal Portfolio Creation</li>
                                  <li>Personal Portfolio Creation</li>
                                  <li>Company Portfolio Making</li>
                                  <li>Personalized Business Card Making</li>
                                  <li>Social media creatives & other advertising materials</li>
                                  <li>Brochures</li>
                                </ul>
                              </div>

                            </div>
                            <div className="grid-item">
                              <div>
                              <p className="sub-heading-title">Digital Marketing</p>
                              <ul className="service-heading-title">
                                <li>Search Engine Optimisation</li>
                                <li>Social Media Management</li>
                                <li>Performance Marketing</li>
                                <li>Content Marketing</li>
                                <li>Marketing Automation</li>
                                <li>Analytics</li>
                              </ul>
                              </div>
                              <div>
                              <p className="sub-heading-title">Experience Design</p>
                              <ul className="service-heading-title">
                                <li>UI/UX Design</li>
                                <li>Website Design</li>
                                <li>Mobile Experience</li>
                                <li>Commerce Experience</li>
                                <li>Human Machine Interface (HMI)</li>
                                <li>Applications & Dashboard</li>
                              </ul>
                              </div>
                            </div>
                            <div className="grid-item">
                              <div>
                              <p className="sub-heading-title">Technology</p>
                              <ul className="service-heading-title">
                                <li>Data & Analytics</li>
                                <li>Web Development</li>
                                <li>Mobile App Development</li>
                                <li>E-commerce</li>
                                <li>AI & Machine Learning (ML)</li>
                                <li>Cyber Security</li>
                              </ul>
                              </div>  
                              <div>
                                <p className="sub-heading-title">Creativity</p>
                                  <ul className="service-heading-title">
                                    <li>Video Editing</li>
                                    <li>Photo Editing</li>
                                    <li>Blog Writing</li>
                                    <li>Content Writing</li>
                                    <li>Resume Making</li>
                                    <li>Personalized Occasion Card Making</li>
                                  </ul>
                              </div>
                            </div>
                          
                          
                          </div>
                      )}
                      
                      </Box>
                    )}
                  </div>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {showLightbox && <Lightbox serviceName={selectedService} onClose={handleCloseLightbox} />}
      </>
    );
  }


export default ResponsiveAppBar;