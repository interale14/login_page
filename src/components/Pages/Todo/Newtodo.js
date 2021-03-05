import {MdAdd} from 'react-icons/md';
import FormField from "../../Forms/formField";

function NewTodo ({onChange, value, onAddNew}) {
    
    return (
        <section className="TodoAddNew">
            <section className="flex items-center justify-between px-4 border">
                <FormField
                    type="text"
                    id="textNTodo"
                    name="txtNTodo"
                    onChange={onChange}
                    value={value}
                    caption="Nuevo Todo"
                    onKeyUp={(e) => { if(e.keycode === 13) {onAddNew(e);} }}
                ></FormField>
                <MdAdd size={30} onClick={onAddNew}></MdAdd>
            </section>
        </section>
    );
}

export default NewTodo;