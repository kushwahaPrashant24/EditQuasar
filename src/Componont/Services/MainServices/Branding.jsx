import React, { useRef, useState, useEffect } from 'react';
import './Branding.css'; // Import CSS file
import ServiceHeader from './Components/Header/header';
import ServiceCard from './Components/ServiceCard/ServiceCard';
import OurProcess from './Components/ProcessSection/ProcessSection'; // Updated to OurProcess

import brandVideo from "../../../assets/Services/Branding.mp4";
import serImg from '../../../assets/Services/image.webp';
import descriptionVideo from "../../../assets/Services/descriptionVideo.mp4";
import processVideo from "../../../assets/Services/Companyprocess.mp4";
import NewButton from "../MainServices/Components/Button/NewButton";
import sohamImage from '../../../assets/Services/sohamimage.jpg';
import krishImage from '../../../assets/Services/krishsir.jpg';
import { FaLinkedin } from 'react-icons/fa';

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
  </svg>
);

const PauseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="white"/>
  </svg>
);

const MuteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 9V15H12L17 20V4L12 9H9Z" fill="white"/>
  </svg>
);

const UnmuteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 9V15H12L17 20V4L12 9H9Z" fill="white"/>
    <line x1="1" y1="1" x2="23" y2="23" stroke="white" strokeWidth="2"/>
  </svg>
);

const Branding = () => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePauseClick = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  const handleMuteClick = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };


 

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play();
          setIsPaused(false);
        } else {
          videoElement.pause();
          setIsPaused(true);
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  useEffect(() => {
    const videoElement = document.getElementById('process-video');
    if (videoElement) {
      videoElement.play(); // Ensure video starts playing when component mounts
    }
  }, []);

  return (
    <>
      <ServiceHeader video_link={brandVideo} />

      <div className='branding-description'>
        <p className='text'>People's expectations of brands have never been higher. They want brands to go beyond the ordinary. EditQuasar inspires brands and individuals to make a meaningful impact.</p>
        <div style={{ position: 'relative' }}>
          <video className='description-video' ref={videoRef} loop>
            <source src={descriptionVideo} type='video/mp4' />
          </video>
          <button className='pause-button' onClick={handlePauseClick}>
            {isPaused ? <PlayIcon /> : <PauseIcon />}
          </button>
          <button className='mute-button' onClick={handleMuteClick}>
            {isMuted ? <UnmuteIcon /> : <MuteIcon />}
          </button>
        </div>
      </div>

      <p className='Title'>Services</p>

      <div className='ServicesGrid'>
        <ServiceCard 
          img_url={serImg} 
          title='Brand Consulting' 
          description='Helping businesses dissolve complexity and stay focused on their core competencies for fast results.' 
          link='https://chatgpt.com/c/47fb970e-e929-4166-a2f5-c444d2a712e7' 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Logo Design' 
          description="Creating unique and memorable logos that reflect your brand's identity and values." 
          link='https://chatgpt.com/c/47fb970e-e929-4166-a2f5-c444d2a712e7' 
        />
        <ServiceCard 
          img_url={serImg} 
          title='2D/3D Visualization' 
          description='Bringing your ideas to life with stunning 2D and 3D visualizations that captivate and engage.' 
          link='https://chatgpt.com/c/47fb970e-e929-4166-a2f5-c444d2a712e7' 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Graphic Design' 
          description='Crafting visually compelling designs that communicate your message and elevate your brand.' 
          link='https://chatgpt.com/c/47fb970e-e929-4166-a2f5-c444d2a712e7' 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Brand Identity' 
          description='Developing a cohesive and powerful brand identity that resonates with your audience and sets you apart from the competition.' 
          link='https://chatgpt.com/c/47fb970e-e929-4166-a2f5-c444d2a712e7' 
        />
      </div>

      <p className='Title'>Our Process</p>
      <section className="our-process">
        <video className='process-video' id='process-video' autoPlay loop muted>
          <source src={processVideo} type='video/mp4' />
        </video>
        <div className='processes'>
          <OurProcess
            title="Target Audience Research"
            description="We conduct in-depth research to understand your target audience, their needs, and preferences." 
          />
          <OurProcess
            title="Brand Strategy Development"
            description="We develop a comprehensive brand strategy that aligns with your business goals and resonates with your audience." 
          />
          <OurProcess
            title="Brand Messaging Development"
            description="We create compelling brand messages that effectively communicate your brand’s value and vision." 
          />
          <OurProcess
            title="Brand Design"
            description="We design visually appealing and cohesive brand elements that reflect your brand’s identity." 
          />
          <OurProcess
            title="Brand Style Guide Creation"
            description="We create detailed brand style guides to ensure consistency in your brand’s visual and verbal elements across all channels." 
          />
          <OurProcess
            title="Brand Implementation"
            description="We put your branding into practice across all marketing materials, ensuring a cohesive and impactful brand presence." 
          />
        </div>
      </section>
      
      <p className='Title'>FAQ</p>
      <div className='FAQ'>
        
        <OurProcess
          title="What is editquasar's approach to brand strategy development?"
          description="editquasar takes a comprehensive approach to brand strategy development. We begin by 
          understanding the client's business goals, target audience, and competitive landscape. This 
          allows us to create a unique and effective brand strategy that aligns with the client's objectives." 
        />
        <OurProcess
          title="How does editquasar ensure consistency in brand messaging across all marketing channels? "
          description="We develop detailed brand guidelines that provide clear instructions on using and applying the 
          brand's visual and verbal elements consistently across all marketing channels. This helps create a cohesive brand image and build brand recognition and trust with customers." 
        />
         <OurProcess
          title="What sets editquasar's brand identity design services apart from others in the industry?"
          description="Our brand identity design services are highly customized to meet each client's unique needs and goals. We focus on creating a brand identity that is visually appealing, memorable, and aligned 
          with the client's brand strategy." 
        />
        <OurProcess
          title="How does editquasar assess the effectiveness of a branding campaign?"
          description="editquasar measures a branding campaign's success using various metrics, including improved 
          brand awareness, greater levels of customer contact, increased sales, and enhanced market share. 
          We provide regular reporting and analysis to ensure that the branding strategy is effective and in 
          line with the client's objectives. " 
        />
      </div>
       
      <p className='Title'>Related Services</p>
      <div className='FAQ'>
        
        <div className='ServicesGrid'>
          <ServiceCard 
            img_url={serImg} 
            title='Technology' 
            description='Solutions for your business that are functional,reliable,efficient,and able to accommodate your growing needs ' 
            link='https://chatgpt.com/c/47fb970e-e929-4166-a2f5-c444d2a712e7' 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Experience Design' 
            description='We build human-centric,purpose-driven designs that deliver exceptional customer loyalty,trust, and retention' 
            link='https://chatgpt.com/c/47fb970e-e929-4166-a2f5-c444d2a712e7' 
          />
          <ServiceCard 
            img_url={serImg} 
            title='Digital Marketing' 
            description='Engage with your customers and achieve your business goals with data-driven marketing solutions' 
            link='https://chatgpt.com/c/47fb970e-e929-4166-a2f5-c444d2a712e7' 
          />
        </div>
        <div className="view-all-services-button">
        <div>
      <NewButton buttonText="View all services" link="https://example.com" />
    </div>
      </div>

      
      
    {/* New Section */}
<div className="new-section">
  <div className="section-container">
    <div className="text-and-images">
      <div className="text">
        <h2 className="heading">We Are Happy to Help You</h2>
        <p className="descrip">With touchpoints across numerous verticals and a passionate team at the helm, we have what it takes to give your brand the digital evolution.</p>
      </div>
      <div className="images">
      <div className="image-container">
        <img src={sohamImage} alt="Soham Mandal" />
        <div className="name">
          <p>Mr. Soham Mandal</p>
          <h2>Chief Executive Officer</h2>
          <a href="https://www.linkedin.com/in/soham-mandal-founder-and-ceo-08058427a/"><FaLinkedin/></a>
        </div>
      </div>
      <div className="image-container">
        <img src={krishImage} alt="krish kumar"/>
        <div className="name">
          <p>Mr. Krish Kumar</p>
          <h2>Chief Operating Officer</h2>
          <a href=""> <FaLinkedin/> </a>
        </div>
      </div>
    </div>
    </div>
    <div className="form-container">
      <form>
        <div className="form-section">
          <label htmlFor="firstname">First Name <span>*</span></label>
          <input type="text" id="firstname" name="firstname" placeholder="Enter First Name" required />
        </div>
        <div className="form-section">
          <label htmlFor="lastname">Last Name <span>*</span></label>
          <input type="text" id="lastname" name="lastname" placeholder="Enter Last Name" required />
        </div>
        <div className="form-section">
          <label htmlFor="email">Email <span>*</span></label>
          <input type="email" id="email" name="email" placeholder="Enter Email" required />
        </div>
        <div className="form-section">
          <label htmlFor="phonenumber">Phone Number<span>*</span></label>
          <input type="tel" id="phonenumber" name="phonenumber" placeholder="Enter Phone Number" required />
        </div>
        <div className="form-section">
          <label htmlFor="message">Tell us more <span>*</span></label>
          <textarea id="message" name="message" placeholder="Brief about your project" rows="5" required></textarea>
        </div>
        { <div className='submit-button'>
          <NewButton buttonText="Submit" link="https://example.com" />
        </div> 
        }
      </form>
    </div>
  </div>
</div>


</div>
    
       
      
    </>
  );
};

export default Branding;