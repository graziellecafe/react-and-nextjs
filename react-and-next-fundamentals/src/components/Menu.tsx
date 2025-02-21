import MenuItem from "./MenuItem"

export default function Rodape(props: any) {
    return (
        <div
            className={`
        flex flex-col -center items-center w-52
        bg-zinc-700 rounded-lg text-3xl p-2 gap-2`}
        >
            <MenuItem texto="Texto #1" />
            <MenuItem texto="Texto #2" />
        </div>
    )
}
