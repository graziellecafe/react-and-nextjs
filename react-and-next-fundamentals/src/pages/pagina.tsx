import { useState } from "react"

import Cabecalho from "@/components/Cabecalho"
import Conteudo from "@/components/Conteudo"
import Menu from "@/components/Menu"
import Rodape from "@/components/Rodape"

import "../app/globals.css"

export default function Pagina() {
    const [number, setNumero] = useState(0)

    function incrementar() {
        setNumero(number + 1)
    }

    function decrementar() {
        setNumero(number - 1)
    }

    const ano = new Date().getFullYear()

    return (
        <div
            className={`
    flex flex-col h-screen bg-black text-white p-5 gap-5 text-xl`}
        >
            <Cabecalho
                titulo="Minha Página"
                subtitulo="Estou no arquivo page"
            />

            <div
                className={`
        flex flex-1 gap-5 
        `}
            >
                <Menu />
                <Conteudo>
                    <div className="flex flex-col justify-center items-center gap-5 w-full h-full">
                        <h2> Contador </h2>
                        <div className="text-7xl font-black">{number}</div>
                        <div className="flex gap-4">
                            <button
                                onClick={decrementar}
                                className="bg-blue-500 p-2 rounded-full"
                            >
                                {"-"}
                            </button>

                            <button
                                onClick={incrementar}
                                className="bg-blue-500 p-2 rounded-full"
                            >
                                {"+"}
                            </button>
                        </div>
                    </div>
                </Conteudo>
            </div>

            <Rodape
                textoEsquerda="Feito com 💛 por Grazielle Café "
                textoDireita={`Desenvolvido em ${ano}. `}
            />
        </div>
    )
}
