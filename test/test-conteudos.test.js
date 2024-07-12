const request = require ('supertest');
const rota = "http://localhost:3000"


describe('Suite de testes da api conteudos..', ()=>{

  const cadastro_conteudo = {    
    titulo: "O Fim do Mundo",
    descricao: "A hsitória do fim do mundo",
    tipoConteudo: "Ficção",
    conteudo: "Fim do mundo é um evento futuro hipotético que tem o potencial para prejudicar ou extinguir a humanidade e/ou qualquer outra forma de vida no planeta Terra."
    
  }


it('Cadastrar um novo conteúdo e verificar que o conteúdo está devidamente retornando os dados esperados e o statusCode 201.', async()=> {
  const response = await request(rota)
    .post('/conteudos')
    .send(cadastro_conteudo);   
    expect(response.body).toBeDefined();
    expect(response.body).toHaveProperty('id');
    expect(response.status).toBe(201)
    idConteudo = response.body.id
    console.log('Id do conetudo cadastrado é : ', idConteudo)
    console.log(response.body)   
});


it('Realizar a consulta do conteúdo em que acabou de cadastrar, retornando os dados esperados e o statusCode 200.', async()=> {
  const response = await request(rota)
    .get(`/conteudos/${idConteudo}`)  
    .send(cadastro_conteudo); 
    expect(response.body).toBeDefined(); 
    expect(response.body).toHaveProperty('id',idConteudo);          
    expect(response.status).toBe(200)
    console.log(response.body)
 
});

it('Você deverá alterar o conteúdo consultado anteriormente, e em seguida validar se realmente os dados foram alterados e o statusCode 201.', async()=> {
  const response = await request(rota)
    .post('/conteudos')
    .send(cadastro_conteudo);  
    expect(response.body).toBeDefined(); 
    expect(response.body).toHaveProperty('id',idConteudo);        
    expect(response.status).toBe(201)
    console.log(response.body)   
});

it('Remover o conteúdo e garantir que o mesmo foi removido, não existe mais para consulta e o statusCode 200.', async()=> {
  const response = await request(rota)
    .get(`/conteudos/${idConteudo}`)
    expect(response.body).toHaveProperty('id',idConteudo);             
    expect(response.status).toBe(200)
    console.log(response.body)
 
});

});