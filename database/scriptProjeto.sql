create  database projetoPoker;

use projetoPoker;
describe usuario;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(80),
email varchar (50),
nickname varchar (45),
senha varchar(45),
bankroll decimal (9,2) default 0,
profit decimal (9,2) default 0);

create table registro(
idRegistro int auto_increment,
fkUsuario int, foreign key (fkUsuario) references usuario(idUsuario),
primary key (idRegistro, fkUsuario),
dia date,
acao varchar(45) constraint chkAcao check(acao in ('investimento', 'saque')),
valor decimal(9,2) default 0);

select usuario.*, registro.valor from usuario left join registro on idUsuario=fkUsuario ;



select bankroll as 'caixa_atual', profit as 'profit' from usuario where idUsuario=1;






