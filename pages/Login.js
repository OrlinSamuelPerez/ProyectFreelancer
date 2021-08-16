import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {auth} from "../Database/Initialize"
export default function Login(){
    const Iniciar = ()=>{
        const correoUsuario = document.getElementById("email").value;
        const claveUsuario = document.getElementById("password").value;
        auth.signInWithEmailAndPassword(correoUsuario, claveUsuario)
    }
    return(
        <div className="iniciar-seccion">
            <h1>Iniciar Seccion</h1>
            <div className="seccion">
                <div>
                    <TextField style={{width:"100%", height:"80px"}} id="email" label="Tu Correo" />
                </div>
                <div>
                    <TextField style={{width:"100%", height:"80px"}} id="password" type="password" label="Ingresa tu contraseña" />
                </div>
                <div>
                    <Button onClick={Iniciar} style={{width:"100%", height:"40px", marginTop:"25x"}} variant="contained" color="primary">
                        Ingresar
                    </Button>
                </div>
            </div>
        </div>
    )
}