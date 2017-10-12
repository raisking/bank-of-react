import React from 'react';

import CreditsList from './CreditsList';
import AccountBalance from  './AccountBalance';
import {Link} from 'react-router-dom';

const CreditsPage = (props) =>{
    return(
        <div>
              <h1>Credits</h1>
              <Link to ="/">Back to Home</Link>

              <AccountBalance accountBalance = {props.accountBalance}/>
                
        
        </div>
    )
}
