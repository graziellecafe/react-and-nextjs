export default function Rodape(props: any) {
  return (
    <div
      className={`
        flex justify-between items-center h-36 rounded-lg text-sm px-10 bg-cyan-600`}>
      <span>{props.textoEsquerda}</span>
      <span>{props.textoDireita}</span>
    </div>
  );
}
