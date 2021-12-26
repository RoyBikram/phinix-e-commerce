import React from "react";
import { useMemo } from "react";
import { InputFieldContainer } from "./InputFieldStyle";


export default function InputField({ Label, Type, Placeholder,Value }) {
    

const IdForInput = useMemo(() => Label.toString().replace(/\s/g, "_"), [Label])

    return (
        <InputFieldContainer>
            <label htmlFor={IdForInput}>{Label}</label>
            <input name={Label.toLowerCase().replaceAll(" ","_").replaceAll("/","_")} required={true} type={Type} value={Value} id={IdForInput} placeholder={Placeholder} />
        </InputFieldContainer>
    );
}
