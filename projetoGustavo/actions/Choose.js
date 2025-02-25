import React from 'react';
import FuncaoSoma from './AddFunction.js';
import SubtrairAdd from './SubFunction.js';
import MultiplicarAdd from './MultFunction.js';
import DivisaoAdd from './DiviosnFunction.js';

export default function Choose(choice,num1,num2){
    if (choice === "soma") {
        return FuncaoSoma(num1, num2);
    } else if (choice === "sub") {
        return SubtrairAdd(num1, num2);
    } else if (choice === "mult") {
        return MultiplicarAdd(num1, num2);
    } else if (choice === "div") {
        return DivisaoAdd(num1, num2);
    }
}