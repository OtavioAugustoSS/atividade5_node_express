function formPage() {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Enviar Feedback</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <h1>Enviar Feedback</h1>
  <form method="POST" action="/feedbacks/enviar">
    <label>Nome:<br><input type="text" name="nome" required></label>
    <label>Comentário:<br><textarea name="comentario" required></textarea></label>
    <button type="submit">Enviar</button>
  </form>
</body>
</html>`;
}

function listaPage(feedbacks) {
  const itens = feedbacks.map((f, i) => `
    <li>
      <span><strong>${f.nome}</strong>: ${f.comentario}</span>
      <form method="POST" action="/feedbacks/remover">
        <input type="hidden" name="indice" value="${i}">
        <button type="submit">Remover</button>
      </form>
    </li>`).join('');

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Lista de Feedbacks</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <h1>Feedbacks <span id="contador">(${feedbacks.length})</span></h1>
  ${feedbacks.length === 0 ? '<p>Nenhum feedback ainda.</p>' : `<ul>${itens}</ul>`}
  <a href="/">Enviar novo feedback</a>
</body>
</html>`;
}

module.exports = { formPage, listaPage };
