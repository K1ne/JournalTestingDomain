import React, { Component, useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-dropdown';
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
import { FaStar } from "react-icons/fa";
import { createJournal} from './graphql/mutations';
import  {API, Amplify} from 'aws-amplify';
import { BsFillGearFill } from 'react-icons/bs';


// import { Text, Grid } from "@nextui-org/react";
// import process from 'process';

function Push() {
  //database values
  // const [ownerValue, setOwnerValue] = useState("");
    const [dateValue, setDateValue] = useState(new Date());
    // const [ratingValue, setRatingValue] = useState();
    const [journalValue, setJournalValue] = useState("");
    const [buttonValue, setButtonValue] = useState("Save");
    // const [shareValue, setShareValue] = useState(0);

    const [idValue, setIdValue] = useState();

    const idInput = (props) => {
        setIdValue(props)
    }
 

  // const handleOwnerChange = (event) => {
  //   setOwnerValue(event.target.value); //Adrin's value
  // };
  const dateValueISO = dateValue.toISOString().slice(0,10);

  const handleDateChange = (date) => {
    setDateValue(date);
  };

  const handleJournalChange = (event) => {
    setJournalValue(event.target.value);
  };

  // const handleShareChange = (event) => {
  //   setShareValue(event.target.value);
  // };

  // //for database
  const newJournal = async (e) => {
    e.preventDefault()

    try {
      await API.graphql({
        query: createJournal,
        variables: {
          input: {
            owner: localStorage.getItem('id'), //Need to get this value
            date: dateValueISO,
            rate: currentValue,
            text: journalValue,
            share: false
          }
        },
      })
      console.log('Successfully sent')
    } catch (e) {
      console.log(e)
    }

    setButtonValue("SAVED!")
    // navigate('/pull')
  }
  //end for database

  // const [selectedDate, setSelectedDate] = useState(new Date())
  // const handleDateChange = (date) => {
  //   setSelectedDate(date)
  // }
  useEffect(() => {
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    document.body.style.width = '100%';
  }, []);

  const textareaRef = useRef(null);

  function handleKeyDown(event) {
    if (event.keyCode === 9) { // Tab key
      event.preventDefault();
      const { current } = textareaRef;
      const { selectionStart, selectionEnd, value } = current;
      const newValue = value.substring(0, selectionStart) + '\t' + value.substring(selectionEnd);
      current.value = newValue;
      current.setSelectionRange(selectionStart + 1, selectionStart + 1);
    }
  }

  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
  };
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const dayRatingOptions = [
    { value: 'rate1', label: '1' },
    { value: 'rate2', label: '2' },
    { value: 'rate3', label: '3' },
    { value: 'rate4', label: '4' },
    { value: 'rate5', label: '5' },
    { value: 'rate6', label: '6' },
    { value: 'rate7', label: '7' },
    { value: 'rate8', label: '8' },
    { value: 'rate9', label: '9' },
    { value: 'rate10', label: '10' },
  ];
  const dayRatingDefaultOption = dayRatingOptions[0];

  const textareaStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.80)',
    border: '1px solid black',
    width: '80%',
    height: '400px',
    resize: 'none',
    fontSize: '25px',
    display: 'inline-block',
    textAlign: 'left'
  };

  const starsbeautify = {
    display: "flex",
    flexDirection: "row",
  };

  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInputChange = (event) => setInputValue(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`User entered: ${inputValue}`);
    handleClose();
  }

  // const backgroundImageTest = {
  //     backgroundImage: `url(${background})`,
  //     textAlign: 'center',
  //     backgroundS
  // };

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
                <Dropdown.Menu  style={{ fontSize: '1rem', padding: '0.2rem', width: '50px', maxHeight: '200px' }} >
                  <Dropdown.Item disabled={true} >Username</Dropdown.Item>
                  <Dropdown.Item onClick={() => navigate('/', { replace: true })}>Log out</Dropdown.Item>
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
                  <DatePicker 
                    selected={dateValue} 
                    onChange={handleDateChange} />

                </Nav>
                <Nav className="mx-auto flex-column align-items-center">
                  <h3 style={{ color: 'white' }}>How was your day?</h3>
                  <div style={starsbeautify}>
                    {stars.map((_, index) => {
                      return (
                        <FaStar
                          rating={currentValue}
                          key={index}
                          size={24}
                          onClick={() => handleClick(index + 1)}
                          onMouseOver={() => handleMouseOver(index + 1)}
                          onMouseLeave={handleMouseLeave}
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
          <br></br>
          <br></br>
          <br></br>

          <h3 style={{ color: 'white' }}>What happened today?</h3>
          <textarea 
            style={textareaStyle} 
            ref={textareaRef} 
            onKeyDown={handleKeyDown}
            // name = "journalEntry"
            value={journalValue}
            onChange={handleJournalChange}
            >


          </textarea>


        </div>
        <br></br>
        <Navbar expand="lg" style={{ backgroundColor: 'transparent' }}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-center">
              <Nav className="mx-2">
                <Button type="submit" variant="light" onClick={newJournal}>
                  <h8 style={{ color: '#000' }}>{buttonValue}</h8>
                </Button>
              </Nav>
              {/* <Nav className="mx-2">
                <Button variant="light" onClick={handleShow}>
                  <h8 style={{ color: '#000' }}>Share</h8>
                </Button>
              </Nav> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* Move share button to pull page */}
        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Share</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Enter Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>
              Share
            </Button>
          </Modal.Footer>
        </Modal> */}
      {/* </form> */}

      {/* <Button onClick={() => navigate('/pull', { replace: true })} variant="light">
                <h8 style={{color: 	'#000'}}>Pull Page</h8>
            </Button>
            <Button onClick={() => navigate('/sharedpull', { replace: true })} variant="light">
                <h8 style={{color: 	'#000'}}>Shared Pull Page</h8>
            </Button> */}
      {/* <div>
                <p>Version: {version}</p>
        </div>*/}
      <br></br>
      <br></br>
      <br></br>

    </div >
  );
};

export default Push