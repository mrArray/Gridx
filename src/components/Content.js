import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import State from './State';
import Feeder from './Feeder';
import Region from './Region';
import Meter from './Meter';
import Csp from './Csp';
import Transformer from './Transformer';
import Login from './Login';
import Landing from './Landing';
import Capture from './Capture';
import HTOperation from './HTOperation';
import Profile from "./profile.component";
import Welcome from './Welcome';
import LoadReadings from './LoadReadings';
import Enumerators from './Enumerators'
import PerformanceEnumerators  from './PerformanceEnumerators'
import Hourly from './Hourly';
import Daily from './Daily';
import Monthly from './Monthly';
import Yearly from './Yearly';






const  Content = () => {
    return (
       <Switch>
           <Route exact path="/" component={Landing}/>
           <Route  path="/landing" component={Landing}/>


           {/* <Route exact path="/" component={Login}/>
           <Route  path="/login" component={Login}/> */}

           <Route exact path="/profile" component={Profile} />
 
           <Route  path="/dashboard" component={Dashboard}/>

           <Route exact path="/" component={State}/>
           <Route  path="/state" component={State}/>

           <Route exact path="/" component={Feeder}/>
           <Route  path="/feeder" component={Feeder}/>

           <Route exact path="/" component={Region}/>
           <Route  path="/region" component={Region}/>

           <Route exact path="/" component={Enumerators}/>
           <Route  path="/enumerators" component={Enumerators}/>

           <Route exact path="/" component={Capture}/>
           <Route  path="/capture" component={Capture}/>

           <Route exact path="/" component={HTOperation}/>
           <Route  path="/operationht" component={HTOperation}/>

           <Route exact path="/" component={LoadReadings}/>
           <Route  path="/loadreadings" component={LoadReadings}/>

           <Route exact path="/" component={PerformanceEnumerators}/>
           <Route  path="/performanceenum" component={PerformanceEnumerators}/>
           

           

           <Route exact path="/" component={Meter}/>
           <Route  path="/meter" component={Meter}/>

           <Route exact path="/" component={Csp}/>
           <Route  path="/csp" component={Csp}/>

           <Route exact path="/" component={Transformer}/>
           <Route  path="/transformer" component={Transformer}/>

           <Route exact path="/" component={Welcome}/>
           <Route  path="/welcome" component={Welcome}/>

           <Route exact path="/" component={Hourly}/>
           <Route  path="/hourly" component={Hourly}/>

           <Route exact path="/" component={Daily}/>
           <Route  path="/daily" component={Daily}/>
           
           <Route exact path="/" component={Monthly}/>
           <Route  path="/monthly" component={Monthly}/>
           
           <Route exact path="/" component={Yearly}/>
           <Route  path="/yearly" component={Yearly}/>






          
       </Switch>

       
    )
}


export default Content;