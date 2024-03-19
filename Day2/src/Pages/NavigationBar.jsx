import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export default function NavigationBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Login</Link>
                </li>
            </ul>
        </nav>
    )
}