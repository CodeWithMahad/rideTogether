import React, { useState } from 'react';

export default function Verify() {
  const [profileImage, setProfileImage] = useState(null);
  const [verificationType, setVerificationType] = useState('rider');
  const [riderCNIC, setRiderCNIC] = useState(null);
  const [driverLicense, setDriverLicense] = useState(null);

  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0];
    // Validate file type, size, etc. if needed
    setProfileImage(file);
  };

  const handleRiderCNICUpload = (e) => {
    const file = e.target.files[0];
    // Validate file type, size, etc. if needed
    setRiderCNIC(file);
  };

  const handleDriverLicenseUpload = (e) => {
    const file = e.target.files[0];
    // Validate file type, size, etc. if needed
    setDriverLicense(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send images to the server
  };

  return (
    <div className='container' style={{ height: '100vh' }}>
      <div className="row">
        <div className="col-lg-7 mt-5 pt-5">
          <h1 className="display-6 fw-bold mt-5" style={{ color: '#091F5B' }}>Ride Together</h1>
          <h5 className='display-6 fw-bold mt-3' style={{ color: '#091F5B' }}>Please verify so you can assure safety!</h5>
        </div>
        <div className="col-lg-5">
          <div className="card mt-5 ms-3" style={{ width: '23rem', borderRadius: '30px' }}>
            <div className="card-body my-3">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="profileImage" className="form-label">Profile Image</label>
                  <input type="file" className="form-control" id="profileImage" onChange={handleProfileImageUpload} accept="image/*" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Verification Type</label>
                  <div>
                    <input type="radio" id="rider" name="verificationType" value="rider" checked={verificationType === 'rider'} onChange={() => setVerificationType('rider')} />
                    <label htmlFor="rider" className="ms-2 me-4">Rider</label>
                    <input type="radio" id="driver" name="verificationType" value="driver" checked={verificationType === 'driver'} onChange={() => setVerificationType('driver')} />
                    <label htmlFor="driver" className="ms-2">Driver</label>
                  </div>
                </div>
                {verificationType === 'rider' && (
                  <div className="mb-3">
                    <label htmlFor="riderCNIC" className="form-label">Rider CNIC</label>
                    <input type="file" className="form-control" id="riderCNIC" onChange={handleRiderCNICUpload} accept="image/*" />
                  </div>
                )}
                {verificationType === 'driver' && (
                  <div className="mb-3">
                    <label htmlFor="driverLicense" className="form-label">Driver License</label>
                    <input type="file" className="form-control" id="driverLicense" onChange={handleDriverLicenseUpload} accept="image/*" />
                  </div>
                )}
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
