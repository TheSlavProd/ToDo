import { Row, Col, Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
function ContactForm() {
  return (
    <Row className="mt-5 mb-5 justify-content-center">
      <Col>
        <h2> Get Custom Advice</h2>
        <p>
          Please fill out this short form, and our Admissions team will contact
          you to help you find out which course fits you best.
        </p>
      </Col>
      <Col>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="standard"
            color="secondary"
          />
          <TextField
            color="secondary"
            id="outlined-basic"
            label="Eamil"
            type="email"
            variant="standard"
          />
          <TextField
            color="secondary"
            id="standard-basic"
            label="Phone"
            variant="standard"
            type="tel"
          />
          <br />
          <Button variant="outlined" size="large" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Col>
    </Row>
  );
}

export default ContactForm;
