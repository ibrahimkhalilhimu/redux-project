import React from 'react';
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../actions/ContactAction';



const Contact = ({contact, selectAll}) => {

    const dispatch = useDispatch();
    const {name, email, phone, id}= contact;
    return (
        <tr>
         <td>
        <div className="custom-control custom-checkbox">
        <input 
        checked={selectAll}
        type="checkbox"
         className="custom-control-input"
         />
        <label className="custom-control-label"></label>
        </div>
        </td>
      <td>
          <Avatar className="mr-2" name={name} size="45" round={true} />
          {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="action">
            <Link to={`/contacts/edit/${id}`}>
                <span className="material-icons mr-2">edit</span>
            </Link>
            
           
    <span className="material-icons text-danger" onClick={() =>dispatch(deleteContact(id))}>remove_circle</span>
           
      </td>

      </tr>
    );
};

export default Contact;