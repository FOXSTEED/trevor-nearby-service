
CREATE TABLE Nearby (
  id SERIAL PRIMARY KEY,
  attraction_type integer not null,
  name varchar(150) not null,
  latitude integer NOT NULL,
  longitude integer NOT NULL,
  address varchar(150) NOT NULL,
  rating integer,
  num_reviews integer,
  ranking integer,
  tags varchar(100),
  image_url varchar(125),
  created_at date
);

CREATE TABLE AttractionType (
  id SERIAL PRIMARY KEY,
  name VARCHAR(15) NOT NULL
);

