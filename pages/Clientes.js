import Title from "../Components/Title";
import CardClientes from "../Components/CardClientes";
import {useState, useEffect} from "react";
import {db} from "../Database/Initialize";

export default function Clientes(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        db.collection("Clientes").onSnapshot(snapshot=>{
            const docus = []
            snapshot.forEach(doc=>{
                docus.push({...doc.data(), id:doc.id})
            })
            setData(docus)
            
        })
    },[])
    return(
        <main>
            <Title NameParams="Clientes Agregados" ButtonParams="Añadir Cliente" Link="Add/Clientes"/>
            <div className="grid-card-freelancer">
                {data.length!=0?
                    data.map(doc=>
                        <div key={doc.id}>
                            <CardClientes Nombre={doc.NombreCompleto} Correo={doc.CorreoElectronico} Telefono={doc.NumeroTelefonico} Pago={doc.MetodoPago}/>

                        </div>
                    )
                    :<h1>Por ahora no hy freelancer</h1>
                }
            </div>
        </main>
    )
} 