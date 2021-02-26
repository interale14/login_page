

function FormField ({type, id, fname, onchange, value, caption, error, ...attr}) {
    return (
        <section>
            <label>{caption}</label>
            <input className="m-4 border-2 border-black"
                type={type}
                id={id}
                name={fname}
                onChange={onchange}
                value={value}
                {...attr}
            />
            {(error && true) ? (<section>{error}</section>):null }
        </section>
    );
}

export default FormField;