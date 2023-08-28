import react, { useState } from "react";

const Login: React.FC = () => {
  const [login, setLogin] = useState<"login" | "cadastro">("login");

  return (
    <div className={`bg-white w-6/12 h-[50%] shadow-3xl relative`}>
      {login === "login" ? (
        <div className={``}>
          <div
            className={`w-[40%] h-[42rem] bg-white absolute -top-[35%] left-10 z-10 shadow-xl  `}
          ></div>

          <div
            className={`text-black absolute right-0 bottom-0 bg-[#2A324C] h-full w-[50%]`}
          >
            <div className={`flex justify-center items-center h-full`}>
              <button
                className={`text-white font-semibold text-2xl bg-[#3D3D65] h-44 w-44 rounded-full`}
              >
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Login;
