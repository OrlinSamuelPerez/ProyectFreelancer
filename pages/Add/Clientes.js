import Title from "../../Components/Title";
import TextField from '@material-ui/core/TextField';
import {useState} from "react";
import {db} from "../../Database/Initialize";
import {AlertaSatifactoria, AlertaError, ToastAlerta } from "../../Components/Alertas"

export default function Clientes(){
    const ValorInicial ={
        NombreCompleto:"",
        CorreoElectronico:"",
        NumeroTelefonico:"",
        MetodoPago:"",
    }
    const [valor, setValor] = useState(ValorInicial);
    const handleChange=(e)=>{
        const {value, name} = e.target
        setValor({...valor,[name]:value });
    }   
    const handleSubmit =async (e)=>{
        e.preventDefault();
        try{
            await db.collection("Clientes").doc().set(valor)
            setValor({...ValorInicial})
            AlertaSatifactoria()
        }
        catch (error){
            console.log(error)
            AlertaError()
        }
    }
    return(
        <main>
            {ToastAlerta}
            <Title NameParams="Agregar Clientes" ButtonParams="Atras" Link="/Clientes"/>
            <form onSubmit={handleSubmit} className="form-add form-freelancer">
                <div className="grid-add-freelancer">
                    <div><TextField onChange={handleChange} value={valor.NombreCompleto} name="NombreCompleto" label="Nombre Completo *" /></div>
                    <div><TextField onChange={handleChange} value={valor.CorreoElectronico} name="CorreoElectronico" label="Correo Electronico *" /></div>
                    <div><TextField onChange={handleChange} value={valor.NumeroTelefonico} name="NumeroTelefonico" label="Numero Telefonico *" /></div>
                    <div><TextField onChange={handleChange} value={valor.MetodoPago} name="MetodoPago" label="Metodo Pago *" /></div>

                </div>
                <div>
                    <button onClick={handleSubmit} className="agregar-form" >Agregar Freelancer</button>

                </div>
            </form>
        </main>
    )
}