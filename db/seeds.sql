USE viral_db;

INSERT INTO Categories (name) VALUES ("Everyday Heroes"),("Quarantine Quotes"),("Healing Space"),("Newsworthy");

INSERT INTO `Users`(`id`,`name`,`fullName`,`password`)
VALUES
('1', 'dprice', 'Dylan Price', '$2a$10$sgjuiLpGaMbth5DyqBSv9ekqBMWq9PSxaybA/PYePnJirXbcbJFV6'),
('2', 'Lharrison', 'Lily Harrison', '$2a$10$zZx32mLkZ1d85AayFjudueX7dBq045LtUUSfpNGG8eI12eplyl4h2'),
('3', 'Tlee', 'Tom Lee', '$2a$10$5C2SB9soqRkqnWK0KUx2E.CsrDx.Mf40.pxRNMTrlUj7w2rjXv/j.'),
('4', 'gvee', 'George Vee', '$2a$10$//pHbEHjMk29vV8lPrpiAOKjkuplYmVpl/bAWSs1NLNQP2ItMSclS');

INSERT INTO `Stories` (`id`, `title`, `body`, `createdAt`, `updatedAt`, `CategoryId`, `UserId`)
VALUES
('3', 'Thank You', 'Thanks to all essential workers for all your great work in caring for everyone in our community. You are heroes!', '2020-05-21 09:44:08', '2020-05-21 09:44:08', '1', '2'),
