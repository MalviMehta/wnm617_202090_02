-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 15, 2020 at 02:39 PM
-- Server version: 5.6.49-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `track_users`
--

CREATE TABLE `track_users` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(32) NOT NULL,
  `phone` varchar(32) NOT NULL,
  `gender` enum('Male','Female','') NOT NULL,
  `img` varchar(256) NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_users`
--

INSERT INTO `track_users` (`id`, `name`, `username`, `email`, `password`, `phone`, `gender`, `img`, `date_create`) VALUES
(1, 'Chrystal Richardson', 'user1', 'user1@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '+1 (841) 464-3196', 'Female', 'https://via.placeholder.com/400/858/fff/?text=user1', '2020-05-18 04:47:05'),
(2, 'Desiree Rollins', 'user2', 'user2@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '+1 (950) 599-3726', 'Female', 'https://via.placeholder.com/400/922/fff/?text=user2', '2020-06-06 08:30:31'),
(3, 'Zamora Harrison', 'user3', 'user3@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '+1 (876) 505-3066', 'Male', 'https://via.placeholder.com/400/758/fff/?text=user3', '2020-05-26 04:49:57'),
(4, 'Soto Schultz', 'user4', 'user4@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '+1 (816) 444-3942', 'Male', 'https://via.placeholder.com/400/798/fff/?text=user4', '2020-09-15 09:30:01'),
(5, 'Langley Bass', 'user5', 'user5@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '+1 (952) 479-2369', 'Male', 'https://via.placeholder.com/400/920/fff/?text=user5', '2020-04-02 01:02:55'),
(6, 'Nieves Arnold', 'user6', 'user6@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '+1 (878) 412-3566', 'Male', 'https://via.placeholder.com/400/772/fff/?text=user6', '2020-08-19 10:38:51'),
(7, 'Deborah Sherman', 'user7', 'user7@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '+1 (986) 548-2617', 'Female', 'https://via.placeholder.com/400/827/fff/?text=user7', '2020-05-12 09:35:03'),
(8, 'Shana Weber', 'user8', 'user8@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '+1 (955) 481-3029', 'Female', 'https://via.placeholder.com/400/965/fff/?text=user8', '2020-06-19 05:54:23'),
(9, 'Jackson Dillard', 'user9', 'user9@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '+1 (929) 525-3854', 'Male', 'https://via.placeholder.com/400/733/fff/?text=user9', '2020-07-27 12:56:31'),
(10, 'Malvi Mehta', 'user10', 'user10@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '+1 (987) 510-3961', 'Female', 'https://via.placeholder.com/400/972/fff/?text=user10', '2020-09-13 06:14:23'),
(11, ' ', 'class', 'class@class.com', '1a1dc91c907325c69271ddf0c944bc72', ' ', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-13 20:54:41'),
(12, ' Malvi Mehta', 'user0', 'user0@user.com', '1a1dc91c907325c69271ddf0c944bc72', ' ', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-13 20:57:07'),
(13, ' ', 'Coffeelover', 'coffee@coffee.com', '1a1dc91c907325c69271ddf0c944bc72', ' ', '', 'https://via.placeholder.com/400/?text=USER', '2020-12-14 18:27:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_users`
--
ALTER TABLE `track_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `track_users`
--
ALTER TABLE `track_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
