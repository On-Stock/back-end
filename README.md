# On Stock - um e-commerce para streamers
Trabalho desenvolvido para a disciplina de Programação Web I 

### Equipe:

Marcos Patrick Saraiva da Silva - 496459 <Br />
Igor Mourão das Neves - 494749 <Br />
Myguel Angello Maciel de Abreu - 495849 <Br />
Reinaldo da Silva Nascimento - 499899 <Br />


Front: 
https://github.com/igorNeves007/on-stock/tree/main/front


Back:
https://github.com/MarcosPatrickExe/server-on-stock.git




<Br />
<Br />
<Br />
<Br />


Entidade User
  id       String  @id @default(uuid())
  name     String
  email    String  @unique
  login    String
  password String
  address  String?
  role     Role    @default(CUSTOMER)
