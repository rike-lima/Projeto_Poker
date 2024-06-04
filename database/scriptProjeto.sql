use projetoPoker;
describe usuario;

select*from usuario;

create table sites 
(idSite int primary key auto_increment,
nome varchar(45));

create table conta( idConta int, fkUsuario int, foreign key (fkUsuario) references usuario(idUsuario), 
fkSite int, foreign key (fkSite) references sites (idSite), nickname varchar(45),  primary key (idConta, fkUsuario, fkSite));

insert into sites(nome) values
('Pokerstars'),
('GGPoker'),
('PartyPoker');

create table bankroll (idBank int, fkConta int, primary key (idBank, fkConta), bankroll decimal(10,2) default 0
);

alter table bankroll add foreign key (fkConta) references conta(idConta);

insert into conta values
(1,1,1,'ikeda');

insert	into bankroll values 
(1,1,0);

select bankroll from bankroll where fkConta = 1;

update bankroll set bankroll = 150 where fkConta = 1;

alter table usuario add column saldo decimal(10,2) default 0;