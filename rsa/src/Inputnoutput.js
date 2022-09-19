import Inputwraper from './Inputwraper'
import Outputwraper from './Outputwraper';

const Inputnoutput = () => {
    const {render_Inputwraper, final, issubmit} = Inputwraper();
    
    return {
        final,
        issubmit,
        render_Inputnoutput:(
            <div className="inputnoutput">
                {render_Inputwraper}
                <Outputwraper {...{final}}></Outputwraper>
                
            </div>
        )
    }

}
 
export default Inputnoutput;