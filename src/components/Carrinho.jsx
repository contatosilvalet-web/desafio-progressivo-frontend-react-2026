import formatarPreco from "../dados/formatarPreco.js";
export default function Carrinho({
  carrinho,
  carrinhoAberto, 
  setCarrinhoAberto,
  setCarrinho
}) {
  const total = carrinho.reduce((soma, livro) => {
    return soma + livro.preco * livro.quantidade;
  }, 0);
  function removerLivro(id) {
  setCarrinho((carrinhoAtual) =>
    carrinhoAtual.filter((livro) => livro.id !== id)
  );
}
  return (
    <>
    <div 
      className={`cart-backdrop ${carrinhoAberto ? "cart-backdrop--active" : ""}`} 
      onClick={() => setCarrinhoAberto(false)}
      ></div>

    <aside className={`cart ${carrinhoAberto ? "cart--active" : ""}`}>
      <div className="cart__header">
        <h2>Meu Carrinho</h2>
        <button 
        className="cart__close" 
        type="button" 
        onClick={() =>setCarrinhoAberto (false)}
        >
          X
        </button>
      </div>

      <div className="cart__body">
        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          carrinho.map((livro) => (
          <div key={livro.id} className="cart__product">
            <div className={`book-cover book-cover--${livro.cor}`}>
              <h3>{livro.titulo}</h3>
              <small>{livro.autor}</small>
              <b>p.42</b>
            </div>
            
            <div className="cart__product-info">
              <h3>{livro.titulo}</h3>
              <p>{livro.autor}</p>
              <strong>{formatarPreco(livro.preco * livro.quantidade)}</strong>
              <p>Quantidade: {livro.quantidade}</p>
              <button
                className="remove"
                type="button"
                onClick={() => removerLivro(livro.id)}
              >
                Remover
              </button>
            </div>
          </div>
        )))}
      </div>

      <div className="cart__footer">
        <div className="cart__total">
          <span>Total:</span>
          <strong>{formatarPreco(total)}</strong>
        </div>
      </div>
    </aside>
    </>
  );
}
