CREATE TABLE IF NOT EXISTS Restaurants (
  id SERIAL PRIMARY KEY,
  attraction_id integer not null,
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