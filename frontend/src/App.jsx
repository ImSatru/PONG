import { Input } from './components/ui/Input.jsx';
import { KeyRound, User } from 'lucide-react';
import  logo  from './assets/images/logo.svg';
import { FcGoogle } from "react-icons/fc"; 
import { FaFacebookF } from "react-icons/fa";

function App() {

  return (
    <>
      <div className ="flex flex-col justify-center bg-bg items-center h-screen gap-8">
        <img src={logo} alt="Logo Pong" className="w-35 h-30"/>
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl text-on-dark rubik-medium text-center">Iniciar Sesión</h1>
          <h2 className="text-2xl text-muted rubik-medium text-center ">¿No tienes una cuenta? 
            <button className="text-accent-red ">Registrate aqui</button></h2>
        </div>
        
        <Input icon={User} placeholder = "Correo" />
        <Input icon={KeyRound} placeholder = "Contraseña" />
        <span className="text-2xl text-on-dark rubik-medium ">O</span>
        <div className="flex gap-10">
          <button>
            <FcGoogle size={36}/>
          </button>
          <button>
            <FaFacebookF size={36} className="text-[#4285F4]"/>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
