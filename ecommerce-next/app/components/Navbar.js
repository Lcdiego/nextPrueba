
import Link from "next/link"



const Navbar = () => {
    return(
        <div>
               <Link className="text-blue-500 mr-5" href='/'>
            
            home
            </Link>
            <Link className="text-blue-500 mr-5" href='/pages/about'>
            
            about
            </Link>

            <Link className="text-blue-500 mr-5" href='/pages/contactos'>
            
            contactos
            </Link>

            <Link className="text-blue-500 " href='/api/usuarios'>
            
            api
            </Link>
            
            
           
            
            </div>
    )
}

export default Navbar