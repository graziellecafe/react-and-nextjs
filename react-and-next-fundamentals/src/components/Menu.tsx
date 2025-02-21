import MenuItem from "@/components/MenuItem";

export default function Rodape(props: any) {
  return (
    <div
      className={`
        flex justify-center items-center w-52
        bg-zinc-700 rounded-lg text-3xl `}>
      <MenuItem texto="Página #1" />
      <MenuItem texto="Página #2" />
    </div>
  );
}
