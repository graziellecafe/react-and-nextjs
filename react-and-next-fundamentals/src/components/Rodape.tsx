interface RodapeProps {
    textoEsquerda: string
    textoDireita: string
}

export default function Rodape(props: RodapeProps) {
    return (
        <div
            className={`
        flex justify-between items-center h-36 rounded-lg text-xl px-10 bg-cyan-600`}
        >
            <span>{props.textoEsquerda}</span>
            <span>{props.textoDireita}</span>
        </div>
    )
}
