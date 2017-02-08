class ChangeColumnTypeSeatRowInReservations < ActiveRecord::Migration
  def change
    change_column :reservations, :seat_row, 'integer USING CAST(seat_row AS integer)'
  end
end
