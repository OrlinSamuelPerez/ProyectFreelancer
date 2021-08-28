import Avatar from '@material-ui/core/Avatar';

export default function CardClientes(props){
    const Nombre_Primer_Letra =props.Nombre.substring(0,1)
    return(
        <div className="CardFreelancer">
             <div className="flex-CardFreelnacer">
                <Avatar style={{marginTop:"12px", marginRight:"13px"}}>{Nombre_Primer_Letra}</Avatar>
                <h1>{props.Nombre}</h1>
            </div>
            <div>
                <h3>Contactos</h3>
                <span>{props.Correo}</span><br></br>
                <span>{props.Telefono}</span>
            </div>
            <div>
                <h3>Pago</h3>
                <span>{props.Pago}</span>
            </div>

        </div>
    )
}