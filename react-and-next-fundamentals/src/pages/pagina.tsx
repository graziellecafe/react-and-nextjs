import Cabecalho from "@/components/Cabecalho";
import "../app/globals.css";
import Conteudo from "@/components/Conteudo";
import Rodape from "@/components/Rodape";

export default function Pagina() {
  const ano = new Date().getFullYear();

  return (
    <div
      className={`
    flex flex-col h-screen bg-black text-white p-5 gap-5 text-xl`}>
      <Cabecalho titulo="Minha Página" subtitulo="Estou no arquivo page" />
      <Conteudo />
      <Rodape
        textoEsquerda="Feito com 💛 por Grazielle Café "
        textoDireita={`Desenvolvido em ${ano}. `}
      />
    </div>
  );
}
