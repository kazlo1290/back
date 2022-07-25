select * from student
--no parameter
create procedure studentCount
as
SELECT dept_name, count(ID) as 'studentCount' 
    FROM student
    GROUP BY dept_name

exec studentCount


create procedure studentCountDept @dname varchar(30)
as
SELECT count(ID) as 'studentCount' 
    FROM student
    where dept_name = @dname

exec studentCountDept 'Physics'

