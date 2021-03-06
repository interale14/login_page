import Form from "../Forms/form";
import FormField from "../Forms/formField";
import {useState} from 'react';
import PillButton from "../cards/PillButton"

function Login () {
    const [formData, setFormData] = useState({
        username : "",
        password : "",
        usernameerror : "",
        passworderror : "",
    });

    const _self = this;

    const myOnSubmit = function(e) {
        e.preventDefault();
        e.stopPropagation();
        const user = formData.username;
        const pswd = formData.password;
        alert(`Usuario: ${user}, Password: ${pswd}`);
    }

    const myOnChange = function(e) {
        const {name, value} = e.currentTarget;
        //validaciones
        let error = null;
        if (name === "password"){
            error = (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/).test(value) ? null : "Contrasena invalida";
        }
        //
        setFormData({...formData, [name]:value, [name + "Error"]: error});

    }

    return (
        <Form>
            <FormField 
                type="text" 
                id="username" 
                fname="username"
                onchange={myOnChange} 
                value={formData.username} 
                caption="Usuario"
                error={formData.usernameerror}
                placeholder="Tu usuario"
            ></FormField>
            <FormField 
                type="password" 
                id="password" 
                fname="password"
                onchange={myOnChange} 
                value={formData.password} 
                caption="Contraseña"
                error={formData.passworderror}
                placeholder="Tu contraseña"
            ></FormField>
            <PillButton type="submit" text="Enviar" click={myOnSubmit}></PillButton>
        </Form>
    );     
}

export default Login;