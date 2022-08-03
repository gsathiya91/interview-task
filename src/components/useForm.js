import React, { useState } from "react";

function ValidateForm(ValidateValues) {
    const [values, setValues] = useState({
        name: "",
        email: "",
        mobilenumber: "",
        country: "",
        city: "",
        state: "",
        message: ""
    })
    const [errors, setErrors] = useState({})
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(ValidateValues(values))
        setValues({
            name: "",
            email: "",
            mobilenumber: "",
            country: "",
            city: "",
            state: "",
            message: ""
        })
    }
    console.log(values)
    return { handleChange, values, handleSubmit, errors }
}

export default ValidateForm;
