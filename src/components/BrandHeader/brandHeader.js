import Navbar from "../NavBar/navbar";
import Brand from "./brand";
import "./BrandHeader.css"

function BrandHeader ({children}) {

    return (
        <header>
            <Brand title="Mi App con React"></Brand>
            <Navbar></Navbar>
        </header>
    );
}

export default BrandHeader;