import Avatar from '@material-ui/core/Avatar';
export default function CardFreelancer(props){
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
                <h3>Habilidades</h3>
                <span>{props.Habilidades}</span>
            </div>
            <div>
                <h3>Portafolio</h3>
                <a href={props.Portafolio} target="_blank">Ver Portafolio</a>
            </div>
        </div>
    )
}