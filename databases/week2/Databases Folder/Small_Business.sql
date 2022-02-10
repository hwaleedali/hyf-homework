create database Small_Business;
use Small_Business;
CREATE TABLE `Staff` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `office_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_Staff` FOREIGN KEY (`office_id`) REFERENCES `Office` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `Office` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `Job` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `start_date` DATETIME NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `Staff_Job` (
  `Staff_id` int(10) unsigned NOT NULL,
  `Job_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`Staff_id`, `Job_id`),
  CONSTRAINT `fk_Staff_Job_Staff` FOREIGN KEY (`Staff_id`) REFERENCES `Staff` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_Staff_Job_Job` FOREIGN KEY (`Job_id`) REFERENCES `Job` (`id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;