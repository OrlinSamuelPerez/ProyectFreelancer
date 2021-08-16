import Link from "next/link";
export default function Title(props) {
    return(
        <div className="title-main">
            <div><h1>{props.NameParams}</h1></div>
            <div>
                <Link href={props.Link}><a><button >{props.ButtonParams}</button></a></Link>
            </div>
        </div>
    )
}