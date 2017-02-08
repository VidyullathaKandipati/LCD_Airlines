class ChangeColumnNameSeatColToStringOnReservations < ActiveRecord::Migration
  def change
    change_column :reservations, :seat_col, :string
  end
end
