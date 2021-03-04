import {NavLink} from 'react-router-dom';

function NBitems ({label, uri}) {
    return (
        <NavLink to={uri}>{label}</NavLink>
    );
}

export default NBitems;