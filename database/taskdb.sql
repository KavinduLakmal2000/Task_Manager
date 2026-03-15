-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 15, 2026 at 07:23 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `taskdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `created_at`, `description`, `status`, `title`, `updated_at`) VALUES
(1, '2026-03-15 02:19:29.000000', 'Study Spring Boot CRUD operations', 'Pending', 'Learn Spring Boot', '2026-03-15 02:44:31.000000'),
(2, '2026-03-15 02:20:01.000000', 'Create REST API for task manager app', 'In Progress', 'Build Task Manager API', '2026-03-15 02:20:01.000000'),
(3, '2026-03-15 02:20:09.000000', 'Integrate React UI with Spring Boot backend', 'Pending', 'Connect React Frontend', '2026-03-15 02:20:09.000000'),
(4, '2026-03-15 02:20:17.000000', 'Test CRUD endpoints using Postman', 'Completed', 'Test API Endpoints', '2026-03-15 02:20:17.000000'),
(6, '2026-03-15 02:53:02.000000', 'this is an a test!!', 'inprogress', 'test task', '2026-03-15 23:13:11.000000'),
(7, '2026-03-15 02:54:38.000000', 'asdasd', 'completed', 'asdas', '2026-03-15 02:54:38.000000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
