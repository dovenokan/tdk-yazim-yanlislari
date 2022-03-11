/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useHistory} from 'react-router-dom'
import { auth } from '../firebases/firestore';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function Navbar(props) {
    const his = useHistory()
    const logo = "https://i.ibb.co/4YzNtMF/logo.png"
    const usergmail = props.usergmail || "mike@gmail.com"
    const userimg = props.userimg || "https://i.redd.it/t061tkmdi4y31.jpg"

    const navbar_styles = {
        color:" text-gray-100 ",
        lihover:" hover:bg-blue-700 ",
        texthover:" hover:text-white ",
        rounded:" rounded-md ",
        padding:" px-1 py-2 ",
        text_size:" text-base ",
        font:" font-medium "
    }
  
    return (
      <Router>
        <div className="Navbar">
          <ul className="nav">
            <li className="nav-bg" onClick={() => his.push("/")} >
              <p className="a-like">Schedule</p>
            </li>
            
            <li className="nav-bg" onClick={() => his.push("/new")} >
              <p className="a-like">New</p>
            </li>

            <li className="nav-bg" onClick={() => his.push("/me")} >
              <p className="a-like">Me</p>
            </li>

            <li className="nav-bg" onClick={function(){auth.signOut();}}>
              <p className="a-like">Exit</p>
            </li>
          </ul>
        </div>
      </Router>
      )
  }
  
  export default Navbar