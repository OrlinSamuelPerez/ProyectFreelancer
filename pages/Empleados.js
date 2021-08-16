import Title  from "../Components/Title";
import {useState, useEffect} from "react";
import {db} from "../Database/Initialize";
import CardFreelancer from "../Components/CardFreelancer";
export default function Empleados(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        db.collection("Freelancer").onSnapshot(snapshot=>{
            const docus = []
            snapshot.forEach(doc=>{
                docus.push({...doc.data(), id:doc.id})
            })
            setData(docus)
            
        })
    },[])
    return(
        <main>
            <Title NameParams="Freelancer Contratados" ButtonParams="Añadir Freelancer" Link="Add/Freelancer"/>
            <div className="grid-card-freelancer">
                {data.length!=0?
                    data.map(doc=>
                        <CardFreelancer Nombre={doc.NombreCompleto} Correo={doc.CorreoElectronico} Telefono={doc.NumeroTelefonico} Habilidades={doc.Habilidades} Portafolio={doc.Portafolio}/>
                    )
                    :<h1>Por ahora no hy freelancer</h1>
                }
            </div>
        </main>
    )
}