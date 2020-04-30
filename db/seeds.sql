
INSERT INTO `employee_db`.`departments` (`id`, `department`) VALUES ('1', 'R&D');
INSERT INTO `employee_db`.`departments` (`id`, `department`) VALUES ('2', 'HR');
INSERT INTO `employee_db`.`departments` (`id`, `department`) VALUES ('3', 'Sales');


INSERT INTO `employee_db`.`roles` (`id`, `title`, `salary`, `depId`) VALUES ('1', 'Developer', '70000', '1');
INSERT INTO `employee_db`.`roles` (`id`, `title`, `salary`, `depId`) VALUES ('2', 'Recruiter', '60000', '2');
INSERT INTO `employee_db`.`roles` (`id`, `title`, `salary`, `depId`) VALUES ('3', 'Sales Rep', '80000', '3');


INSERT INTO `employee_db`.`employees` (`id`, `firstName`, `lastName`, `roleId`, `managerId`) VALUES ('1', 'Jon', 'Smith', '1', NULL);
INSERT INTO `employee_db`.`employees` (`id`, `firstName`, `lastName`, `roleId`, `managerId`) VALUES ('2', 'Emily', 'Cane', '1', '1');
INSERT INTO `employee_db`.`employees` (`id`, `firstName`, `lastName`, `roleId`, `managerId`) VALUES ('3', 'Sam', 'Brown', '2', '4');
INSERT INTO `employee_db`.`employees` (`id`, `firstName`, `lastName`, `roleId`, `managerId`) VALUES ('4', 'Amanda', 'Slone', '2', NULL);
INSERT INTO `employee_db`.`employees` (`id`, `firstName`, `lastName`, `roleId`, `managerId`) VALUES ('5', 'Kate', 'Martin', '3', NULL);
