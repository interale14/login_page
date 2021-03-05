import NBitems from "./navbaritems";
import "./navbar.css"

function NavBar () {
    let dummyData = [
        {label: "Home", uri: "/home"},
        {label: "Login", uri: "/login"},
        {label: "To-Do", uri: "/todos"},
    ];

    let navBarItems = dummyData.map((o, i)=>{
        return (
            <NBitems
                label={o.label} 
                uri={o.uri} 
                key={i}>
            </NBitems>
        );
    });
    return (
        <nav>
            <ul>
                <li>{navBarItems}</li>
            </ul>
        </nav>

    );
}

export default NavBar;