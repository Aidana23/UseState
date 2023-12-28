import React, {useState,} from 'react';
import './Counter.css'
import Button from './Button';

const Counter = () => {

    const [count, setCount] = useState(0)

    const counterPlus = () => setCount(prev => prev + 1)
    const counteeMinus = () => setCount(prev => prev - 1)
    const counterMultyPlay = () => setCount(prev => prev * 2)
    const counterDivide = () => setCount(prev => prev / 2)
    const counterReset = () => setCount(0)


    const checkZero = count === 0
    const checkTen = count === 10


    return (
        <section id='counter'>
            <div className="container">

                <h2>Counter</h2>

                <Button
                name = '+'
                action = {counterPlus}
                disabledButton = {checkTen}
                />

                <span>{count}</span>

                <Button
                  name = '-'
                  action = {counteeMinus}
                  disabledButton = {checkZero}
                />
                <Button
                  name = 'reset'
                  action = {counterReset}
                  disabledButton = {checkZero}
                />
                <Button
                  name = '*'
                  action = {counterMultyPlay}
                  disabledButton = {checkTen}
                />
                <Button
                  name = '/'
                  action = {counterDivide}
                  disabledButton = {checkZero}
                />
            </div>
            
        </section>
    );
};

export default Counter;