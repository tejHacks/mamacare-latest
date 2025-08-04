CREATE DATABASE mamahub_db;
USE mamahub_db;

-- Users table for authentication
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    verification_code VARCHAR(255),
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  verification_code VARCHAR(255),
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Babies table for user-linked baby profiles
CREATE TABLE babies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    birth_date DATE NOT NULL,
    gender ENUM('male', 'female', 'other') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user_id (user_id)
);

-- Schedules for feeding, sleep, doctor visits, vaccines
CREATE TABLE schedules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    baby_id INT NOT NULL,
    type ENUM('feeding', 'sleep', 'doctor', 'vaccine') NOT NULL,
    scheduled_time DATETIME NOT NULL,
    notes TEXT,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_baby_id (baby_id)
);

-- Expenses for baby-related costs
CREATE TABLE expenses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    baby_id INT,
    category ENUM('diapers', 'food', 'medical', 'clothing', 'toys', 'other') NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    description TEXT,
    expense_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user_id (user_id),
    INDEX idx_baby_id (baby_id)
);

-- Milestones for baby’s firsts
CREATE TABLE milestones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    baby_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    milestone_date DATE NOT NULL,
    photo_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_baby_id (baby_id)
);

-- Growth Records for height, weight, BMI
CREATE TABLE growth_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    baby_id INT NOT NULL,
    height DECIMAL(5, 2) NOT NULL,
    weight DECIMAL(5, 2) NOT NULL,
    bmi DECIMAL(5, 2),
    record_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_baby_id (baby_id)
);

-- Emergency Contacts
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    relation VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user_id (user_id)
);

-- Tasks for daily reminders
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    baby_id INT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_time DATETIME NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user_id (user_id),
    INDEX idx_baby_id (baby_id)
);

-- Grocery Lists for meal planning
CREATE TABLE grocery_lists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    baby_id INT,
    item VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    purchased BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user_id (user_id),
    INDEX idx_baby_id (baby_id)
);

-- Scriptures for daily memorization
CREATE TABLE scriptures (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    verse TEXT NOT NULL,
    reference VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user_id (user_id)
);

-- Daily Reads for micro-reads
CREATE TABLE daily_reads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    published_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- CREATE DATABASE mamahub_db;
-- USE mamahub_db;

-- -- Users table for authentication
-- CREATE TABLE users (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) UNIQUE NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Babies table for user-linked baby profiles
-- CREATE TABLE babies (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     name VARCHAR(255) NOT NULL,
--     birth_date DATE NOT NULL,
--     gender ENUM('male', 'female', 'other') NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     INDEX idx_user_id (user_id)
-- );

-- -- Schedules for feeding, sleep, doctor visits, vaccines
-- CREATE TABLE schedules (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     baby_id INT NOT NULL,
--     type ENUM('feeding', 'sleep', 'doctor', 'vaccine') NOT NULL,
--     scheduled_time DATETIME NOT NULL,
--     notes TEXT,
--     completed BOOLEAN DEFAULT FALSE,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     INDEX idx_baby_id (baby_id)
-- );

-- -- Expenses for baby-related costs
-- CREATE TABLE expenses (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     baby_id INT,
--     category ENUM('diapers', 'food', 'medical', 'clothing', 'toys', 'other') NOT NULL,
--     amount DECIMAL(10, 2) NOT NULL,
--     description TEXT,
--     expense_date DATE NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     INDEX idx_user_id (user_id),
--     INDEX idx_baby_id (baby_id)
-- );

-- -- Milestones for baby’s firsts
-- CREATE TABLE milestones (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     baby_id INT NOT NULL,
--     title VARCHAR(255) NOT NULL,
--     description TEXT,
--     milestone_date DATE NOT NULL,
--     photo_url VARCHAR(255),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     INDEX idx_baby_id (baby_id)
-- );

-- -- Growth Records for height, weight, BMI
-- CREATE TABLE growth_records (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     baby_id INT NOT NULL,
--     height DECIMAL(5, 2) NOT NULL,
--     weight DECIMAL(5, 2) NOT NULL,
--     bmi DECIMAL(5, 2),
--     record_date DATE NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     INDEX idx_baby_id (baby_id)
-- );

-- -- Emergency Contacts
-- CREATE TABLE contacts (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     name VARCHAR(255) NOT NULL,
--     phone VARCHAR(50) NOT NULL,
--     relation VARCHAR(100),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     INDEX idx_user_id (user_id)
-- );

-- -- Tasks for daily reminders
-- CREATE TABLE tasks (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     baby_id INT,
--     title VARCHAR(255) NOT NULL,
--     description TEXT,
--     due_time DATETIME NOT NULL,
--     completed BOOLEAN DEFAULT FALSE,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     INDEX idx_user_id (user_id),
--     INDEX idx_baby_id (baby_id)
-- );

-- -- Grocery Lists for meal planning
-- CREATE TABLE grocery_lists (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     baby_id INT,
--     item VARCHAR(255) NOT NULL,
--     quantity INT NOT NULL,
--     purchased BOOLEAN DEFAULT FALSE,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     INDEX idx_user_id (user_id),
--     INDEX idx_baby_id (baby_id)
-- );

-- -- Scriptures for daily memorization
-- CREATE TABLE scriptures (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     verse TEXT NOT NULL,
--     reference VARCHAR(100) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     INDEX idx_user_id (user_id)
-- );

-- -- Optional: Daily Reads for micro-reads
-- CREATE TABLE daily_reads (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     content TEXT NOT NULL,
--     published_date DATE NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );


-- CREATE DATABASE mamahub_db;
-- USE mamahub_db;
-- CREATE TABLE users (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) UNIQUE NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );
-- CREATE TABLE babies (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     name VARCHAR(255) NOT NULL,
--     birth_date DATE NOT NULL,
--     gender ENUM('male', 'female', 'other') NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     INDEX idx_user_id (user_id)
-- );
-- CREATE TABLE schedules (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     baby_id INT NOT NULL,
--     type ENUM('feeding', 'sleep', 'doctor', 'vaccine') NOT NULL,
--     scheduled_time DATETIME NOT NULL,
--     notes TEXT,
--     completed BOOLEAN DEFAULT FALSE,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     INDEX idx_baby_id (baby_id)
-- );
-- CREATE TABLE expenses (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     baby_id INT,
--     category ENUM('diapers', 'food', 'medical', 'clothing', 'toys', 'other') NOT NULL,
--     amount DECIMAL(10, 2) NOT NULL,
--     description TEXT,
--     expense_date DATE NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     INDEX idx_user_id (user_id),
--     INDEX idx_baby_id (baby_id)
-- );
-- CREATE TABLE milestones (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     baby_id INT NOT NULL,
--     title VARCHAR(255) NOT NULL,
--     description TEXT,
--     milestone_date DATE NOT NULL,
--     photo_url VARCHAR(255),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     INDEX idx_baby_id (baby_id)
-- );