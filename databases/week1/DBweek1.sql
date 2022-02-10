use hyf_lesson1;
-- Find out how many tasks are in the task table
select
  count(task.id)
from
  task;
-- Find out how many tasks in the task table do not have a valid due date
select
  count(task.id)
from
  task
where
  task.due_date is null;
-- Find all the tasks that are marked as done
  -- select status.name from status;
select
  task.title,
  status.name
from
  task
  join status on status.id = task.status_id
where
  status.name like "%done";
-- Find all the tasks that are not marked as done
select
  task.title,
  status.name
from
  task
  join status on status.id = task.status_id
where
  status.name not like "%done";
-- Get all the tasks, sorted with the most recently created first
select
  task.title,
  task.created
from
  task
order by
  task.created desc;
-- Get the single most recently created task
select
  task.title,
  task.description,
  task.created
from
  task
order by
  task.created desc
limit
  1;
-- Get the title and due date of all tasks where the title or description contains database
select
  task.title,
  task.due_date
from
  task
where
  task.title like "%database%"
  or task.description like "%database%";
-- Get the title and status (as text) of all tasks
select
  task.title,
  status.name
from
  task
  inner join status on status.id = task.status_id;
-- Get the name of each status, along with a count of how many tasks have that status
select
  status.name,
  count(task.id)
from
  status
  join task on status.id = task.status_id
group by
  status.name;
-- Get the names of all statuses, sorted by the status with most tasks first
select
  status.name,
  count(task.id)
from
  status
  join task on status.id = task.status_id
group by
  status.name
order by
  count(task.id) desc;