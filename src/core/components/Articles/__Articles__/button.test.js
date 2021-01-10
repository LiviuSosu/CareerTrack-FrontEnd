import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button'

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
})

/*
https://www.youtube.com/watch?v=3e1GHCA3GP0&ab_channel=techsith
npm install @testing-library/react react-test-render jest-dom --save-dev
*/