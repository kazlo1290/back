drop table table_auto

CREATE TABLE table_auto
(ID INT IDENTITY(1,1),
 CharID AS 'WC' + RIGHT('000' + CAST(ID AS VARCHAR(3)), 3) PERSISTED,
 Lname varchar(25),
 CONSTRAINT PK_YourTable PRIMARY KEY(CharID)
)

insert table_auto values ('Bat'); 

insert table_auto values ('Bold'); 

insert table_auto values ('Bolor'); 

select * from table_auto

alter table table_auto 
add constraint unique_Const unique(Lname)

CREATE TABLE table_auto2
(ID INT IDENTITY(1,1),
 CharID AS 'WC' + RIGHT('000' + CAST(ID AS VARCHAR(3)), 3) PERSISTED,
 Lname varchar(25),
 Dob date,
 Age as datediff(year,Dob,getdate()),
 CONSTRAINT PK_auto2 PRIMARY KEY(CharID)
)

insert table_auto2 (Lname, Dob) values ('Bat', '2000/02/03')
insert table_auto2 (Lname, Dob, pass) values ('Tuya', '1996/02/03', 'myPass')

select * from table_auto2

alter table table_auto2
add pass nvarchar(32)

DECLARE @HashThis NVARCHAR(32);  
SET @HashThis = CONVERT(NVARCHAR(32),'myPass');  
SELECT HASHBYTES('SHA2_256', @HashThis);  

concat(convert(char(4),datepart(year, select dob)) )

'WC' + CAST( datepart(year, dob) AS VARCHAR(4))

create table clogin(
ID INT IDENTITY(1,1),
 CharID AS 'WC' + RIGHT('000' + CAST(ID AS VARCHAR(3)), 3) PERSISTED,
 username varchar(25),
 dob date,
 pass as HASHBYTES('SHA2_256', CONVERT(NVARCHAR(32),'WC' + CAST( datepart(year, dob) AS VARCHAR(4)))) , 
 CONSTRAINT PK_login PRIMARY KEY(CharID),
 constraint pg_uni unique(username)
)

insert clogin (username, dob) values ('Bat', '1990/02/02')
insert clogin (username, dob) values ('Bolor', '1991/02/02')

select * from clogin

select * from clogin
select CONVERT(NVARCHAR(32),'WC' + CAST( datepart(year, '1990/02/02') AS VARCHAR(4)))
select HASHBYTES('SHA2_256', N'WC1990')
 
 -- Product, Order, OrderDetails

 create table Product(
 ID int identity(1,1),
 ProductID AS 'P' + RIGHT('000' + CAST(ID AS VARCHAR(3)), 3) PERSISTED,
 ProductName varchar(25),
 price numeric(8,2),
 constraint pk_product primary key (ProductID)
 )

 insert into Product(ProductName, price) values('Utas', 2000);
  insert into Product(ProductName, price) values('Mouse', 150);
 
 delete from Product 
 where price <100

 select * from Product

 alter table Product
 add constraint check_price check (price>100)

 create table Orders(
 ID int identity(1,1),
 OrderID as 'O'+ RIGHT('000' + CAST(ID AS VARCHAR(3)), 3) persisted,
 OrderDate as getdate(),
 UserID varchar(5),
 constraint pk_order primary key (OrderID)
)

 alter table Orders
 add constraint FK_user foreign key (UserID) references clogin(charID)

 insert into Orders(UserID) values('WC003')
 insert into Orders(UserID) values('WC001')

 select * from Orders

 create table OrderDetails(
 OrderDetailsID int identity(1,1),
 OrderID varchar(4),
 ProductID varchar(4),
 Quantity int,
 primary key (OrderDetailsID)
 )

 alter table OrderDetails
 add constraint FK_order foreign key (OrderID) references Orders(OrderID)

 alter table OrderDetails
 add constraint FK_product foreign key (ProductID) references Product(ProductID)


 select * from clogin
 select * from Product
 select * from Orders
 select * from OrderDetails

 select c.username, o.OrderDate, p.ProductName, p.price, d.Quantity from Orders o
join clogin c on o.UserID=c.CharID
join OrderDetails d on o.OrderID=d.OrderID
join Product p on d.ProductID=p.ProductID

create view OrderTotal
as
select  OrderID, sum(Quantity*price) as 'TotalPrice' from OrderDetails d
join Product p on d.ProductID=p.ProductID
group by OrderID

select * from OrderTotal

insert into OrderDetails(OrderID, ProductID, Quantity) values ('O001', 'P001', 2)
insert into OrderDetails(OrderID, ProductID, Quantity) values ('O001', 'P004', 3)

insert into OrderDetails(OrderID, ProductID, Quantity) values ('O002', 'P001', 1)
insert into OrderDetails(OrderID, ProductID, Quantity) values ('O002', 'P004', 1)
