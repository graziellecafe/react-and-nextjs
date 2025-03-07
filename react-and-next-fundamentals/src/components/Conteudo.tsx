interface ConteudoProps {
    children: any
}

export default function Conteudo(props: ConteudoProps) {
    console.log(props)
    return (
        <div
            className={`
    flex flex-1 justify-center items-center text-3xl bg-emerald-500 rounded-lg 
    `}
        >
            {props.children}
        </div>
    )
}
