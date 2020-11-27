import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { clearAllContact, selectAllContact,deleteAllContact } from '../../actions/ContactAction';
import Contact from './Contact';


const Contacts = () => {

  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false)
  const contacts = useSelector(state => state.contact.contacts)
  const selectedContacts = useSelector(state => state.contact.selectedContact)

  useEffect(() => {
    if(selectAll) {
      dispatch(selectAllContact(contacts.map(contact => contact.id)))
    } 

    else{
      dispatch(clearAllContact())
    }
    
  },[selectAll])

    return (
        <div className="container mt-5 pt-5">
          {
            selectedContacts.length > 1 ? (
              <button className="btn btn-danger" onClick={() =>dispatch(deleteAllContact())}>Delete All</button>
            ): null
          }
            <table className="table shadow">
  <thead className="bg-danger text-white">
    <tr>
      <th>
        <div className="custom-control custom-checkbox">
        <input id="selectAll" type="checkbox" className="custom-control-input"
        value={selectAll}
        onClick={()=>setSelectAll(!selectAll)}
        />
        <label 
        htmlFor="selectAll"
        className="custom-control-label"></label>
        </div>
      </th>
      <th >Name</th>
      <th >Phone</th>
      <th >E-Mail</th>
      <th >Action</th>
    </tr>
  </thead>
  <tbody>
    {
      contacts.map((contact)=>(
       <Contact contact={contact} key={contact.id} selectAll={selectAll}/>))
    }
    
  </tbody>
</table>
        </div>
    );
};

export default Contacts;