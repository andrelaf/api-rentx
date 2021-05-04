# Cadastro de Carro

**RF** => Requisitos Funcionais
- Deve ser possível cadastrar um novo carro.

**RN** => Regras de Negócio
- Não deve ser possível cadastrar um carro com uma placa já existente.
- O carro deve ser cadastrado, por padrão, com disponibilidade.
- * O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF** => Requisitos Funcionais
- Deve ser possível listar os carros disponíveis.
- Deve ser possível listar os carros disponíveis pelo nome da categoria.
- Deve ser possível listar os carros disponíveis pelo nome da marca.
- Deve ser possível listar os carros disponíveis pelo nome do carro.

**RN** => Regras de Negócio
- O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no Carro

**RF** => Requisitos Funcionais
- Deve ser possível cadastrar uma especificação para um carro.
- Deve ser possível listar todas as especificações.
- Deve ser possível listar todos os carros.

**RN** => Regras de Negócio
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de Imagens do Carro

**RF** => Requisitos Funcionais
- Deve ser possível cadastrar imagem do carro.
- Deve ser possível listar todos os carros.

**RFN** Requisitos não Funcionais
- Utilizar o multer para upload de arquivos

**RN** => Regras de Negócio
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
-O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de Carro 

**RF** => Requisitos Funcionais
- Deve ser possível cadastrar um aluguel.


**RN** => Regras de Negócio
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
- O usuário deve estar logado na aplicação.
- Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.

# Devolução de carro

**RF** => Requisitos Funcionais
- Deve ser possível realizar a devolução de um carro

**RN** => Regras de Negócio
- Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
- Ao realizar a devolução, o carro devera ser liberado para outro aluguel.
- Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel
- Ao realizar a devolução, deverá ser calculado o total do aluguel.
- Caso o horário de devolução seja superior ao horário da entrega, deverá ser cobrado
- multa proporcional aos dias de atraso.
- Caso haja multa, deverá ser somado ao valor total do aluguel.

# Listagem de Alugueis or Usuário

**RF** => Requisitos Funcionais
 - Deve ser possível realizar a busca de todos alugueis por usuário.

**RN** => Regras de Negócio
 - O usuário deve estar logado na aplicação.

# Recuperar Senha

**RF** => Requisitos Funcionais
- Deve ser possível o usuário recuperar a senha utilizando o e-mail.
- O usuário deve receber um e-mail com o passo a passo para recuperação da senha.
- O usuário deve conseguir inserir uma nova senha. 

**RN** => Regras de Negócio
 - O usuário precisa informar uma nova senha.
 - O link enviado para recuperação deve expirar em 3h.


