select * from student -- Manber tot_credit=39

select * from takes
where Id = 1000

update student
set tot_cred = 30
where Id =1000

(select course_id from course where course_id not in 
(select course_id from takes where ID= 1000)) intersect (select course_id from section)

select sum(credits) as tot_credits from takes t
join course c on t.course_id=c.course_id
where t.ID=1000

select * from takes where id= 1000

delete from takes
where ID =1000 and sec_id=1 and year=2009 and semester='Fall' and course_id=105

insert into takes values (1000, 105, 1, 'Fall', 2009, 'A')


update takes 
set grade='A+'
where ID =1000 and sec_id=1 and year=2009 and semester='Fall' and course_id=105

select * from section where course_id=105

select * from course where course_id = 105

drop trigger totCretTrigger

create trigger totCretTrigger on takes 
for insert
as
begin
declare @credits int;
declare @sid int;
select @sid =inserted.id from inserted
select @credits=sum(credits) from takes t
join course c on t.course_id=c.course_id
where t.ID=@sid

update student set tot_cred = @credits
where student.ID=@sid
end

create table gLogs(
logID int identity(1,1) primary key,
stuID varchar(8),
courseID varchar(8), 
beforeGrade varchar(2),
afterGrade varchar(2),
updateDate date
)

drop trigger GradesLogging

create trigger GradesLogging on takes
after update
as 
begin
declare @sid int;
declare @old_grade varchar(2);
declare @new_grade varchar(2);
declare @course varchar(8);
select @sid = ID from inserted
select @old_grade = grade from deleted;
select @new_grade = grade from inserted;
select @course = course_id from inserted;

print @sid 
print @old_grade
print @new_grade
print @course

insert into gLogs select @sid, @course, @old_grade,@new_grade,GETDATE()
end
--

select * from gLogs

