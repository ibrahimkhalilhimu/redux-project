import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../actions/ContactAction';
import shortid from 'shortid'
import { useHistory } from 'react-router-dom';

const AddContact = () => {

        let history = useHistory()
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

        const createContact = e => {
            e.preventDefault();
            const new_contact = {
                id:shortid.generate(),
                name: name,
                phone: phone,
                email: email,
            }
            dispatch(addContact(new_contact))
            history.push('/')
           
        }
    return (
        <div className="container pt-5 mt-5">
           <div className="card border-0 shadow">
            <div className="card-header text-center"><h3>Add a Contact</h3></div>
            <div className="card-body">
                <form onSubmit={(e)=> createContact(e)}>
                    <div className="form-group">
                        <input 
                        className="form-control" 
                        type="text"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        className="form-control" 
                        type="number"
                        placeholder="Enter Your Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group" >
                        <input 
                        className="form-control" 
                        type="email"
                        placeholder="Enter Your E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                        <button className="btn btn-primary">Create Contact</button>
                </form>
            </div>
           </div>
        </div>
    );
};

export default AddContact;