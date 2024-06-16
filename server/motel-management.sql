DROP DATABASE IF EXISTS motel_management;
CREATE DATABASE motel_management;
USE motel_management;

-- Create the deal table
CREATE TABLE deal (
    reference_number INT PRIMARY KEY,
    deal_name VARCHAR(50),
    reservations_left INT,
    end_date DATE,
    room_type VARCHAR(50),
    status VARCHAR(20)
);

-- Insert data into the deal table
INSERT INTO deal (reference_number, deal_name, reservations_left, end_date, room_type, status) VALUES
(5644, 'Family deal', 10, '2023-03-21', 'VIP', 'Ongoing'),
(6112, 'Christmas deal', 12, '2023-03-25', 'Single', 'Full'),
(6141, 'Family deal', 15, '2023-04-25', 'Triple', 'Inactive'),
(6535, 'Black Friday', 10, '2023-05-01', 'VIP', 'New'),
(7152, 'Summer Special', 20, '2023-08-31', 'Suite', 'Ongoing'),
(8233, 'Easter Promo', 8, '2023-04-15', 'Double', 'Inactive'),
(9361, 'New Year Bash', 5, '2023-12-31', 'VIP', 'New'),
(4782, 'Spring Fling', 25, '2023-06-20', 'Single', 'Ongoing'),
(5893, 'Autumn Retreat', 18, '2023-11-10', 'Triple', 'Full'),
(6934, 'Winter Wonderland', 7, '2023-01-30', 'Suite', 'Inactive');

-- Create the room table
CREATE TABLE room (
    room_number VARCHAR(10) PRIMARY KEY,
    bed_type VARCHAR(50),
    room_floor VARCHAR(10),
    room_facility TEXT,
    status VARCHAR(20)
);

-- Insert data into the room table
INSERT INTO room (room_number, bed_type, room_floor, room_facility, status) VALUES
('A647', 'Double bed', 'Floor -1', 'AC, shower, Double bed, towel, bathtub, TV', 'Available'),
('A456', 'Single bed', 'Floor -2', 'AC, shower, Double bed, towel, bathtub, TV', 'Booked'),
('A645', 'VIP', 'Floor -1', 'AC, shower, Double bed, towel, bathtub, TV', 'Booked'),
('A684', 'VIP', 'Floor -1', 'AC, shower, Double bed, towel, bathtub, TV', 'Reserved'),
('B464', 'Single bed', 'Floor -1', 'AC, shower, Double bed, towel, bathtub, TV', 'Reserved'),
('C648', 'Double bed', 'Floor -2', 'AC, shower, Double bed, towel, bathtub, TV', 'Waitlist'),
('D644', 'Double bed', 'Floor -3', 'AC, shower, Double bed, towel, bathtub, TV', 'Reserved'),
('B641', 'Single bed', 'Floor -5', 'AC, shower, Double bed, towel, bathtub, TV', 'Blocked'),
('B567', 'Suite', 'Floor -1', 'AC, shower, Double bed, towel, bathtub, TV, minibar', 'Available'),
('C789', 'Single bed', 'Floor -4', 'AC, shower, Double bed, towel, bathtub, TV', 'Booked'),
('D890', 'Double bed', 'Floor -3', 'AC, shower, Double bed, towel, bathtub, TV', 'Available'),
('E123', 'Suite', 'Floor -2', 'AC, shower, Double bed, towel, bathtub, TV, minibar', 'Booked'),
('F234', 'Single bed', 'Floor -3', 'AC, shower, Double bed, towel, bathtub, TV', 'Waitlist'),
('G345', 'VIP', 'Floor -1', 'AC, shower, Double bed, towel, bathtub, TV', 'Available'),
('H456', 'Double bed', 'Floor -2', 'AC, shower, Double bed, towel, bathtub, TV', 'Booked'),
('I567', 'Suite', 'Floor -5', 'AC, shower, Double bed, towel, bathtub, TV, minibar', 'Reserved'),
('J678', 'Single bed', 'Floor -4', 'AC, shower, Double bed, towel, bathtub, TV', 'Blocked'),
('K789', 'Double bed', 'Floor -1', 'AC, shower, Double bed, towel, bathtub, TV', 'Available');

-- Create the rate table
CREATE TABLE rate (
    room_type VARCHAR(50),
    deals VARCHAR(50),
    cancellation_policy VARCHAR(50),
    deal_price DECIMAL(10, 2),
    rates DECIMAL(10, 2),
    availability VARCHAR(20)
);

-- Insert data into the rate table
INSERT INTO rate (room_type, deals, cancellation_policy, deal_price, rates, availability) VALUES
('Single', 'Family deal', 'Strict', 800.00, 800.00, '5 rooms'),
('Double', 'Christmas deal', 'Strict', 1200.00, 1200.00, 'Full'),
('Triple', 'Family deal', 'Flexible', 2000.00, 2000.00, '12 rooms'),
('VIP', 'Black Friday', 'Non refundable', 4000.00, 4000.00, '10 rooms');

-- Create the guest table
CREATE TABLE guest (
    reservation_id INT PRIMARY KEY,
    name VARCHAR(50),
    room_number VARCHAR(10),
    total_amount DECIMAL(10, 2),
    amount_paid DECIMAL(10, 2),
    status VARCHAR(20),
    FOREIGN KEY (room_number) REFERENCES room(room_number)
);

-- Insert data into the guest table
INSERT INTO guest (reservation_id, name, room_number, total_amount, amount_paid, status) VALUES
(5644, 'Alexander', 'A647', 467.00, 200.00, 'Clean'),
(6112, 'Pegasus', 'A456', 645.00, 250.00, 'Dirty'),
(6141, 'Martin', 'A645', 686.00, 400.00, 'Dirty'),
(6535, 'Cecil', 'A684', 8413.00, 2500.00, 'Inspected'),
(6541, 'Luke', 'B464', 841.00, 400.00, 'Clean'),
(9846, 'Yadrin', 'C648', 684.00, 300.00, 'Clean'),
(4921, 'Kiand', 'D644', 984.00, 513.00, 'Pick up'),
(9841, 'Turen', 'B641', 984.00, 600.00, 'Dirty'),
(7543, 'Liam', 'B567', 1200.00, 800.00, 'Inspected'),
(8632, 'Olivia', 'C789', 1500.00, 700.00, 'Clean'),
(9674, 'Emma', 'D890', 2000.00, 1500.00, 'Dirty'),
(1123, 'Noah', 'E123', 1750.00, 1000.00, 'Pick up'),
(2234, 'Ava', 'F234', 1900.00, 900.00, 'Inspected'),
(3345, 'Sophia', 'G345', 1600.00, 600.00, 'Clean'),
(4456, 'James', 'H456', 2200.00, 1700.00, 'Dirty'),
(5567, 'Isabella', 'I567', 2400.00, 2000.00, 'Clean'),
(6678, 'Benjamin', 'J678', 1800.00, 800.00, 'Inspected'),
(7789, 'Mia', 'K789', 1300.00, 500.00, 'Pick up');

SELECT * FROM guest;
SELECT * FROM deal;
SELECT * FROM room;
SELECT * FROM rate;
