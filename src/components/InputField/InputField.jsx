import React from "react";
import { useMemo } from "react";
import { InputFieldContainer } from "./InputFieldStyle";


export default function InputField({ Label, Type, Placeholder }) {
    


const IdForInput = useMemo(() => Label.toString().replace(/\s/g, "_"), [Label])

    return (
        <InputFieldContainer>
            <label htmlFor={IdForInput}>{Label}</label>
            <input type={Type} id={IdForInput} placeholder={Placeholder} />
        </InputFieldContainer>
    );
}
