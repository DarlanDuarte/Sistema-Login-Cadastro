import react, { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

const Login: React.FC = () => {
  const [login, setLogin] = useState<"login" | "cadastro">("login");

  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  async function handleCadastro(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  async function handleChangeLogin(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setLogin(login === "login" ? "cadastro" : "login");
  }

  return (
    <div className={`bg-white w-6/12 h-[50%] shadow-3xl relative  `}>
      {login === "login" ? (
        <div>
          <motion.div
            key="login"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 1 }}
            className={`w-[40%] h-[42rem] bg-white absolute -top-[28%] left-10 z-10 shadow-2xl rounded-xl  `}
          >
            <div className={"relative  -top-16"}>
              <BiSolidUserCircle
                className={`m-auto `}
                size={120}
                color={`#000`}
              />
            </div>

            <div className={`flex flex-col`}>
              <h2
                className={`text-black text-3xl font-semibold text-center -mt-10 mb-4`}
              >
                Login
              </h2>
              <form onSubmit={handleLogin}>
                <div
                  className={`w-full flex flex-col text-black font-medium text-xl px-5`}
                >
                  <label className="mb-1" htmlFor="email">
                    Email:
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className={`py-2 px-2 border-2 bg-slate-100 rounded-lg outline-none`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div
                  className={`w-full flex flex-col text-black font-medium text-xl px-5`}
                >
                  <label className="mb-1 mt-5" htmlFor="password">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={`py-2 px-2 border-2 bg-slate-100 rounded-lg outline-none`}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                  />
                </div>
                <div
                  className={`flex justify-center items-center p-5 cursor-pointer mt-10 m-auto w-[75%] bg-[#4b83ff] h-10 rounded-lg transition-all duration-500
                  hover:bg-green-500
                  `}
                >
                  <button
                    className={`text-white font-semibold text-xl 
                  `}
                  >
                    Entrar
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 1 }}
            className={`text-black absolute right-0 bottom-0 bg-[#2A324C] h-full w-[50%]`}
          >
            <div className={`flex justify-center items-center h-full`}>
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                  handleChangeLogin(e)
                }
                className={`text-white font-semibold text-2xl bg-[#3D3D65] h-44 w-44 rounded-full transition-all duration-500
                hover:bg-blue-900
                `}
              >
                Cadastrar
              </button>
            </div>
          </motion.div>
        </div>
      ) : (
        <div>
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 1 }}
            className={`text-black absolute left-0 bottom-0 bg-[#2A324C] h-full w-[50%]`}
          >
            <div className={`flex justify-center items-center h-full`}>
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                  handleChangeLogin(e)
                }
                className={`text-white font-semibold text-2xl bg-[#3D3D65] h-44 w-44 rounded-full 
                transition-all duration-500
                hover:bg-blue-900
                `}
              >
                Login
              </button>
            </div>
          </motion.div>

          <motion.div
            key="cadastro"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 1 }}
            className={`w-[40%] h-[42rem] bg-white absolute -top-[28%] right-10 z-10 shadow-2xl rounded-xl  `}
          >
            <div className={"relative  -top-16"}>
              <BiSolidUserCircle
                className={`m-auto `}
                size={120}
                color={`#000`}
              />
            </div>

            <div className={`flex flex-col`}>
              <h2
                className={`text-black text-3xl font-semibold text-center -mt-10 mb-4`}
              >
                Cadastro
              </h2>
              <form onSubmit={handleCadastro}>
                <div
                  className={`w-full flex flex-col text-black font-medium text-xl px-5`}
                >
                  <label className="mb-1" htmlFor="nome">
                    Nome:
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className={`py-2 px-2 border-2 bg-slate-100 rounded-lg outline-none`}
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome"
                  />
                </div>
                <div
                  className={`w-full flex flex-col mt-2  text-black font-medium text-xl px-5`}
                >
                  <label className="  mb-1" htmlFor="email">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`py-2 px-2 border-2 bg-slate-100 rounded-lg outline-none`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div
                  className={`w-full flex flex-col mt-2  text-black font-medium text-xl px-5`}
                >
                  <label className=" mb-1" htmlFor="password">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={`py-2 px-2 border-2 bg-slate-100 rounded-lg outline-none`}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                  />
                </div>
                <div
                  className={`flex justify-center items-center p-5 cursor-pointer mt-10 m-auto w-[75%]  bg-[#4b83ff] h-10 rounded-lg transition-all duration-500
                  hover:bg-green-500
                  `}
                >
                  <button className={`text-white font-semibold text-xl`}>
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Login;
