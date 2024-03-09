import { useState } from "react"

export default function Lottery(){
    let [randomNumber, setRandomNumber] = useState();
    let [message, setMessage] = useState("");
    let [lotteryTicketMessage, setLotteryTicketMessage] = useState("");
    
    let number = () => Math.floor((Math.random()* (999 - 100))+100);
    let newRandomNumber = number();

    let generateRandomNumber = () => {
        setRandomNumber(() => {
            randomNumber = newRandomNumber;
            return randomNumber;
        });
    }

    let generateTicketMessage = () => {
        setMessage(() => {
            message = `Ticket number is ${newRandomNumber}`;
            return message;
        });
    }

    let sumOfRandomNumber = () => {
        setLotteryTicketMessage(() => {
            let randomNumberString = newRandomNumber.toString();
            let sum =0;
            for(let i=0;i<randomNumberString.length;i++){
                sum += parseInt(randomNumberString[i]);
            }   
            console.log(sum);
            if(sum == 15){
                return lotteryTicketMessage = `Congratulations! You've won the lottery`;
            }
            else {
                return lotteryTicketMessage = `Oh no! You've lost. Try again.`
            }
        })   
    }

    return (
        <div>
            <h1>LOTTERY</h1>
            <button onClick={() => {generateRandomNumber(), generateTicketMessage(), sumOfRandomNumber()}}>Generate Ticket</button>
            <h3>{ message }</h3>
            <br />
            <h2>{ lotteryTicketMessage }</h2>
        </div>
    )
}