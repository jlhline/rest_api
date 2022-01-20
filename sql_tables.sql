DROP TABLE IF EXISTS doctors CASCADE;
DROP TABLE IF EXISTS appointments;

CREATE TABLE doctors (
  user_id INT GENERATED ALWAYS AS IDENTITY,
  firstName TEXT,
  lastName TEXT,
  PRIMARY KEY(user_id)
);

CREATE TABLE appointments (
  appointment_id INT GENERATED ALWAYS AS IDENTITY,
  user_id INT,
  firstName TEXT,
  lastName TEXT,
  appTime TEXT,
  kind TEXT,
  PRIMARY KEY(appointment_id),
  CONSTRAINT fk_user
    FOREIGN KEY(user_id)
      REFERENCES doctors(user_id)
      ON DELETE CASCADE
);

insert into doctors (firstName,lastName) values ('Sterling','Archer')
insert into doctors (firstName,lastName) values ('Julius','Hibbert')

insert into appointments(user_id,firstName,lastName,appTime,kind) values (1,'First','Patient','2021-10-12 20:45:00','New Patient')
insert into appointments(user_id,firstName,lastName,appTime,kind) values (2,'Second','Patient','2021-10-12 08:45:00','Follow Up')