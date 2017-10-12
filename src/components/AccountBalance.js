import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom'

class AccountBalance extends Component {
    state = {
        redirectToHome: false
      }
    
      saveSomething = () => {
        console.log('Clicked')
    
        setTimeout(() => {
          this.setState({redirectToHome: true})
        }, 1500)
      }
  render() {
    if (this.state.redirectToHome) {
        return <Redirect to="/" />
      }

    return (
        <div>
       AccountBalance is {this.props.accountBalance}
  <button onClick={this.saveSomething}>Redirect Button</button> 
        <div>
        <button>Debit</button>
        </div>
        <div>
        <button>Credit</button>
        </div>
        <div>

        </div>
       <div>
       <Link to="/">Back</Link>
       </div>
       <div>
       <Link to="/user">UserProfile</Link>
       </div>
        </div>
    );
  }
}

export default AccountBalance;