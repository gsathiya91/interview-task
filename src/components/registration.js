import React from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ValidateForm from "./useForm";
import ValidateValues from "./validate";

function RegistrationForm() {
    const { handleChange, values, handleSubmit, errors } = ValidateForm(ValidateValues);
    return (
        <div className="row">
            <div class="col-md-6 register">
                <img className="image" src="https://img.freepik.com/premium-vector/blue-glossy-document-paper-curved-list-legal-form-diagonal-placed-blank-3d-icon-realistic-vector_92753-5728.jpg?size=338&ext=jpg&ga=GA1.2.310846967.1659521904" />
            </div>
            <div class="col-md-6">
                <h3 className="regform">Registration Form</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>Name <span style={{color:"red"}}>∗</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your Full Name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Email-Id <span style={{color:"red"}}>∗</span></Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Mobile Number"
                            name="mobilenumber"
                            value={values.mobilenumber}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Country Name"
                            name="country"
                            value={values.country}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter City Name"
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter State"
                            name="state"
                            value={values.state}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Message</Form.Label><br />
                        <textarea
                            className="text"
                            type="text"
                            placeholder="Enter your message here"
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button variant="info" type="submit" className="button">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default RegistrationForm;