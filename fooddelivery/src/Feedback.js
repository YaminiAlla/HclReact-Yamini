import React, { Component } from 'react';
import User from './model/User';

class Feedback extends Component {
user:User
 
    render() {
 
        return (
 
            <div className="container">
 
                <div className="jumbotron py-3">
 
                    <p className="h4 text-center">Feedback Form</p>
 
                </div>
 
                <form onSubmit={(event) => this.handleSubmit(event)}>
 
                    <fieldset>
 
                        <div className="form-group">
                        <label>userName</label>
                            <input type="text" className="form-control" placeholder="Enter username"/>
 
                            </div>
 
                            <div className="form-group">
                            <label>Feedback</label>
                            <textarea className="form-control" placeholder="give your feedback here" rows="3"></textarea>
                            
                            </div>
              
                           <button className="btn btn-primary" >Submit</button>
                    </fieldset>
                    </form>
                        </div>
 
        );
 
    }
 
}
 
export default Feedback;