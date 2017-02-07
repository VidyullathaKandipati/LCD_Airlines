# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Plane date
Plane.destroy_all
p1 = Plane.create(name: "Airbus A320", rows: 28, cols: 6)
p2 = Plane.create(name: "Boeing 737", rows: 30, cols: 8)
p3 = Plane.create(name: "Airbus A380", rows: 25, cols: 5)


Flight.destroy_all
f1 = Flight.create(date: "2017/02/23",origin: "SYD",destination: "OOL")
f2 = Flight.create(date: "2017/02/24",origin: "SYD",destination: "JFK")
f3 = Flight.create(date: "2017/02/25",origin: "SIN",destination: "LHR")

User.destroy_all
u1 = User.create(name: "Daniele", email: "daniele@ga.com", password: "chicken", password_confirmation: "chicken")
u2 = User.create(name: "Christle", email: "christle@ga.com", password: "chicken", password_confirmation: "chicken")
u3 = User.create(name: "Latha", email: "latha@ga.com", password: "chicken", password_confirmation: "chicken")

Reservation.destroy_all
f1.reservations.create(user: u1, seat_row: "A", seat_col: 3)
f1.reservations.create(user: u2, seat_row: "C", seat_col: 1)
f2.reservations.create(user: u3, seat_row: "A", seat_col: 6)

# Associations
p1.flights << f1 << f2
p2.flights << f3
