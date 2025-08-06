CREATE DATABASE IF NOT EXISTS mamahub_db;
USE mamahub_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  verification_code VARCHAR(255),
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS babies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  birth_date DATE NOT NULL,
  gender ENUM('male', 'female') NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS schedules (
  id INT AUTO_INCREMENT PRIMARY KEY,
  baby_id INT NOT NULL,
  type VARCHAR(100) NOT NULL,
  scheduled_time DATETIME NOT NULL,
  notes TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (baby_id) REFERENCES babies(id)
);

CREATE TABLE IF NOT EXISTS expenses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  baby_id INT,
  category VARCHAR(100) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  description TEXT,
  expense_date DATE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (baby_id) REFERENCES babies(id)
);

CREATE TABLE IF NOT EXISTS milestones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  baby_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  milestone_date DATE NOT NULL,
  photo_url VARCHAR(255),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (baby_id) REFERENCES babies(id)
);

CREATE TABLE IF NOT EXISTS daily_reads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  published_date DATE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS scriptures (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  verse TEXT NOT NULL,
  reference VARCHAR(100) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);


CREATE TABLE bmi_records (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  weight DECIMAL(5,2) NOT NULL,
  height DECIMAL(5,2) NOT NULL,
  bmi DECIMAL(5,2) GENERATED ALWAYS AS (weight / (height * height)) STORED,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Baby Measurements
CREATE TABLE baby_measurements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  baby_id INT NOT NULL,
  height DECIMAL(5,2) NOT NULL,
  weight DECIMAL(5,2) NOT NULL,
  measurement_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (baby_id) REFERENCES babies(id)
);

-- Birthday Reminders
CREATE TABLE birthday_reminders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  baby_id INT NOT NULL,
  reminder_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (baby_id) REFERENCES babies(id)
);

-- Accessories
CREATE TABLE accessories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  type ENUM('toy', 'clothing', 'maternal') NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Jaundice Checks
CREATE TABLE jaundice_checks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  baby_id INT NOT NULL,
  symptoms JSON NOT NULL,
  result TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (baby_id) REFERENCES babies(id)
);

-- Skin Disease Checks
CREATE TABLE skin_disease_checks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  baby_id INT NOT NULL,
  symptoms JSON NOT NULL,
  result TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (baby_id) REFERENCES babies(id)
);