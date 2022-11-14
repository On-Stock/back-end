# On Stock - um e-commerce para streamers
Trabalho desenvolvido para a disciplina de Programação Web I 

### Equipe:

Marcos Patrick Saraiva da Silva - 496459 <Br />
Igor Mourão das Neves - 494749 <Br />
Myguel Angello Maciel de Abreu - 495849 <Br />
Reinaldo da Silva Nascimento - 499899 <Br />


Front: 
https://github.com/On-Stock/front-end


Back:
https://github.com/On-Stock/back-end




<Br />
<Br />
<Br />
<Br />


Entidade User
  id       String  @id @default(uuid())  <br/>
  name     String <br/>
  email    String  @unique <br/>
  login    String <br/>
  password String <br/> 
  address  String? <br/>
  role     Role    @default(CUSTOMER) 
