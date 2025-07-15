import React, { useContext, useState } from 'react';
import { CartContext } from '../components/CartContext';
import PRODUCTS from '../data/product'; 

const Checkout = () => {
  const { cartItems, totalAmount } = useContext(CartContext);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    phone: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order Submitted!');
  };

  
  const selectedProducts = Object.entries(cartItems)
    .map(([id, quantity]) => {
      const product = PRODUCTS.find(p => String(p.id) === String(id));
      return product ? { ...product, quantity } : null;
    })
    .filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-12 gap-8">
      
      
      <form
        onSubmit={handleSubmit}
        className="md:col-span-8 space-y-6 bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>

        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full mt-1 border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full mt-1 border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Address</label>
          <textarea
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full mt-1 border border-gray-300 p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">City</label>
          <input
            type="text"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            className="w-full mt-1 border border-gray-300 p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
        >
          Proceed to Payment
        </button>
      </form>

      
      <div className="md:col-span-4 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Your Items</h2>
        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {selectedProducts.map((product) => (
            <div key={product.id} className="flex justify-between items-center border-b pb-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <h4 className="text-sm font-medium">{product.name}</h4>
                <p className="text-sm text-gray-600">
                  ₦{product.price.toLocaleString()} × {product.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 font-semibold text-lg">
          Total: ₦{totalAmount().toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
