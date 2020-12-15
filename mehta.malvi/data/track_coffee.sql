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
-- Table structure for table `track_coffee`
--

CREATE TABLE `track_coffee` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `type` varchar(64) NOT NULL,
  `img` varchar(256) NOT NULL,
  `rating` enum('1','2','3','4','5') NOT NULL,
  `date_create` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_coffee`
--

INSERT INTO `track_coffee` (`id`, `user_id`, `name`, `type`, `img`, `rating`, `date_create`) VALUES
(1, 12, 'Brew Culture', 'Mocha', 'uploads/1608066784.2736_coffee6.jpg', '4', '2020-01-06 08:41:20'),
(2, 6, 'The Java Break', 'Irish', 'https://via.placeholder.com/400/880/fff/?text=undefined', '5', '2020-03-11 01:54:05'),
(3, 7, 'Beauty Mug', 'Frappucino', 'https://via.placeholder.com/400/833/fff/?text=undefined', '1', '2020-01-04 06:13:54'),
(4, 8, 'The Java Break', 'Mocha', 'https://via.placeholder.com/400/720/fff/?text=undefined', '2', '2020-06-10 08:19:04'),
(5, 8, 'Elemental Coffee', 'Cappuccino', 'https://via.placeholder.com/400/867/fff/?text=undefined', '5', '2020-11-03 06:19:37'),
(6, 3, 'The love Point', 'Fredo', 'https://via.placeholder.com/400/731/fff/?text=undefined', '4', '2020-03-12 03:06:24'),
(7, 7, 'The Java Break', 'Cocoa', 'https://via.placeholder.com/400/768/fff/?text=undefined', '5', '2020-06-01 06:38:53'),
(8, 2, 'Elemental Coffee', 'Mocha', 'https://via.placeholder.com/400/757/fff/?text=undefined', '2', '2020-05-25 01:42:21'),
(9, 5, 'Beauty Mug', 'Cocoa', 'uploads/1608032696.9197_1bd09ad74de58d9b1d183d5f9bbc74cb.png', '2', '2020-04-01 07:53:13'),
(10, 3, 'Elemental Coffee', 'Mocha', 'https://via.placeholder.com/400/875/fff/?text=undefined', '1', '2020-04-28 05:29:05'),
(11, 8, 'Beauty Mug', 'Frappucino', 'https://via.placeholder.com/400/704/fff/?text=undefined', '3', '2020-03-13 04:17:38'),
(12, 10, 'Manhattan Mocha', 'Latte', 'https://via.placeholder.com/400/984/fff/?text=undefined', '5', '2020-04-15 02:56:36'),
(13, 9, 'Honey Coffee', 'Latte', 'https://via.placeholder.com/400/899/fff/?text=undefined', '3', '2020-04-30 08:07:23'),
(14, 5, 'Brew Culture', 'Espresso', 'https://via.placeholder.com/400/729/fff/?text=undefined', '2', '2020-06-07 11:37:11'),
(15, 2, 'The Molecule Effect', 'Cappuccino', 'https://via.placeholder.com/400/971/fff/?text=undefined', '3', '2020-03-23 11:46:03'),
(16, 6, 'Manhattan Mocha', 'Irish', 'https://via.placeholder.com/400/708/fff/?text=undefined', '1', '2020-10-11 07:20:03'),
(17, 7, 'Brew Culture', 'Glace', 'https://via.placeholder.com/400/814/fff/?text=undefined', '2', '2020-05-12 06:59:56'),
(18, 6, 'Manhattan Mocha', 'Chocolate', 'https://via.placeholder.com/400/835/fff/?text=undefined', '5', '2020-03-07 12:03:40'),
(19, 10, 'Wide Awake Cafe', 'Glace', 'https://via.placeholder.com/400/753/fff/?text=undefined', '3', '2020-05-23 12:20:40'),
(20, 1, 'Latte', 'Cocoa', 'https://via.placeholder.com/400/771/fff/?text=undefined', '2', '2020-02-25 05:02:34'),
(21, 4, 'Brewed Awake', 'Cocoa', 'https://via.placeholder.com/400/724/fff/?text=BrewedAwake', '3', '2020-10-16 08:45:20'),
(22, 5, 'Brewed Awake', 'Americano', 'https://via.placeholder.com/400/889/fff/?text=BrewedAwake', '2', '2020-09-15 01:46:26'),
(23, 3, 'Brewed Awake', 'Latte', 'https://via.placeholder.com/400/986/fff/?text=undefined', '3', '2020-02-23 04:33:22'),
(24, 5, 'The love Point', 'Cocoa', 'https://via.placeholder.com/400/845/fff/?text=undefined', '3', '2020-08-21 05:21:06'),
(25, 3, 'Brew Culture', 'Glace', 'https://via.placeholder.com/400/973/fff/?text=undefined', '4', '2020-04-21 05:06:14'),
(26, 10, 'Brew Culture', 'Chocolate', 'https://via.placeholder.com/400/724/fff/?text=undefined', '3', '2020-04-07 07:31:10'),
(27, 2, 'Latte', 'Mocha', 'https://via.placeholder.com/400/781/fff/?text=undefined', '4', '2020-08-03 05:33:42'),
(28, 10, 'The love Point', 'Chocolate', 'https://via.placeholder.com/400/780/fff/?text=undefined', '1', '2020-03-18 02:17:18'),
(29, 3, 'The Molecule Effect', 'Cocoa', 'https://via.placeholder.com/400/937/fff/?text=undefined', '4', '2020-07-23 03:04:26'),
(30, 6, 'Honey Coffee', 'Espresso', 'https://via.placeholder.com/400/810/fff/?text=undefined', '1', '2020-01-16 01:13:48'),
(31, 7, 'The love Point', 'Chocolate', 'https://via.placeholder.com/400/717/fff/?text=undefined', '3', '2020-04-10 12:16:46'),
(32, 8, 'The Molecule Effect', 'Mocha', 'https://via.placeholder.com/400/728/fff/?text=undefined', '2', '2020-04-02 10:46:47'),
(33, 9, 'The Java Break', 'Fredo', 'https://via.placeholder.com/400/912/fff/?text=undefined', '4', '2020-02-24 01:47:49'),
(34, 7, 'The love Point', 'Latte', 'https://via.placeholder.com/400/779/fff/?text=undefined', '2', '2020-02-25 10:56:54'),
(35, 10, 'Latte', 'Cappuccino', 'https://via.placeholder.com/400/817/fff/?text=undefined', '5', '2020-01-24 08:02:49'),
(36, 8, 'Beauty Mug', 'Cocoa', 'https://via.placeholder.com/400/909/fff/?text=undefined', '2', '2020-02-20 10:33:18'),
(37, 6, 'Manhattan Mocha', 'Cappuccino', 'https://via.placeholder.com/400/893/fff/?text=undefined', '1', '2020-03-23 10:42:09'),
(38, 4, 'Brew Culture', 'Mocha', 'https://via.placeholder.com/400/947/fff/?text=undefined', '1', '2020-05-24 06:16:27'),
(39, 6, 'Brew Culture', 'Espresso', 'https://via.placeholder.com/400/976/fff/?text=undefined', '3', '2020-01-05 03:51:35'),
(40, 5, 'Wide Awake Cafe', 'Macchiato', 'https://via.placeholder.com/400/756/fff/?text=undefined', '1', '2020-07-16 10:08:38'),
(41, 4, 'Elemental Coffee', 'Cappuccino', 'https://via.placeholder.com/400/794/fff/?text=undefined', '5', '2020-10-01 08:19:00'),
(42, 7, 'Brewed Awakening', 'Glace', 'https://via.placeholder.com/400/725/fff/?text=undefined', '5', '2020-08-28 09:30:54'),
(43, 7, 'Manhattan Mocha', 'Fredo', 'https://via.placeholder.com/400/835/fff/?text=undefined', '2', '2020-07-06 03:11:43'),
(44, 4, 'The Molecule Effect', 'Fredo', 'https://via.placeholder.com/400/804/fff/?text=undefined', '3', '2020-09-20 06:47:28'),
(45, 4, 'The love Point', 'Mocha', 'https://via.placeholder.com/400/792/fff/?text=undefined', '1', '2020-04-22 01:29:05'),
(46, 4, 'The Java Break', 'Glace', 'https://via.placeholder.com/400/809/fff/?text=undefined', '5', '2020-08-26 06:26:03'),
(47, 6, 'Beauty Mug', 'Fredo', 'https://via.placeholder.com/400/850/fff/?text=undefined', '4', '2020-08-16 07:36:34'),
(48, 9, 'Brew Culture', 'Frappucino', 'https://via.placeholder.com/400/771/fff/?text=undefined', '3', '2020-05-05 09:12:06'),
(49, 7, 'The love Point', 'Irish', 'https://via.placeholder.com/400/731/fff/?text=undefined', '1', '2020-09-19 11:35:51'),
(50, 4, 'The Molecule Effect', 'Cappuccino', 'https://via.placeholder.com/400/739/fff/?text=undefined', '4', '2020-09-28 08:02:22'),
(153, 12, 'Caramel Macchiato', 'Frappuccino', 'uploads/1608066609.045_coffee6.jpg', '2', '2020-12-15 14:09:29'),
(154, 12, 'Pike Place', 'Hot Coffee', 'uploads/1608066892.2499_coffee3.jpg', '5', '2020-12-15 14:14:06'),
(155, 12, 'Brew', 'Flat White', 'uploads/1608066902.6917_coffee1.jpeg', '2', '2020-12-15 14:14:39'),
(119, 0, '', '', '', '5', '2020-12-15 02:01:46'),
(120, 0, 'C:\\fakepath\\1bd09ad74de58d9b1d183d5f9bbc74cb.png', '', '', '5', '2020-12-15 02:01:54'),
(121, 0, '', '', '', '5', '2020-12-15 02:01:56'),
(123, 0, '', '', '', '5', '2020-12-15 02:07:47'),
(152, 12, 'Java chip', 'Frappachino', 'uploads/1608066673.3293_coffee5.jpg', '5', '2020-12-15 14:08:42'),
(146, 10, '', '', '', '', '2020-12-15 06:25:17'),
(147, 10, '', '', '', '', '2020-12-15 06:39:12'),
(148, 10, '', '', '', '', '2020-12-15 06:57:20'),
(150, 12, 'Mocha Latte', 'Latte', 'uploads/1608065689.0498_coffee-2.jpg', '4', '2020-12-15 13:54:28'),
(151, 12, 'Glace', 'Americano', 'uploads/1608066693.0569_coffee1.jpeg', '4', '2020-12-15 14:08:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_coffee`
--
ALTER TABLE `track_coffee`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `track_coffee`
--
ALTER TABLE `track_coffee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=156;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
