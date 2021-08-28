import Title from "../../Components/Title";
import {useState, useEffect} from "react";
import {db} from "../../Database/Initialize";
import TextField from '@material-ui/core/TextField';

export default function Cartera(){
    const [dataCliente, setDataCliente] = useState([]);
    const [dataFreelancer, setDataFreelancer] = useState([]);
    useEffect(()=>{
        const DATACLIENTE = [];
        const DATAFREELANCER = [];
        db.collection("Clientes").onSnapshot(snapshot=>{
            snapshot.forEach(doc=>{
                DATACLIENTE.push({...doc.data(), id:doc.id})
            })
            setDataCliente(DATACLIENTE)
        })
        db.collection("Freelancer").onSnapshot(snapshot=>{
            snapshot.forEach(doc=>{
                DATAFREELANCER.push({...doc.data(), id:doc.id})
            })
            setDataFreelancer(DATAFREELANCER)
        })
    },[]);
    const ValorInicial = {
        NombreProyecto:"",
        InicioProyecto:"",
        PlazoProyecto:"",
        PresupuestoProyecto:"",
        MetodoPagoProyecto:"",
        IncialPagoProyecto:"",
        Requerimiento:"",
        Clientes:[],
        Freelancer:[],
        Nota:""
    }
    const [valor, setValor] = useState(ValorInicial);
    const handleChange=(e)=>{
        const {value, name} = e.target
        setValor({...valor,[name]:value });
    }
    const handleSubmit =async (e)=>{
        e.preventDefault();
    }
    const [arrayCliente, setArrayCliente]= useState([]);
    const [arrayFreelancer, setArrayFreelancer]= useState([]);
    const searchChangeCliente = (e)=>{
        e.preventDefault();
        const {value} = e.target;
        const indexLether = value.length;
        const result = dataCliente.filter(word =>{
            const wordSearch = word.NombreCompleto;
            const wordNow = wordSearch.substr(0,indexLether);
            return wordNow.toLowerCase() === value.toLowerCase()
        })

        setArrayCliente(result)
    }

    const clickCliente =(object)=>{
        valor.Clientes.push({...object})
        setArrayCliente([])
    }
    const clickFreelancer =(object)=>{
        valor.Freelancer.push({...object})
        setArrayFreelancer([])
    }
    const removeItemFromArray =(arr, data)=> {
           const i = arr.indexOf(data)
           arr.splice( i, 1 );          
            
    }
     
    const searchChangeFreelancer = (e)=>{
        e.preventDefault();
        const {value} = e.target;
        const indexLether = value.length;
        const result = dataFreelancer.filter(word =>{
            const wordSearch = word.NombreCompleto;
            const wordNow = wordSearch.substr(0,indexLether);
            return wordNow.toLowerCase() === value.toLowerCase()
        })

        setArrayFreelancer(result)
    }
    return(
        <main>
            <Title NameParams="Agregar Proyecto" ButtonParams="Atras" Link="/"/>
            <form onSubmit={handleSubmit} className="form-add form-Cartera">
                <div className="grid-add-freelancer">
                    <div><TextField onChange={handleChange} value={valor.NombreProyecto} name="NombreProyecto" label="Nombre Proyecto *" /></div>
                    <div><TextField onChange={handleChange} value={valor.InicioProyecto} name="InicioProyecto" type="date" label="Incio del Proyecto *" /></div>
                    <div><TextField onChange={handleChange} value={valor.PlazoProyecto} name="PlazoProyecto" type="date" label="Feha limite Proyecto *" /></div>
                    <div><TextField onChange={handleChange} value={valor.PresupuestoProyecto} name="PresupuestoProyecto"  label="Presupuesto *" /></div>
                    <div><TextField onChange={handleChange} value={valor.MetodoPagoProyecto} name="MetodoPagoProyecto"  label="Metodo Pago *" /></div>
                    <div><TextField onChange={handleChange} value={valor.IncialPagoProyecto} name="IncialPagoProyecto"  label="Incial Pago *" /></div>
                </div>
                    <div><TextField onChange={handleChange} value={valor.Nota} name="Nota" style={{width:"100%"}} label="Notas del Proyecto *" /></div>
                    <div><TextField onChange={handleChange} value={valor.Requerimiento} name="Requerimiento" style={{width:"100%"}} label="Requirimento *" /></div>
                    <div><TextField onChange={searchChangeCliente}  name="Clientes" style={{width:"100%"}} label="Clientes *" /></div>
                    <div> 
                        {valor.Clientes.length===0?
                            <span></span>    
                            :valor.Clientes.map(doc=>
                                <span key={doc.id} className="mini-card">{doc.NombreCompleto}<button onClick={()=>removeItemFromArray(valor.Clientes,doc)}>X</button></span>
                            )
                        } 
                </div>
                    <div>
                        {arrayCliente.length === 0?<span></span>
                            :arrayCliente.map(doc=>
                                <div key={doc.id} onClick={()=>clickCliente(doc)} className="searchBuscar">
                                    <div className="NombreCompleto">{doc.NombreCompleto}</div>
                                    <div>{doc.id}</div>
                                </div>    
                            )    
                         }
                    </div>
                    <div><TextField onChange={searchChangeFreelancer}  name="Clientes" style={{width:"100%"}} label="Freelancer *" /></div>
                    <div> 
                        {valor.Freelancer.length===0?
                            <span></span>    
                            :valor.Freelancer.map(doc=>
                                <>
                                
                                <span key={doc.id} className="mini-card">{doc.NombreCompleto}<button onClick={()=>removeItemFromArray(valor.Freelancer,doc)} >X</button></span>
                                </>
                            )
                        } 
                    </div>
                    <div>
                        {arrayFreelancer.length === 0?<span></span>
                            :arrayFreelancer.map(doc=>
                                <div key={doc.id} onClick={()=>clickFreelancer(doc)} className="searchBuscar">
                                    <div className="NombreCompleto">{doc.NombreCompleto}</div>
                                    <div>{doc.Habilidades}</div>
                                </div>    
                            )    
                         }
                    </div>
                <div>
                    <button onClick={handleSubmit} className="agregar-form" >Agregar Proyectos</button>
                </div>
            </form>
        </main>
    )
}