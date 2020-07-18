USE taco_db;

   
INSERT INTO Cuisines (name)VALUES("Argentinian");
INSERT INTO Cuisines (name)VALUES("Asian Fusion");
INSERT INTO Cuisines (name)VALUES("Bar");
INSERT INTO Cuisines (name)VALUES("Bars");
INSERT INTO Cuisines (name)VALUES("Brunch");
INSERT INTO Cuisines (name)VALUES("Chinese");
INSERT INTO Cuisines (name)VALUES("Craft Beers");
INSERT INTO Cuisines (name)VALUES("Dumplings");
INSERT INTO Cuisines (name)VALUES("Hidden Bar");
INSERT INTO Cuisines (name)VALUES("Indian");
INSERT INTO Cuisines (name)VALUES("Italian");
INSERT INTO Cuisines (name)VALUES("Japanese");
INSERT INTO Cuisines (name)VALUES("Korean");
INSERT INTO Cuisines (name)VALUES("Korean BBQ");
INSERT INTO Cuisines (name)VALUES("Korean Fusion");
INSERT INTO Cuisines (name)VALUES("Malaysian");
INSERT INTO Cuisines (name)VALUES("Mediterranean");
INSERT INTO Cuisines (name)VALUES("Mexican");
INSERT INTO Cuisines (name)VALUES("Middle Eastern");
INSERT INTO Cuisines (name)VALUES("Modern Australian");
INSERT INTO Cuisines (name)VALUES("Modern French");
INSERT INTO Cuisines (name)VALUES("Modern Japanese");
INSERT INTO Cuisines (name)VALUES("Modern Middle East");
INSERT INTO Cuisines (name)VALUES("Modern Vietnamese");
INSERT INTO Cuisines (name)VALUES("Mongolian");
INSERT INTO Cuisines (name)VALUES("Peruvian");
INSERT INTO Cuisines (name)VALUES("Polish");
INSERT INTO Cuisines (name)VALUES("Pop Up");
INSERT INTO Cuisines (name)VALUES("Ramen");
INSERT INTO Cuisines (name)VALUES("Seafood");
INSERT INTO Cuisines (name)VALUES("Souh East Asian Fusion");
INSERT INTO Cuisines (name)VALUES("South East Asian");
INSERT INTO Cuisines (name)VALUES("Spanish");
INSERT INTO Cuisines (name)VALUES("Tapas");
INSERT INTO Cuisines (name)VALUES("Thai");
INSERT INTO Cuisines (name)VALUES("Vietnamese");
INSERT INTO Cuisines (name)VALUES("Yumcha");

-- SELECT * FROM Cuisines;

INSERT INTO Users (email, fullName, password) VALUES ("h.g@test.com","haylie","$2a$10$OLoLgy1vJFAZBbxUAPqVJuYvTxTwPYIi1Sxk4rb.PKAYgWqahTstq");


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




