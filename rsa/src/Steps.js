const Steps = ({final, issubmit}) => {


    return ( 
        <div className="Step_wraper">
            {false && (
                <div className="Steps">
                    <h1>Steps</h1>
                    <h3 className="Step1_Description">Step 1 :Change Text to Number representation</h3>
                    <br />

                    <p className="Step1">{final.text_twochar_arr[0]}</p>
  
                    
                </div>
            )}
            
        </div>
     );
}
 
export default Steps;