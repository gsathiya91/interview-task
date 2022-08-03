import React from "react";

export default function ValidateValues(values){
    let errors = {};

    if(!values.name.trim()){
        errors.name = "Name is Required"
    }
    if(!values.email.trim()){
        errors.email = "Email is Required"
    }
    else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email = "Email is invalid"
    }
    return errors;
}