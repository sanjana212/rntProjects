import { Link } from "react-router-dom";
import './TaskNav.css';
const TaskNav = () => {
    return (
        <div className="nav-bar mb-5" id="color">
            <nav className="navbar navbar-expand-lg  ">
                <ul className="navbar-nav d-flex justify-content-start">
                    <li className="nav-item">
                        <Link className="link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="link" to='/Table'>Form</Link>
                    </li>

                    <li className="nav-item ">
                        <Link  className="link" to='/Checkbox'>Checkbox </Link>
                    </li>
                    <li className="nav-item ">
                        <Link  className="link" to='/Form'>Form</Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}
export default TaskNav;