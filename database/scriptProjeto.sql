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
