

function FormField ({type, id, fname, onchange, value, caption, error, ...attr}) {
    return (
        <section className="flex flex-col">
            <label className="pb-0.5 md:text-xl">{caption}</label>
            <input className="p-0.5 mb-4 border-2 border-black"
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