const request = require ('supertest');
const fakerBr = require('faker-br');
const rota = "http://localhost:3000"


describe('Suite de testes da api conteudos..', ()=>{

  const cadastro_conteudo_faker = {    
    titulo: "fakers.internet.titulo()",
    descricao: "fakerBr.internet.descricao()",
    tipoConteudo: "fakerBr.internet.tipoConteudo()",
    conteudo: "fakerBr.internet.conteudo()"
    
  }


it('Cadastrar um novo conteúdo e verificar que o conteúdo está devidamente retornando os dados esperados e o statusCode 201.', async()=> {
  const response = await request(rota)
    .post('/conteudos')
    .send(cadastro_conteudo_faker);         
     expect(response.status).toBe(201)
     console.log(response.body)   
});

/*
it('Realizar a consulta do conteúdo em que acabou de cadastrar, retornando os dados esperados e o statusCode 200.', async()=> {
  const response = await request(rota)
    .get('/conteudos/id')  
    .send(cadastro_conteudo_faker);            
     expect(response.status).toBe(200)
     console.log(response.body)
 
});

it('Você deverá alterar o conteúdo consultado anteriormente, e em seguida validar se realmente os dados foram alterados e o statusCode 201.', async()=> {
  const response = await request(rota)
    .post('/conteudos')
    .send(cadastro_conteudo_faker);         
     expect(response.status).toBe(201)
     console.log(response.body)   
});

it('Remover o conteúdo e garantir que o mesmo foi removido, não existe mais para consulta e o statusCode 200.', async()=> {
  const response = await request(rota)
    .get('/conteudos/id')             
     expect(response.status).toBe(200)
     console.log(response.body)
 
});

*/
});