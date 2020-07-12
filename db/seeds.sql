USE taco_db;


INSERT INTO Cuisines (name) VALUES ("Italian");
INSERT INTO Cuisines (name) VALUES ("Chinese");
INSERT INTO Cuisines (name) VALUES ("Mongolian");
INSERT INTO Cuisines (name) VALUES ("Argentinian");

-- SELECT * FROM Cuisines;

INSERT INTO Users (email, fullName, password) VALUES ("test","test","$2a$10$OLoLgy1vJFAZBbxUAPqVJuYvTxTwPYIi1Sxk4rb.PKAYgWqahTstq");
INSERT INTO Users (email, fullName, password) VALUES ("haylie","haylie","$2a$10$OLoLgy1vJFAZBbxUAPqVJuYvTxTwPYIi1Sxk4rb.PKAYgWqahTstq");
INSERT INTO Users (email, fullName, password) VALUES ("wagner","wagner","$2a$10$OLoLgy1vJFAZBbxUAPqVJuYvTxTwPYIi1Sxk4rb.PKAYgWqahTstq");

-- SELECT * FROM Users;

INSERT INTO Restaurants (name, mustHave,location,price,CuisineId,UserId) VALUES ("Marameo", "CacioePepe","CBD", "$","1","1");
INSERT INTO Restaurants (name, mustHave,location,price,CuisineId,UserId) VALUES ("Dumplings", "Dumplings","CBD", "$$","2","1");
INSERT INTO Restaurants (name, mustHave,location,price,CuisineId,UserId) VALUES ("Sofia", "Spaghetti","CBD", "$$$","3","1");

-- SELECT * FROM Restaurants;

INSERT INTO Favourites (RestaurantId,UserId) VALUES ("1","1");
INSERT INTO Favourites (RestaurantId,UserId) VALUES ("2","1");
INSERT INTO Favourites (RestaurantId,UserId) VALUES ("3","1");

-- SELECT * FROM Favourites;

INSERT INTO Reviews (rating, RestaurantId,UserId) VALUES ("1","1","1");
INSERT INTO Reviews (rating, RestaurantId,UserId) VALUES ("1","2","1");
INSERT INTO Reviews (rating, RestaurantId,UserId) VALUES ("1","3","1");

-- SELECT * FROM Reviews;




