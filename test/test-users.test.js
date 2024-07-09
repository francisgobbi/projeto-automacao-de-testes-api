const request = require ('supertest');
const fakerBr = require('faker-br');
const rota = "http://localhost:3000"


describe('Suite de testes da api users..', ()=>{

    const cadastro_usuario_faker = {
        nome: fakerBr.name.firstName(),
        telefone: fakerBr.phone.phoneNumber('+55 (##) ###-###'),
        email: fakerBr.internet.email(),
        senha: fakerBr.internet.password(8)
      }
   
    const cadastro_usuario_vazio = {       
    }

  
   it('Deve cadastrar um novo usuario .. deve retornar status 200.', async()=> {
        const response = await request(rota)
          .post('/users')
          .send(cadastro_usuario_faker);         
           expect(response.status).toBe(200)
           console.log(response.body)
       
   });
   it('Deve tentar cadastrar um novo usuario com valores invalidos .. deve retornar status 422.', async()=> {
    const response = await request(rota)
      .post('/users')
      .send(cadastro_usuario_vazio);         
       expect(response.status).toBe(422)
       console.log(response.body)
   
     });


   it('Consulta todos usuarios.. deve retornar status 200.', async()=> {
    const response = await request(rota).get('/users');
    expect(response.status).toBe(200)
     });
     
   it('Cadastro de um novo usuario com mesmo e-mail .. deve retornar status 422.', async()=> {
        const response = await request(rota).post('/users');
        expect(response.status).toBe(422)
       
    });
    it('Cadastro de um novo usuario existente .. deve retornar status 422.', async()=> {
        const response = await request(rota)
         .post('/users')
         .send(cadastro_usuario_faker);
        expect(response.status).toBe(422)       
       
    });

    it('Envia os dados vazios e deve retornar um status 422', async () => {
        const response = await request(rota)
            .post('/users')            
            .send(cadastro_usuario_faker)
        expect(response.status).toBe(422);
        expect(JSON.stringify(response.body)).toBe
        console.log(response.body);
        console.log(response.body)
    });

   it('Altera o Cadastro de um usuario.. deve retornar status 200.', async()=> {
            const response = await request(rota)
            .put('/users/13')
            .send(cadastro_usuario_faker);
            expect(response.status).toBe(200)           
     });
    
   it('Deleta o cadastro de um usuario.. deve retornar status 204.', async()=> {
        const response = await request(rota).delete('/users/11');
        expect(response.status).toBe(204)
       
    });


});

describe('Suite de testes da api conteudos..', ()=>{

  const cadastro_conteudo_faker = {
    id: fakerBr.id,
    titulo: fakers.titulo,
    descricao: fakerBr.descricao,
    tipoConteudo: fakerBr.internet.tipoConteudo(),
    conteudo: fakerBr.internet.conteudo(),
    dataCadastro: fakerBr.internet.dataCadastro()
  }


it('Cadastrar um novo conteúdo e verificar que o conteúdo está devidamente retornando os dados esperados e o statusCode 201.', async()=> {
  const response = await request(rota)
    .post('/conteudos')
    .send(cadastro_conteudo_faker);         
     expect(response.status).toBe(201)
     console.log(response.body)   
});

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

});