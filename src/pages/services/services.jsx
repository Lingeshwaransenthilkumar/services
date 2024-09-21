import { useState, useEffect } from "react";
import "./services.css"; // Create a CSS file for modal styles
import Navbar from "../../components/navbar/navbar";

const Services = () => {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null); // For editing service
  const [showModal, setShowModal] = useState(false); // Modal visibility for editing
  const [isAdding, setIsAdding] = useState(false); // Modal visibility for adding new service
  const [newService, setNewService] = useState({
    img: "",
    name: "",
    desc: "",
    price: "",
  });

  // Simulate fetching data from an API or database
  useEffect(() => {
    const fetchServices = async () => {
      const initialServices = [
        {
          id: 1,
          img: "https://img.freepik.com/free-photo/side-view-doctor-writing-prescription_23-2148231339.jpg?t=st=1726934913~exp=1726938513~hmac=9300e95dabb5d96f9f50c679c793ad60d46158ebb69eb555d2cfe59e84c27f5a&w=996",
          name: "General Consultation",
          desc: "A 30-minute consultation with a general practitioner to discuss general health concerns and receive recommendations.",
          price: "50",
        },
        {
          id: 2,
          img: "https://img.freepik.com/free-photo/friendly-hospital-phlebotomist-collecting-blood-sample-from-patient-lab-preparation-blood-test-by-female-doctor-medical-uniform-table-white-bright-room_657921-879.jpg?t=st=1726934944~exp=1726938544~hmac=1d7c730bd3727549e7816aee0c863861fbfef92ceccc64d35dde4a7654ec83dd&w=996",
          name: "Blood Test",
          desc: "Comprehensive blood testing to check for conditions such as diabetes, cholesterol levels, and organ function.",
          price: "100",
        },
        {
          id: 3,
          img: "https://img.freepik.com/free-vector/physiotherapy-rehabilitation-3-flat-horizontal-center_1284-15881.jpg?t=st=1726935031~exp=1726938631~hmac=805f1b83e5940b7127c444ff6a2a2da38f515a30badccffc4fc0c060780b9366&w=740",
          name: "Physiotherapy Session",
          desc: " A one-hour session with a licensed physiotherapist to help with physical rehabilitation and pain management.",
          price: "80",
        },
        {
          id: 4,
          img: "https://img.freepik.com/free-vector/flat-hand-drawn-doctor-injecting-vaccine-patient_23-2148855954.jpg?t=st=1726935056~exp=1726938656~hmac=865bbeb56031d442dd6a52027e2193425a20a58a430655008eaf993c964ac3c4&w=740",
          name: "Vaccination",
          desc: " Administration of recommended vaccines, such as flu shots or COVID-19 vaccines.",
          price: "25",
        },
        {
          id: 5,
          img: "https://img.freepik.com/free-photo/dentist-making-professional-teeth-cleaning-withb-cotton-female-young-patient-dental-office_496169-907.jpg?t=st=1726935086~exp=1726938686~hmac=43485d7673eb94c8c6ad25cbf9d15e1fefe9cfdc0ab666a17bd7dc17984ff5f3&w=996",
          name: "Dental Cleaning",
          desc: "A professional cleaning and examination by a dentist or hygienist to maintain oral hygiene.",
          price: "70",
        },
      ];
      setServices(initialServices);
    };
    fetchServices();
  }, []);

  // Handle input change for editing services
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isAdding) {
      setNewService((prev) => ({ ...prev, [name]: value }));
    } else {
      setEditingService((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Open modal for editing
  const handleEdit = (service) => {
    setEditingService(service);
    setShowModal(true);
    setIsAdding(false); // Make sure it’s for editing
  };

  // Open modal for adding new service
  const handleAddNewService = () => {
    setNewService({ img: "", name: "", desc: "", price: "" }); // Reset fields
    setIsAdding(true); // Set the mode to adding
    setShowModal(true); // Show modal
  };

  // Save updates to service
  const handleSave = () => {
    if (isAdding) {
      // Add new service
      setServices((prevServices) => [
        ...prevServices,
        { ...newService, id: prevServices.length + 1 },
      ]);
    } else {
      // Update existing service
      setServices((prevServices) =>
        prevServices.map((service) =>
          service.id === editingService.id ? editingService : service
        )
      );
    }
    setShowModal(false); // Close modal after saving
  };

  // Delete service
  const handleDelete = (id) => {
    setServices((prevServices) => prevServices.filter((service) => service.id !== id));
  };

  return (
    <>
      <Navbar active={"services"} />
      <section>
        {/* Display services in cards */}
        {services.map((service) => (
          <div key={service.id} className="card">
            <div className="card-img">
              <img src={service.img} alt={service.name} />
            </div>
            <h3>{service.name}</h3>
            <p>{service.desc}</p>
            <p>${service.price}</p>
            <button onClick={() => handleEdit(service)}>Edit</button>
            <button onClick={() => handleDelete(service.id)}>Delete</button>
          </div>
        ))}

        {/* Modal for adding/editing service */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>{isAdding ? "Add New Service" : "Edit Service"}</h2>
              <input
                type="text"
                name="img"
                placeholder="Image URL"
                value={isAdding ? newService.img : editingService.img}
                onChange={handleInputChange}
              required/>
              <input
                type="text"
                name="name"
                placeholder="Service Name"
                value={isAdding ? newService.name : editingService.name}
                onChange={handleInputChange}
              required/>
              <input
                type="text"
                name="desc"
                placeholder="Description"
                value={isAdding ? newService.desc : editingService.desc}
                onChange={handleInputChange}
              required/>
              <input
                type="text"
                name="price"
                placeholder="Price"
                value={isAdding ? newService.price : editingService.price}
                onChange={handleInputChange}
              required/>
              <button onClick={handleSave}>{isAdding ? "Add" : "Save"}</button>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
          
        )}
      </section>
      <div className="add-btn">
      <button className="add-service-btn" onClick={handleAddNewService}>
          Add New Service
        </button>
      </div>
    </>
  );
};

export default Services;
