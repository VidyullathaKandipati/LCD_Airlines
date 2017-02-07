class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :flight_id
      t.string :seat_row
      t.integer :seat_col

      t.timestamps null: false
    end
  end
end
