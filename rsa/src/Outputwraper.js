const Outputwraper = ({final}) => {



    return ( 
        <div className="wrap_output">
            <h1>Output</h1>
            <p className="Answer">Final Answer :</p>
            <br />
            <p className="Answer">{final.final}</p>
        </div>
    );
}


export default Outputwraper;


