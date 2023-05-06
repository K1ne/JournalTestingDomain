import React, { Component, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'react-dropdown/style.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./Push.css";
import { useNavigate } from "react-router-dom";
import { Constants } from "@aws-amplify/core";
import background from "./Pictures/backgroundimage.jpg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./SharedPull.css";
import { FaStar } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';
import { Dropdown } from 'react-bootstrap';
import  {API} from 'aws-amplify';
import {listJournals} from './graphql/queries';
// import process from 'process';

function SharedPull() {
  const [sharedJournals, setSharedJournals] = useState([])
  const [journalValue, setJournalValue] = useState("Select date for journal to show up here");
  const [currentValue, setCurrentValue] = useState(0);
  const [userValue, setUserValue] = useState("Username")
    const [dateValue, setSelectedDate] = useState(new Date())
    const handleDateChange = (date) => {
        setSelectedDate(date)
        pullJournal(date.toISOString().slice(0,10))
    }

    const pullJournal = async (dateInput)=> {
      try{
        const journalData = await API.graphql({
          query: listJournals,
          variables: {
            filter: {
              owner:{
                eq: localStorage.getItem('id')
              },
              date: {
                eq: dateInput
              },
              share: {
                eq: true
              }
            }
          }
        })

        setSharedJournals(journalData.data.listJournals.items)

        //We have to list the documents
  
      }catch(e){
        console.log(e)
      }
    }
    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"
      };

    
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)
    const starsbeautify = {
        display: "flex",
        flexDirection: "row",
      };

      const handleClick = value => {
        setCurrentValue(value)
      }
    
      const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
      };
    
      const handleMouseLeave = () => {
        setHoverValue(undefined)
      }

    useEffect(() => {
        document.body.style.margin = 0;
        document.body.style.padding = 0;
        document.body.style.width = '100%';
        setUserValue(localStorage.getItem('username'))
      }, []);

  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (event, index) => {
    setJournalValue(sharedJournals[index].text)
    setCurrentValue(sharedJournals[index].rate)

    setShow(true);
  }
    
    
  const handleInputChange = (event) => setInputValue(event.target.value);

    const handleButtonClick = () => {
        setShowCard(!showCard);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`User entered: ${inputValue}`);
        handleClose();
      }

    const textareaStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.80)',
        border: '1px solid black',
        width: '80%',
        height: '400px',
        resize: 'none',
        fontSize: '25px',
        display: 'inline-block',
        textAlign: 'left',
        color: 'black'
    };
    const handleLogout = () => {
      // handle logout logic here
    };

    const navigate = useNavigate();
    // const version = process.env.REACT_APP_VERSION;
    return (
        <div className="backgroundImage">
        <Navbar expand="lg" className="mx-auto" style={{ backgroundColor: 'transparent' }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link style={{ backgroundColor: 'transparent', marginRight: '100px' }}></Nav.Link>
              <Nav.Link style={{ backgroundColor: 'transparent', marginRight: '100px' }}></Nav.Link>
              <h1 style={{ textAlign: 'center', fontSize: '50px', color: 'white', fontFamily: 'cursive', marginLeft: '300px' }}>MyJournal</h1>
              <Dropdown style={{marginLeft: '400px'}}>
                <Dropdown.Toggle variant="link" id="settings-dropdown" style={{ fontSize: '1.5rem', padding: '1rem', color: 'white'  }}>
                  <BsFillGearFill />
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ fontSize: '1rem', padding: '0.2rem', width: '50px', maxHeight: '200px' }} >
                  <Dropdown.Item disabled={true} >{userValue}</Dropdown.Item>
                  <Dropdown.Item onClick={() => navigate('/', { replace: true })}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="light" expand="lg" className="mx-auto my-navbar">
        <Container  >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="my-nav-link" href="push" style={{ marginRight: '250px' }}>Write Journal</Nav.Link>
              <Nav.Link className="my-nav-link" href="pull" style={{ marginRight: '250px' }}>Previous Journals</Nav.Link>
              <Nav.Link className="my-nav-link" href="sharedpull">Shared Journals</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <form className="Auth-form" onSubmit={newJournal}> */}
        <div>
          <br></br>

          <Navbar expand="lg" style={{ backgroundColor: 'transparent' }}>
            <Container  >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto flex-column">
                  <h3 style={{ color: 'white' }}>Date</h3>
                  <DatePicker selected={dateValue} onChange={handleDateChange} />
                </Nav>
            </Navbar.Collapse>
                
              <style>
                {`.navbar {
                      border-top-left-radius: 15px;
                      border-top-right-radius: 15px;
                      border-bottom-left-radius: 15px;
                      border-bottom-right-radius: 15px;
                      }`}
              </style>
            </Container>
          </Navbar>
          <br></br>
          <br></br>
          <br></br>


          <Navbar expand="lg" style={{ backgroundColor: 'transparent' }}>
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">

                {sharedJournals.map((sharedJournal, index) => (
                  <Nav className="mx-auto">
                    <div class="mail-button-container">
                      <label style={{color: "white", fontSize: "20px"}} for="mail-button">{sharedJournal.ownerShared}</label>
                      <li key = {index} onClick={event => handleShow(event, index)} className="mail-button">
                          <AiOutlineMail />
                      </li>
                    </div>
                   </Nav>
                ))}

              </Navbar.Collapse>
            </Container>
          </Navbar>
          

          {/* <h3 style={{ color: 'white' }}>Previous Journal</h3>
          <textarea value={journalValue} onChange={handleJournalChange} style={textareaStyle} ref={textareaRef} onKeyDown={handleKeyDown}>
          </textarea>
          <textarea disabled style={textareaStyle} placeholder="Select date for journal to show up here">
          </textarea> */}

          {/* <Navbar expand="lg" style={{ backgroundColor: 'transparent' }}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-center">
              <Nav className="mx-2">
                <Button type="submit" variant="light" onClick={handleShow}>
                  <h8 style={{ color: '#000' }}>Share</h8>
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
        <Modal show={show} onHide={handleClose} className="my-modal-lg">
          <Modal.Header closeButton className="transparent-modal-body">
            <Modal.Title>Shared</Modal.Title> {/*Maybe add from username?????*/}
          </Modal.Header>
          <Modal.Body className="transparent-modal-body">
          <Navbar expand="lg" style={{ backgroundColor: 'transparent' }}>
            <Container  >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto flex-column align-items-center">
                  <h3 style={{ color: 'Black' }}>Date</h3>
                  <DatePicker disabled={true} selected={dateValue} onChange={handleDateChange} />
                </Nav>
                <Nav className="mx-auto flex-column align-items-center">
                  <h3 style={{ color: 'Black' }}>Rating</h3>
                  <div style={starsbeautify}>
                    {stars.map((_, index) => {
                      return (
                        <FaStar
                          // rating={ratingValue}
                          // onRatingChange={handleRatingChange}
                          key={index}
                          size={24}
                          disabled = {true}
                        //   onClick={() => handleClick(index + 1)}
                        //   onMouseOver={() => handleMouseOver(index + 1)}
                        //   onMouseLeave={handleMouseLeave}
                          color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                          style={{
                            marginRight: 10,
                            cursor: "pointer"
                          }}
                        />
                      )
                    })}

                  </div>
                  {/* <label for="quantity"></label>
                          <input type="number" id="quantity" name="quantity" min="1" max="10"></input> */}

                </Nav>
              </Navbar.Collapse>
              <style>
                {`.navbar {
                      border-top-left-radius: 15px;
                      border-top-right-radius: 15px;
                      border-bottom-left-radius: 15px;
                      border-bottom-right-radius: 15px;
                      }`}
              </style>
            </Container>
          </Navbar>
          <Modal.Body className="centered-modal-body">
          <h3 style={{ color: 'black' }}>Previous Journal</h3>
          </Modal.Body>
                <Modal.Body className="centered-modal-body">
                {/* <h3 style={{ color: 'black' }}>Previous Journal</h3> */}
                <textarea disabled style={textareaStyle} value={journalValue}>
                </textarea>
                </Modal.Body>
          </Modal.Body>
        </Modal>
                    
                </div>
                {/* {showCard && (
                            <Card style={{backgroundColor: 'transparent', borderColor: 'white', width: '80%',}}>
                            <Card.Body>
                                <Card.Title style={{color: 'white'}}>Date: </Card.Title>
                                <Card.Title style={{color: 'white'}}>Rating: </Card.Title>
                                <Card.Text style={{color: 'white'}}>Entry: </Card.Text>
                            </Card.Body>
                            </Card>
                )}
                <br></br> */}
            {/* <button onClick={() => navigate('/login', { replace: true })}>
                <h8>Save Journal Entry</h8>
            </button> */}
            
            {/* <div>
                <p>Version: {version}</p>
            </div> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
             

        </div>

        

    );
};

export default SharedPull