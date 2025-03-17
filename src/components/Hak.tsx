import { useState } from 'react';

import "./Hak.css";

const Hak = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className='text-center'>
      <h1 style={{ color: 'black' }}>
        your generated <span style={{ color: 'green' }}>message</span> for job <span style={{ color: 'green' }}>applications</span>
      </h1>
      <div className="container flex">

        <div className="text-box">
          <h1>[Your Name]</h1>
          <p>[Your Address]</p>
          <p>[City, State, Zip Code]</p>
          <p>[Your Email]</p>
          <p>[Your Phone Number]</p>
          <p>[Date]</p>
          <br />
          <p>[Hiring Manager's Name]</p>
          <p>[Company Name]</p>
          <p>[Company Address]</p>
          <p>[City, State, Zip Code]</p>
          <br />
          <p>Dear [Hiring Manager's Name],</p>
          <p>
            I am writing to express my interest in the [Job Title] position that was advertised on [Source of the Job Posting]. I am excited about this opportunity as I believe my experience and skills align perfectly with the job requirements.
          </p>
          <p>
            I have [number] years of experience in [industry or field], where I have [briefly outline some accomplishments or tasks you have undertaken]. These experiences have equipped me with the necessary skills to excel in this role, including [mention some relevant skills].
          </p>

          <p>[Your Name]</p>
        </div>


        <div className="image-section">
          <img src="images/3.png" alt="Image 2" className='image' />
          <button className="button">Send</button>
        </div>
      </div>
      <h1>
        <span style={{ color: 'green' }}>Av</span>ailable <span style={{ color: 'green' }}>Jo</span>bs
      </h1>
      <div className="new-section">

        <div className="left-section">
          <img src="images/4.jpg" alt="Image 2" className='image1' />
          <div className='div12' >
            <div className="input-container">
              <label htmlFor="country" className='lab-count'>Select Country:</label>
              <input
                type="text"
                id="country"
                className="full-width-input"
                placeholder="Enter your country"
              />
            </div>
          </div>

          <div className='div12'>
            <div className="options-container">
              <h3>Filter Options</h3>
              <div className="options-group">
                <button
                  className={`option-button ${selectedOption === 'Option 1' ? 'active' : ''}`}

                >
                  Technology
                </button>
                <button
                  className={`option-button ${selectedOption === 'Option 2' ? 'active' : ''}`}

                >
                  Healthcare
                </button>
                <button
                  className={`option-button ${selectedOption === 'Option 3' ? 'active' : ''}`}

                >
                  Eduction
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className="right-section">
          <h2>Available Companies</h2>
          <div className='div11' >
            <h2 className='company-name'>ABC Company</h2>
            <p className='aval-p'>Technology,cario</p>
            <button className='apply-b'>Apply </button>
          </div>

          <div className='div11'>
            <h2 className='company-name'>ABC Company</h2>
            <p className='aval-p'>Technology,cario</p>
            <button className='apply-b'>Apply </button>
          </div>
          <div className='div11' >
            <h2 className='company-name'>ABC Company</h2>
            <p className='aval-p'>Technology,cario</p>
            <button className='apply-b'>Apply </button>
          </div>
        </div>
      </div>
      <div className='skill'>
        <h1>
          <span style={{ color: 'green' }}>S</span>kill <span style={{ color: 'green' }}>Ass</span>essment Tes <span style={{ color: 'green' }}>ts</span>
        </h1>
        <div className="skill-content">
          <div className="left-skill">
            <h1 style={{ fontWeight: 'bold', color: 'black', textAlign: 'left' }}>Interactive Tests</h1>
            <p style={{ color: 'gray', textAlign: 'left' }}>Take our interactive tests to measure your skills</p>
            <button style={{ backgroundColor: '#45a049', width: '57%', color: 'white', fontSize: '18px', padding: '10px 20px', border: 'none', borderRadius: '16px', cursor: 'pointer' }}>Start Test</button>
            <h1 style={{ fontWeight: 'bold', color: 'black', textAlign: 'left', marginTop: '20px' }}>Test Results</h1>
            <p style={{ color: 'gray', textAlign: 'left' }}>Here are your result: <span style={{ color: 'red' }}> Score 85%</span></p>
          </div>

          <div className="right-skill">

            <p style={{ fontWeight: 'bold', color: 'black', textAlign: 'left' }}>Tipe To Improve:
              <span style={{ color: 'gray' }}> Focase of brasite and stay update</span>
            </p>
            <h1 style={{ fontWeight: 'bold', color: 'black', textAlign: 'left' }}>Tips and Guidance</h1>
            <p style={{ textAlign: 'left' }}>Practice daily</p>
            <p style={{ color: 'gray', textAlign: 'left' }}>Join community forums</p>
            <p style={{ textAlign: 'left' }}>Additional Resources</p>
            <p style={{ color: 'gray', textAlign: 'left' }}>Online courses: Learn the latest skills</p>

          </div>
        </div>
      </div>

      <div className='logo'>
        <img src="images/logo.png" alt="logo" className='imagelogo' />
        <h1 className='h1-logo'>Startup</h1>
      </div>

    </div>
  );
};

export default Hak;