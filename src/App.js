import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import AccountBalance from './components/AccountBalance';
import UserProfile from './components/UserProfile';
import CreditPage from './components/CreditPage';

import axios from 'axios'

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {
        userName: 'Bob',
        memberSince: 1999
      },
      debits: [],
      credits: [],
    }
  }

  _getDebits = () => {
    axios.get('http://localhost:4000/debits')
      .then((response) => {
        const debits = response.data;
        this.setState({ debits });
      })
  }
  _getCredits = () => {
    axios.get('http://localhost:4000/credits')
      .then((response) => {
        const credits = response.data;
        this.setState({ credits });
      })
  }
  _calculateAccountBalance = () => {
    const totalCredits = this.state.credits.reduce((totalCredits, credit) => {
      return totalCredit + credit.amount;
    }, 0);

    const totalDebits = this.state.debits.reduce((totalDebits, debits) => {
      return totalDebits + debit.amount;
    }, 0);

    return totalCredits - totalDebits;

  };

  _addNewCredit = (newDebit) =>{
    const debits = [...this.state.debits];
    debits.push(newDebit);
    this.setState({debits});
  }
  _addNewCredit = (newCredit)=>{
    const credits = [...this.state.credits];
    credits.push(newCredit);
    this.setState({credits});
  }

  componentWillMount(){
    this._getDebits();
    this._getCredits();
  }
  
  render() {

    const accountBalance = this._calculateAccountBalance();


    
    const AccountBalanceWrapper = () => {
      return (<AccountBalance accountBalance={this.state.accountBalance} />)
    }
    const UserProfileWrapper = () => {
      return (<UserProfile user={this.state.user} />)
    }
    const DebitsPageComponent = () => (
      <DebitsPage
        debits = {this.state.debits}
          addNewDebit = {this._addNewDebit}
          accountBalance = {accountBalance} />
    )
    const CreditsPageComponent = () => (
      <CreditPage
        credits={this.state.credits}
        addNewCredit={this._addNewCredit}
        accountBalance={accountBalance} />
    )


    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" render={AccountBalanceWrapper} />
          <Route exact path="/user" render={UserProfileWrapper} />
        </Switch>

      </Router>
    )
  }
}
export default App;
