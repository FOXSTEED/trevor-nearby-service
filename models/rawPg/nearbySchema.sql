
CREATE TABLE Restaurant (
  id SERIAL PRIMARY KEY,
  attraction_type integer not null,
  name varchar(150) not null,
  latitude double precision NOT NULL,
  longitude double precision NOT NULL,
  address varchar(150) NOT NULL,
  rating integer,
  num_reviews integer,
  ranking integer,
  tags varchar(100),
  image_url varchar(125),
  created_at timestamp without time zone default (now() at time zone 'utc')
);

CREATE TABLE Attraction (
  id SERIAL PRIMARY KEY,
  attraction_type integer not null,
  name varchar(150) not null,
  latitude double precision NOT NULL,
  longitude double precision NOT NULL,
  address varchar(150) NOT NULL,
  rating integer,
  num_reviews integer,
  ranking integer,
  tags varchar(100),
  image_url varchar(125),
  created_at timestamp without time zone default (now() at time zone 'utc')
);

CREATE TABLE Hotel (
  id SERIAL PRIMARY KEY,
  attraction_type integer not null,
  name varchar(150) not null,
  latitude double precision NOT NULL,
  longitude double precision NOT NULL,
  address varchar(150) NOT NULL,
  rating integer,
  num_reviews integer,
  ranking integer,
  tags varchar(100),
  image_url varchar(125),
  created_at timestamp without time zone default (now() at time zone 'utc')
);

CREATE TABLE AttractionType (
  id SERIAL PRIMARY KEY,
  name VARCHAR(15) NOT NULL
);

