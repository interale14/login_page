import NBitems from "./navbaritems";
import "./navbar.css"

function NavBar () {
    let dummyData = [
        {label: "Home", uri: "#home"},
        {label: "Tarjetas", uri: "#cards"},
        {label: "Acerca", uri: "#acerca"},
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
                {navBarItems}
            </ul>
        </nav>

    );
}

export default NavBar;