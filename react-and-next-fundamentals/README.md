# 📚 React e NextJs Fundamentos

## ✏️ Instalações

```js
npx create-next-app my-app
```

## ✏️ Básico do React

### Criando uma função Page que retorna uma URL

```js
export default function Page() {
  return "Exemplo 1";
}
```

### Utilizando Tailwind

```js
export default function Page() {
  return (
    <div>
      <h1 className="text-orange-400 text-6xl font-black">Título</h1>
      <h2 className="text-green-300 text-4xl">Subtitulo</h2>
    </div>
  );
}
```

### Utilizando constantes

```js
export default function Page() {
  //  const trecho = <h1> Trecho #1</h1>;

  const trechos = [
    <div key="1"> Trecho #1 </div>,
    <div key="2"> Trecho #2 </div>,
    <div key="3"> Trecho #3 </div>,
  ];

  return trechos;
}
```

### Utilizando funções dentro do escopo

````js
export default function Page() {
  function renderizarTitulo() {
    return (
      <div>
        <h1>Títulos</h1>
        <h2>Subtítulos</h2>
      </div>
    );
  }

  function renderizarConteudo() {
    return (
      <div>
        <ul>
          <li>Ana</li>
          <li>Beatriz</li>
          <li>Fernanda</li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <div>{renderizarTitulo()}</div>
      <hr />
      <div>{renderizarConteudo()}</div>
    </div>
  );
}
```js

````
