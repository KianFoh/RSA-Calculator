import { useState } from "react";
//import "calculate" function to calculate output from Outputwraper
import { calculate } from "./Calculate"
const Inputwraper = () => {

    // Declare usestate variable 
    // usestate variable are reactive can be update on the user interface
    const [input,setinput] = useState({
        Text: "",
        n: 0,
        e: 0,
    })
    const [final,setfinal] = useState("");

    const [issubmit,setissubmit] = useState(false);

    // Update the value of the input base on the name and value of a event
    // event contain the info of the html tag that called this function
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setinput(values => ({...values, [name]: value}))
    }

    // run this function when user click submit
    const handleSubmit = (event) => {
        // prevent the website from refreshing when a submission occur
        event.preventDefault();
        
        if (/[A-Z]/.test(input.Text) && !(/\s/.test(input.Text)) && input.n > 0 && input.e > 0){
            setfinal(calculate(input.Text,input.n,input.e));
            setissubmit(true);
            console.log(issubmit);
        }
        else 
            alert("Invalid Input : \nText can only contain alphabet and no spacing\nn and e must be a possitive number")
    }


    return {
        final,
        issubmit,
        render_Inputwraper:(
        <div className="wrap_input">

                    <h1>Input</h1>

                    <form action="Input" onSubmit={handleSubmit}>
                        <label htmlFor="" className="Lable">
                            Text
                            <br></br>
                            <input type="text"
                            name = "Text" 
                            placeholder="e g. UP"
                            className="Entry" 
                            onChange={handleChange}
                            />
                        </label>
                        <br></br>

                        <label htmlFor="" className="Lable">
                            n
                            <br></br>
                            <input type="number" 
                             name = "n" 
                             placeholder="e g. 2975"
                             className="Entry" 
                             onChange={handleChange}
                             />
                        </label>
                        <br></br>

                        <label htmlFor="" className="Lable">
                            e
                            <br></br>
                            <input type="number" 
                             name = "e" 
                             placeholder="e g. 12"
                             className="Entry" 
                             onChange={handleChange}
                             />
                        </label>
                        <br></br>
                        <input type="submit" 
                        className="Submit"/>
                    </form>
                </div>
     )
    }
}
 
export default Inputwraper;

