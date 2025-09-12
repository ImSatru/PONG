import { Input } from './components/ui/Input.jsx';
import { KeyRound, User } from 'lucide-react';
import  logo  from './assets/images/logo.svg';
import { FcGoogle } from "react-icons/fc"; 
import { FaFacebookF } from "react-icons/fa";

function App() {

  return (
    <>
      <div className ="flex flex-col justify-center bg-bg items-center h-screen gap-6">
        <img src={logo} alt="Logo Pong" className="w-30 h-30"/>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-on-dark rubik-medium text-center">Iniciar Sesión</h1>
          <h2 className="text-lg text-muted rubik-medium text-center ">¿No tienes cuenta? 
            <button className="text-accent-red ">Registrate aqui</button></h2>
        </div>
        
        <Input icon={User} placeholder = "Correo" />
        <Input icon={KeyRound} placeholder = "Contraseña" />
        <span className="text-lg text-on-dark rubik-medium ">O</span>
        <div className="flex gap-10">
          <button>
            <FcGoogle size={24}/>
          </button>
          <button>
            <FaFacebookF size={24} className="text-blue-600"/>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
