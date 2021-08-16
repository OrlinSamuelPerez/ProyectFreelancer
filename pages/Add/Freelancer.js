import Title from "../../Components/Title";
import TextField from '@material-ui/core/TextField';
import { useState } from "react";
import {db} from "../../Database/Initialize";
import {AlertaSatifactoria, AlertaError, ToastAlerta } from "../../Components/Alertas"
export default function Freelancer(){
    const ValorInicial = {
        NombreCompleto:"",
        CorreoElectronico:"",
        NumeroTelefonico:"",
        Edad:"",
        Tiempo:"",
        CostoPromedio:"",
        Habilidades:"",
        Portafolio:"",
        Estado:true,
    }
    const [valor, setValor] = useState(ValorInicial);
    const handleChange=(e)=>{
        const {value, name} = e.target
        setValor({...valor,[name]:value });
    }
    const handleSubmit =async (e)=>{
        e.preventDefault();
        try{
            await db.collection("Freelancer").doc().set(valor)
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
            <Title NameParams="Agregar Freelancer" ButtonParams="Atras" Link="/Empleados"/>
            <form onSubmit={handleSubmit} className="form-add form-freelancer">
                <div className="grid-add-freelancer">
                    <div><TextField onChange={handleChange} value={valor.NombreCompleto} name="NombreCompleto" label="Nombre Completo *" /></div>
                    <div><TextField onChange={handleChange} value={valor.CorreoElectronico} name="CorreoElectronico" label="Correo Electronico *" /></div>
                    <div><TextField onChange={handleChange} value={valor.NumeroTelefonico} name="NumeroTelefonico" label="Numero Telefonico *" /></div>
                    <div><TextField onChange={handleChange} value={valor.Edad} name="Edad" label="Edad *" /></div>
                    <div><TextField onChange={handleChange} value={valor.Tiempo} name="Tiempo" label="Tiempo Disponible *" /></div>
                    <div><TextField onChange={handleChange} value={valor.CostoPromedio} name="CostoPromedio" label="Costo Promedio  *" /></div>
                </div>
                <div><TextField onChange={handleChange} value={valor.Habilidades} name="Habilidades" style={{width:"100%"}} label="Habilidades *" /></div>
                <div><TextField onChange={handleChange} value={valor.Portafolio} name="Portafolio" style={{width:"100%"}} label="Portafolio *" /></div>
                <div>
                    <button onClick={handleSubmit} className="agregar-form" >Agregar Freelancer</button>
                </div>
            </form>
        </main>
    )
}