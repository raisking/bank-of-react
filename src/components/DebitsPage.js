import React from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

const DebitsPage = (props) => {
    return(
        <div>
            <h1>Debits</h1>
            <AccountBalance accountBalance = {props.accountBalance}/>
            <NewDebitForm addNewDebit = {props.addNewDebit}/>


        </div>

    )
}

export default DebitsPage;