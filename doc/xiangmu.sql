/*
Navicat MySQL Data Transfer

Source Server         : mydatabase
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : xiangmu

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-11-30 17:11:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `tital` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `price` decimal(10,1) NOT NULL,
  `sell` decimal(6,0) NOT NULL,
  `activity` varchar(255) DEFAULT NULL,
  `num` int(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('25', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖', '3');
INSERT INTO `cart` VALUES ('2', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购', '4');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `tital` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `price` decimal(10,1) NOT NULL,
  `sell` decimal(6,0) NOT NULL,
  `activity` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=102 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('2', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('3', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('4', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('5', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('6', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('7', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('8', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('9', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('10', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('11', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('12', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('13', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('14', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('15', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('16', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('17', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('18', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('19', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('20', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('21', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('22', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('23', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('24', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('25', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('26', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('27', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('28', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('29', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('30', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('31', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('32', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('33', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('34', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('35', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('36', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('37', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('38', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('39', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('40', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('41', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('42', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('43', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('44', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('45', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('46', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('47', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('48', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('49', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('50', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('51', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('52', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('53', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('54', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('55', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('56', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('57', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('58', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('59', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('60', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('61', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('62', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('63', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('64', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('65', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('66', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('67', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('68', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('69', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('70', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('71', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('72', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('73', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('74', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('75', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('76', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('77', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('78', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('79', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('80', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('81', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('82', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('83', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('84', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('85', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('86', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('87', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('88', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('89', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('90', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('91', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('92', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('93', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('94', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('95', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('96', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');
INSERT INTO `goods` VALUES ('97', '55°西凤酒瓶装500ml', '0657700_110x180.PNG', '29.0', '10158', '限时抢购');
INSERT INTO `goods` VALUES ('98', '53°茅台迎宾酒500ml', '2068213_110x180.png', '96.0', '30055', '限时抢购');
INSERT INTO `goods` VALUES ('99', '酒鬼馥郁天成馥郁香型52...', '5388197_110x180.png', '239.0', '2814', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('100', '51°茅台 汉酱酒 500ml', '6888589_380x620.png', '308.0', '1460', '黑五狂欢购，限时特卖');
INSERT INTO `goods` VALUES ('101', '52度 五粮液 春夏秋冬 50...', '1735279_110x180.JPG', '68.0', '566', '品质白酒 超低价势');

-- ----------------------------
-- Table structure for reg
-- ----------------------------
DROP TABLE IF EXISTS `reg`;
CREATE TABLE `reg` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reg
-- ----------------------------
INSERT INTO `reg` VALUES ('1', 'yhr', '1234', '2018-11-26 14:48:33');
INSERT INTO `reg` VALUES ('2', '123', 'aa', '2018-11-26 16:40:10');
INSERT INTO `reg` VALUES ('3', 'true', 'a11111', '2018-11-26 16:48:57');
INSERT INTO `reg` VALUES ('4', '13311111111', 'a11111', '2018-11-26 16:50:45');

-- ----------------------------
-- Table structure for winegoods
-- ----------------------------
DROP TABLE IF EXISTS `winegoods`;
CREATE TABLE `winegoods` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of winegoods
-- ----------------------------
INSERT INTO `winegoods` VALUES ('1', 'img/1355894950952.jpg');
INSERT INTO `winegoods` VALUES ('2', 'img/1355895866235.jpg');
INSERT INTO `winegoods` VALUES ('3', 'img/1355895845568.jpg');
INSERT INTO `winegoods` VALUES ('4', 'img/1355895866235.jpg');
INSERT INTO `winegoods` VALUES ('5', 'img/1355895866235.jpg');
INSERT INTO `winegoods` VALUES ('6', 'img/1355894950952.jpg');
INSERT INTO `winegoods` VALUES ('7', 'img/1355895845568.jpg');
INSERT INTO `winegoods` VALUES ('8', 'img/1355895866235.jpg');
INSERT INTO `winegoods` VALUES ('9', 'img/1355894950952.jpg');
INSERT INTO `winegoods` VALUES ('10', 'img/1355895845568.jpg');

-- ----------------------------
-- Table structure for winegoods2
-- ----------------------------
DROP TABLE IF EXISTS `winegoods2`;
CREATE TABLE `winegoods2` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `good` decimal(10,0) NOT NULL,
  `titles` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of winegoods2
-- ----------------------------
INSERT INTO `winegoods2` VALUES ('1', '肖克波尔多干红葡萄酒', 'img/goods1.png', '68.00', '65', 'Sean Laeques');
INSERT INTO `winegoods2` VALUES ('2', '蒙特斯紫天使干红葡萄酒', 'img/goods01.jpg', '409.00', '5049', 'Purple Angel by Montes');
INSERT INTO `winegoods2` VALUES ('3', '【名庄】力士金城堡干红2010', 'img/goods02.jpg', '858.00', '439', 'Chateau Lascombes  2010');
INSERT INTO `winegoods2` VALUES ('4', '桃乐丝公牛血金标干红葡萄酒（新标）-6支装', 'img/goods03.png', '580.00', '11601', null);
INSERT INTO `winegoods2` VALUES ('5', '【名庄】碧尚女爵红2005', 'img/goods04.jpg', '1228.00', '180', 'Comtesse de Lalande 2005');
SET FOREIGN_KEY_CHECKS=1;
