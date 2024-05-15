const TemplateExpressions = () => {
    //4 - Criando uma variável
    const nome = "Arthur CABRAL";

    // 5 - Objeto
    const dados = {
      idade: 17,
      profissao: "Aluno"
    };

  return (
    <div>
        <p>A soma é {4+20}</p>
        <h3>Boas-vindas {nome}</h3>
        <p>Vi aqui que você tem {dados.idade} anos e é {dados.profissao}.</p>
    </div>
  );
};

export default TemplateExpressions;