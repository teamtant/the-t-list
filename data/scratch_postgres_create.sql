SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.location (
	"_id" serial NOT NULL,
	"latitude" varchar NOT NULL,
	"longitude" varchar NOT NULL,
	"clinic" varchar NOT NULL,
	CONSTRAINT "location_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.reviews (
	"_id" serial NOT NULL,
	"location_id" bigint NOT NULL,
	"service_type" varchar NOT NULL,
	"cost" varchar NOT NULL,
    "rating" integer NOT NULL,
    "review" varchar NOT NULL,
	CONSTRAINT "reviews_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE public.reviews ADD CONSTRAINT "reviews_fk0" FOREIGN KEY ("location_id") REFERENCES  public.location("_id");

