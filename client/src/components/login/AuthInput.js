import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

function AuthInput(props) {
    const { type, name, label, state, handleChange } = props;

    return (
        <FormGroup>
            <Label htmlFor={name}>{label}</Label>
            <Input
                type={type}
                id={name}
                name={name}
                onChange={handleChange}
            />
        </FormGroup>
    );
};

export default AuthInput;