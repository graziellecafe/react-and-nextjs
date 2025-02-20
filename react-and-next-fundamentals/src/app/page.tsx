import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Rodape from "@/components/Rodape";

export default function Page() {
  const ano = new Date().getFullYear();

  return (
    <div
      className={`
    flex flex-col h-screen bg-black text-white p-5 gap-5 text-xl`}>
      <Cabecalho titulo="Minha Página" subtitulo="Estou na pasta pages" />
      <Conteudo />
      <Rodape
        textoEsquerda="Feito com 💛 por Grazielle Café "
        textoDireita={`Desenvolvido em ${ano}. `}
      />
    </div>
  );
}
