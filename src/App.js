
import Contacts from './compontents/Contacts/Contacts';
import NavBar from './compontents/NavBar/NavBar';
import './App.css';
import {provider,Provider} from 'react-redux';
import store from './store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddContact from './compontents/Contacts/AddContact';
import EditContact from './compontents/Contacts/EditContact';


function App() {
  return (
    <Provider store={store}>
     <Router>
     <div className="App">
     <NavBar/>
    </div>
       <Switch>
         <Route exact path="/">
         <Contacts/>
         </Route>
         <Route path="/contacts/add">
           <AddContact/>
         </Route>
         <Route path="/contacts/edit/:id">
           <EditContact/>
         </Route>
       </Switch>
     </Router>
    </Provider>
  );
}

export default App;
