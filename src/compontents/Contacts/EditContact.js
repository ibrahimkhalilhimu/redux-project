import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, updateContact } from '../../actions/ContactAction';
import { useHistory, useParams } from 'react-router-dom';

const EditContact = () => {

    let {id} = useParams();
        let history = useHistory()
    const dispatch = useDispatch();
    const contact = useSelector((state)=> state.contact.contact)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

        const onUpdateContact = e => {
            e.preventDefault();
            const update_contact =Object.assign(contact, {
                name: name,
                phone: phone,
                email: email,
            })
            dispatch(updateContact(update_contact))
            history.push('/')
        }

        useEffect(() => {
            if(contact != null) {
                setName(contact.name)
                setPhone(contact.phone)
                setEmail(contact.email) 
            }
            dispatch(getContact(id))
        },[contact])

    return (
        <div className="container pt-5 mt-5">
           <div className="card border-0 shadow">
            <div className="card-header text-center"><h3>Update a Contact</h3></div>
            <div className="card-body">
                <form onSubmit={(e)=> onUpdateContact(e)}>
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
                        <button className="btn btn-warning">Update Contact</button>
                </form>
            </div>
           </div>
        </div>
    );
};

export default EditContact;