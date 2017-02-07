json.extract! flight, :id, :date, :origin, :destination, :plane_id, :created_at, :updated_at
json.url flight_url(flight, format: :json)