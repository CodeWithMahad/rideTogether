import React, { useState } from 'react';

function RideForm() {
  const [image, setImage] = useState('');
  const [totalSeats, setTotalSeats] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [costPerSeat, setCostPerSeat] = useState('');
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carNumberPlate, setCarNumberPlate] = useState('');
  const [refreshment, setRefreshment] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };
  const [routes, setRoutes] = useState([
    {
      departureCity: '',
      arrivalCity: '',
      fare: '',
    }
  ]);

  const handleAddRoute = () => {
    setRoutes([...routes, { departureCity: '', arrivalCity: '', fare: '' }]);
  };

  const handleRemoveRoute = (index) => {
    const updatedRoutes = [...routes];
    updatedRoutes.splice(index, 1);
    setRoutes(updatedRoutes);
  };

  const handleChangeRoute = (index, field, value) => {
    const updatedRoutes = [...routes];
    updatedRoutes[index][field] = value;
    setRoutes(updatedRoutes);
  };
  return (
    <div>
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-6 fw-bold">Define your whole Routes </h1>
            <div className="container mt-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">Image of Car</label>
                  <input type="file" className="form-control" id="image" onChange={(e) => setImage(e.target.value)} />
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Car Name" id="carName" value={carName} onChange={(e) => setCarName(e.target.value)} />
                    </div>
                  </div>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Car Model" id="carModel" value={carModel} onChange={(e) => setCarModel(e.target.value)} />
                  </div>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Car Number Plate" id="carNumberPlate" value={carNumberPlate} onChange={(e) => setCarNumberPlate(e.target.value)} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <input type="date" className="form-control" placeholder="Date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                  </div>
                  <div className="col">
                    <input type="time" className="form-control" placeholder="Time" id="time" value={time} onChange={(e) => setTime(e.target.value)} />
                  </div>
                </div>
                {routes.map((route, index) => (
                  <div key={index} className="mb-3">
                    <div className="row mb-3">
                      <div className="col">
                        <input type="text" className="form-control" placeholder="Departure City" value={route.departureCity} onChange={(e) => handleChangeRoute(index, 'departureCity', e.target.value)} />
                      </div>
                      <div className="col">
                        <input type="text" className="form-control" placeholder="Arrival City" value={route.arrivalCity} onChange={(e) => handleChangeRoute(index, 'arrivalCity', e.target.value)} />
                      </div>
                      <div className="col">
                        <input type="number" className="form-control" placeholder="Fare" value={route.fare} onChange={(e) => handleChangeRoute(index, 'fare', e.target.value)} />
                      </div>
                      <div className="col">
                        <button type="button" className="btn btn-danger" onClick={() => handleRemoveRoute(index)}>Remove Route</button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mb-3">
                  <button type="button" className="btn btn-secondary" onClick={handleAddRoute}>Add Route</button>
                </div>
                <div className="mb-3">
                  <select className="form-select" placeholder="Refreshment" id="refreshment" value={refreshment} onChange={(e) => setRefreshment(e.target.value)}>
                    <option value="">Refreshment</option>
                    <option value="Water">Water</option>
                    <option value="Tea">Tea</option>
                    <option value="Coffee">Coffee</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control" placeholder="Whatsapp Number" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Insert Schedule</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RideForm;
