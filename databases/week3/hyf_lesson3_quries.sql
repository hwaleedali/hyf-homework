-- Quaries to write on meal table
-- Get all meals
use hyf_lesson3_mealsharing;
SELECT
  meal.title
from
  meal;
-- Add a new meal
INSERT INTO
  meal(
    `title`,
    `description`,
    `location`,
    `time`,
    `max_reservations`,
    `price`,
    `created_date`
  )
VALUES(
    'dish of the day',
    'the dish of the day is a chef options',
    'O16, Cph',
    '2022-02-16 09:09:09',
    200,
    90,
    '2022-02-15'
  );
 
-- Get a meal with any id, fx 1
SELECT
  -- meal.title
  *
FROM
  meal
WHERE
  id = 1;
 
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  meal
SET
  meal.description = 'Classic food'
WHERE
id = 3;
  
-- Delete a meal with any id, fx 1
DELETE FROM
  meal
WHERE
  id = 2;
   select * from meal;
-- Quries to write on Reservation table
  -- Get all reservations
select * from reservation;

-- Add a new reservation
INSERT INTO
  reservation(
    `number_of_guests`,
    `created_date`,
    `contact_phonenumber`,
    `contact_name`,
    `contact_email`,
    `meal_id`
  )
VALUES(
    30,
    '2022-02-16',
    '25252525',
    'chunmei',
    'chunmei@gmail.com',
    4
  );
-- Get a reservation with any id, fx 1
select
  *
from
  reservation
where
  id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  reservation
SET
  contact_phonenumber = '71815074'
WHERE
  meal_id = 3;
  select * from reservation;
-- Delete a reservation with any id, fx 1
DELETE FROM
  reservation
WHERE
  meal_id = 1;
-- Quries to write on Review table
SELECT
*
from
  review;
-- Add a new review
INSERT INTO
  review(
    `title`,
    `description`,
    `stars`,
    `created_date`,
    `meal_id`
  )
VALUES(
    'Delicate',
    'ivery delicious and nicely presented.',
    5,
    '2022-02-26',
    3
  );
  select * from review;
-- Get a review with any id, fx 1
SELECT
  *
from
  review
where
  id = 3;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  review
SET
  stars = 3
WHERE
  meal_id = 3;
-- Delete a review with any id, fx 1
DELETE FROM
  review
WHERE
  id = 1;
-- Additional queries on functionnality
  -- Get meals that has a price smaller than a specific price fx 90
SELECT
  meal.title,
  meal.price
from
  meal
WHERE
  price < 90;
-- Get meals that still has available reservations
  
-- SELECT
--   meal.title,
--   max_reservations,
--   number_of_guests,
--   (max_reservations - number_of_guests) as 'Available Reservations'
-- from
--   meal
--   JOIN reservation on meal.id = reservation.meal_id
-- WHERE
--   reservation.number_of_guests < meal.max_reservations;
  
  -- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT
  meal.title
from
  meal
WHERE
  title LIKE '%rice%';
-- Get meals that has been created between two dates
SELECT
  meal.title,
  meal.created_date
FROM
  meal
WHERE
  created_date > '2022-02-14' && created_date < '2022-02-16';
-- Get only specific number of meals fx return only 5 meals
SELECT
  meal.title
from
  meal
where
  price < 90
ORDER BY
  meal.title ASC
LIMIT
  5;
-- Get the meals that have good reviews
SELECT
  meal.title
from
  meal
  JOIN review on meal.id = review.meal_id
WHERE
  stars > 4;
-- Get reservations for a specific meal sorted by created_date
SELECT
  meal.title,
  reservation.meal_id,
  reservation.number_of_guests,
  reservation.created_date
FROM
  meal
  JOIN reservation on meal.id = reservation.meal_id
where
  reservation.meal_id = 5
ORDER BY
  reservation.created_date DESC;
-- Sort all meals by average number of stars in the reviews
SELECT
  meal.title,
  round(AVG(review.stars), 1)
from
  meal
  join review on meal.id = review.meal_id
group BY
  meal.title;