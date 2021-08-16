import Title from "../../Components/Title";
import TextField from '@material-ui/core/TextField';
export default function Cartera(){
    return(
        <main>
            <Title NameParams="Agregar Proyecto" ButtonParams="Atras" Link="/"/>
            <form className="form-add form-cartera">
                <div className="grid-add-freelancer">
                    <div><TextField label="Nombre Completo *" /></div>
                    <div><TextField label="Correo Electronico *" /></div>
                    <div><TextField label="Numero Telefonico *" /></div>
                    <div><TextField label="Edad *" /></div>
                    <div><TextField label="Tiempo Disponible *" /></div>
                    <div><TextField label="Costo Promedio  *" /></div>
                </div>
                <div><TextField style={{width:"100%"}} label="Habilidades *" /></div>
                <div><TextField style={{width:"100%"}} label="Portafolio *" /></div>
                <div>
                    <button className="agregar-form" >Agregar Freelancer</button>
                </div>
            </form>
        </main>
    )
}