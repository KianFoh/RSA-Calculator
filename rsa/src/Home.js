import Header from './Header';
import Inputnoutput from './Inputnoutput'
import Steps from './Steps';
const Home = () => {
    const {render_Inputnoutput, final, issubmit} = Inputnoutput();
    return ( 
        <div className="Home" >
            <Header></Header>
            {render_Inputnoutput}
            <Steps {...{final, issubmit}}></Steps>
            
        </div>
    );
}
 
export default Home;