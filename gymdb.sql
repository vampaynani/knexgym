BEGIN TRANSACTION;
CREATE TABLE "profiles" (
	`id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`first_name`	TEXT,
	`last_name`	TEXT,
	`member_id`	INTEGER
);
INSERT INTO `profiles` VALUES (1,'lou','boo',1);
INSERT INTO `profiles` VALUES (2,'john','smith',2);
INSERT INTO `profiles` VALUES (3,'larry','jones',3);
CREATE TABLE "members" (
	`id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`email`	TEXT,
	`password`	TEXT
);
INSERT INTO `members` VALUES (1,'lou@gmail.com','123');
INSERT INTO `members` VALUES (2,'john@gmail.com','132');
INSERT INTO `members` VALUES (3,'larry@gmail.com','321');
CREATE TABLE "classes_members" (
	`id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`class_id`	INTEGER,
	`member_id`	INTEGER
);
INSERT INTO `classes_members` VALUES (1,1,3);
INSERT INTO `classes_members` VALUES (2,3,2);
INSERT INTO `classes_members` VALUES (3,2,1);
CREATE TABLE "classes" (
	`id`	INTEGER PRIMARY KEY AUTOINCREMENT,
	`instructor_name`	TEXT,
	`member_id`	INTEGER,
	`class_name`	TEXT
);
INSERT INTO `classes` VALUES (1,'steve',NULL,'boxing');
INSERT INTO `classes` VALUES (2,'joe',NULL,'cycling');
INSERT INTO `classes` VALUES (3,'mike','','basketball');
COMMIT;
