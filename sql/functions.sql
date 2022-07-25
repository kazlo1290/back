create function dept_count_func(@dept_name varchar(20))
returns integer
as
begin
declare @d_count  integer;
select @d_count = count (*) from instructor
where instructor.dept_name = @dept_name
return @d_count;
end

select * from department
declare @v1 int;
set @v1 = 

select dbo.dept_count_func('Athletics')


select dept_name, budget from department
where  dbo.dept_count_func(dept_name) > 3

create function instructor_of(@dept_name char(20))
returns @temp table  (ID varchar(5),
					name varchar(20),                   
					dept_name varchar(20),	          
					salary numeric(8,2))
AS	
begin
INSERT into @temp
select ID, name, dept_name, salary	          
from instructor	          
where instructor.dept_name = @dept_name
return
end

select * from dbo.instructor_of('Accounting')

select * from @temp

RETURN @TEMP
			 
