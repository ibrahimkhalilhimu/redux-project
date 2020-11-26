import React from 'react';
import {useSelector} from 'react-redux'
import Contact from './Contact';


const Contacts = () => {

  const contacts = useSelector(state => state.contacts)
console.log(contacts);
    return (
        <div className="container mt-5 pt-5">
            <table className="table shadow">
  <thead className="bg-danger text-white">
    <tr>
      <th>
        <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input"/>
        <label className="custom-control-label"></label>
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
       <Contact contact={contact} key={contact.id}/>))
    }
    
  </tbody>
</table>
        </div>
    );
};

export default Contacts;