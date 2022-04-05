Create School;
use School;
CREATE TABLE `Class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `begin` DATETIME NOT NULL,
  `end` DATETIME NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `Student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `class_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_Class` FOREIGN KEY (`class_id`) REFERENCES `Class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
select * from Class;

ALTER TABLE
  Class
ADD
  status ENUM('not-started', 'on-going', 'finished') NOT NULL;
select
  *
from
  Class;
alter table
  `Class`
add
  `status` varchar(255) NOT NULL;
INSERT INTO
  Class (name, begin,end,
  status
)
VALUES
  (
    "Class20",
    "2020-02-03",
    "2020-02-04",
    "not-started"
  ),
  ("Class19", "2020-02-03", "2020-02-04", "Ongoing"),
  (
    "Class18",
    "2020-02-03",
    "2020-02-04",
    "Finished"
  );
select
  *
from
  Class;