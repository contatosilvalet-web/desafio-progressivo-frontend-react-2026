import { useState } from "react";

export default function FinalizarCompra({
  carrinho,
  total,
  onFinalizar,
}) {
  
const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [erro, setErro] = useState("");
  const [confirmacao, setConfirmacao] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (!nome.trim() || !cidade.trim()) {
      setErro("Preencha seu nome e sua cidade.");
      return;
    }

    if (carrinho.length === 0) {
      setErro("Adicione pelo menos um livro ao carrinho.");
      return;
    }

    setErro("");

    setConfirmacao({
      nome: nome.trim(),
      cidade: cidade.trim(),
      total: total,
    });

    setNome("");
    setCidade("");

    onFinalizar();
  }

  return (
    <section className="finalizar-compra">
      <h2>Finalizar compra</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="cidade">Cidade</label>
          <input
            id="cidade"
            name="cidade"
            type="text"
            value={cidade}
            onChange={(event) => setCidade(event.target.value)}
            required
          />
        </div>

        {erro && <p role="alert">{erro}</p>}

        <button type="submit">
          Confirmar compra
        </button>
      </form>

      {confirmacao && (
        <div>
          <h3>Compra simulada com sucesso!</h3>
          <p>Nome: {confirmacao.nome}</p>
          <p>Cidade: {confirmacao.cidade}</p>
          <p>Total: {confirmacao.total}</p>
        </div>
      )}
    </section>
  );

  // A Pessoa 2 completa este formulário na semana 3.
}
