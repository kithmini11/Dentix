import React, { useState } from 'react';

function SupplyOrders() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showSuppliersModal, setShowSuppliersModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [orders, setOrders] = useState([
    { 
      id: 'ORD-DOC-001',
      item: 'Ceramic Brackets',
      quantity: 30,
      unitPrice: 750,
      totalAmount: 22500,
      requestDate: '2025-05-10',
      status: 'Delivered',
      priority: 'Normal',
      supplier: 'Lanka Dental Supplies',
      deliveryDate: '2025-05-14',
      trackingNumber: 'LDS1234567',
      patientType: 'General',
      notes: 'Standard ceramic brackets for adult patients'
    },
    { 
      id: 'ORD-DOC-002',
      item: 'Orthodontic Wires 0.016"',
      quantity: 50,
      unitPrice: 450,
      totalAmount: 22500,
      requestDate: '2025-05-12',
      status: 'Processing',
      priority: 'High',
      supplier: 'Ceylon Orthodontic Co.',
      estimatedDelivery: '2025-06-18',
      patientType: 'Low-Income',
      notes: 'Urgent requirement for low-income patient treatments'
    },
    { 
      id: 'ORD-DOC-003',
      item: 'Metal Brackets',
      quantity: 100,
      unitPrice: 300,
      totalAmount: 30000,
      requestDate: '2025-05-14',
      status: 'Pending Approval',
      priority: 'Normal',
      supplier: 'Sri Lanka Medical Supplies',
      estimatedDelivery: '2025-06-20',
      patientType: 'Low-Income',
      notes: 'Cost-effective brackets for support program'
    },
    { 
      id: 'ORD-DOC-004',
      item: 'Palatal Expanders',
      quantity: 5,
      unitPrice: 7500,
      totalAmount: 37500,
      requestDate: '2025-05-16',
      status: 'Shipped',
      priority: 'High',
      supplier: 'Custom Dental Lab',
      trackingNumber: 'CDL9876543',
      estimatedDelivery: '2025-06-22',
      patientType: 'General',
      notes: 'Custom-made expanders for specific patients'
    },
    { 
      id: 'ORD-DOC-005',
      item: 'Elastic Ligatures',
      quantity: 200,
      unitPrice: 75,
      totalAmount: 15000,
      requestDate: '2025-05-18',
      status: 'Cancelled',
      priority: 'Low',
      supplier: 'Lanka Dental Supplies',
      patientType: 'General',
      notes: 'Order cancelled due to supplier stock issues'
    }
  ]);

  const [formData, setFormData] = useState({
    item: '',
    quantity: '',
    priority: 'Normal',
    patientType: 'General',
    supplier: '',
    notes: ''
  });

  // Available supplies categorized
  const supplyCategories = {
    brackets: [
      { name: 'Metal Brackets', price: 300, supplier: 'Sri Lanka Medical Supplies', availability: 'In Stock', rating: 4.5 },
      { name: 'Ceramic Brackets', price: 750, supplier: 'Lanka Dental Supplies', availability: 'In Stock', rating: 4.8 },
      { name: 'Self-ligating Brackets', price: 1200, supplier: 'Ceylon Orthodontic Co.', availability: 'Limited Stock', rating: 4.3 }
    ],
    wires: [
      { name: 'Orthodontic Wires 0.014"', price: 400, supplier: 'Ceylon Orthodontic Co.', availability: 'In Stock', rating: 4.6 },
      { name: 'Orthodontic Wires 0.016"', price: 450, supplier: 'Ceylon Orthodontic Co.', availability: 'In Stock', rating: 4.7 },
      { name: 'Orthodontic Wires 0.018"', price: 500, supplier: 'Lanka Dental Supplies', availability: 'In Stock', rating: 4.4 },
      { name: 'NiTi Archwires', price: 850, supplier: 'Custom Dental Lab', availability: 'Limited Stock', rating: 4.9 }
    ],
    elastics: [
      { name: 'Elastic Ligatures', price: 75, supplier: 'Lanka Dental Supplies', availability: 'In Stock', rating: 4.2 },
      { name: 'Power Chains', price: 150, supplier: 'Sri Lanka Medical Supplies', availability: 'In Stock', rating: 4.5 },
      { name: 'Elastic Bands', price: 120, supplier: 'Ceylon Orthodontic Co.', availability: 'In Stock', rating: 4.3 }
    ],
    appliances: [
      { name: 'Retainers', price: 2500, supplier: 'Custom Dental Lab', availability: 'Made to Order', rating: 4.8 },
      { name: 'Palatal Expanders', price: 7500, supplier: 'Custom Dental Lab', availability: 'Made to Order', rating: 4.9 },
      { name: 'Headgear', price: 5000, supplier: 'Lanka Dental Supplies', availability: 'Limited Stock', rating: 4.1 }
    ],
    instruments: [
      { name: 'Orthodontic Pliers', price: 4500, supplier: 'Ceylon Orthodontic Co.', availability: 'In Stock', rating: 4.7 },
      { name: 'Wire Cutters', price: 3200, supplier: 'Sri Lanka Medical Supplies', availability: 'In Stock', rating: 4.4 },
      { name: 'Bracket Placement Forceps', price: 6800, supplier: 'Custom Dental Lab', availability: 'In Stock', rating: 4.6 }
    ]
  };

  // Supplier information
  const supplierInfo = {
    'Lanka Dental Supplies': {
      contact: '+94 11 234 5678',
      email: 'orders@lankadental.lk',
      address: 'No. 123, Galle Road, Colombo 03',
      deliveryTime: '3-5 business days',
      rating: 4.5,
      specialties: ['Brackets', 'Wires', 'Basic Instruments']
    },
    'Ceylon Orthodontic Co.': {
      contact: '+94 11 876 5432',
      email: 'sales@ceylonortho.lk',
      address: 'No. 45, Kandy Road, Colombo 07',
      deliveryTime: '2-4 business days',
      rating: 4.7,
      specialties: ['Wires', 'Brackets', 'Precision Instruments']
    },
    'Sri Lanka Medical Supplies': {
      contact: '+94 11 345 6789',
      email: 'info@slmedical.lk',
      address: 'No. 78, Main Street, Colombo 02',
      deliveryTime: '4-6 business days',
      rating: 4.3,
      specialties: ['Basic Brackets', 'Elastics', 'General Instruments']
    },
    'Custom Dental Lab': {
      contact: '+94 11 567 8901',
      email: 'custom@dentallab.lk',
      address: 'No. 90, Reid Avenue, Colombo 04',
      deliveryTime: '7-10 business days',
      rating: 4.8,
      specialties: ['Custom Appliances', 'Retainers', 'Specialized Instruments']
    }
  };

  // Filter and search orders
  const filteredOrders = orders.filter(order => {
    const matchesStatus = filterStatus === 'all' || order.status.toLowerCase().includes(filterStatus.toLowerCase());
    const matchesSearch = !searchTerm || 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Sort orders
  const sortedOrders = [...filteredOrders].sort((a, b) => {
    switch(sortBy) {
      case 'date': return new Date(b.requestDate) - new Date(a.requestDate);
      case 'amount': return b.totalAmount - a.totalAmount;
      case 'item': return a.item.localeCompare(b.item);
      case 'status': return a.status.localeCompare(b.status);
      default: return 0;
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddOrder = (e) => {
    e.preventDefault();
    
    // Find the selected item details
    let selectedItem = null;
    Object.values(supplyCategories).forEach(category => {
      const found = category.find(item => item.name === formData.item);
      if (found) selectedItem = found;
    });

    const newOrder = {
      id: `ORD-DOC-${String(orders.length + 1).padStart(3, '0')}`,
      item: formData.item,
      quantity: parseInt(formData.quantity),
      unitPrice: selectedItem?.price || 0,
      totalAmount: (selectedItem?.price || 0) * parseInt(formData.quantity),
      requestDate: new Date().toISOString().split('T')[0],
      status: 'Pending Approval',
      priority: formData.priority,
      supplier: selectedItem?.supplier || formData.supplier,
      estimatedDelivery: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      patientType: formData.patientType,
      notes: formData.notes
    };
    
    setOrders([...orders, newOrder]);
    setShowOrderForm(false);
    setFormData({
      item: '',
      quantity: '',
      priority: 'Normal',
      patientType: 'General',
      supplier: '',
      notes: ''
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Pending Approval': return 'bg-orange-100 text-orange-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Normal': return 'bg-blue-100 text-blue-800';
      case 'Low': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'In Stock': return 'bg-green-100 text-green-800';
      case 'Limited Stock': return 'bg-yellow-100 text-yellow-800';
      case 'Made to Order': return 'bg-blue-100 text-blue-800';
      case 'Out of Stock': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setShowOrderModal(true);
  };

  const handleCategoryClick = (categoryKey) => {
    setSelectedCategory({
      name: categoryKey,
      items: supplyCategories[categoryKey],
      title: categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)
    });
    setShowSuppliersModal(true);
  };

  const handleOrderFromSupplier = (item) => {
    setFormData(prev => ({
      ...prev,
      item: item.name,
      supplier: item.supplier
    }));
    setShowSuppliersModal(false);
    setShowOrderForm(true);
  };

  // Statistics
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(o => o.status === 'Pending Approval').length;
  const totalValue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
  const lowIncomeOrders = orders.filter(o => o.patientType === 'Low-Income').length;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Supply Orders</h2>
        <button 
          onClick={() => setShowOrderForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Order
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Total Orders</h3>
          <p className="text-2xl font-bold text-blue-600">{totalOrders}</p>
          <p className="text-sm text-blue-500">All time</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Pending Approval</h3>
          <p className="text-2xl font-bold text-orange-600">{pendingOrders}</p>
          <p className="text-sm text-orange-500">Awaiting review</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Total Value</h3>
          <p className="text-2xl font-bold text-green-600">Rs. {totalValue.toLocaleString()}</p>
          <p className="text-sm text-green-500">All orders</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Low-Income Support</h3>
          <p className="text-2xl font-bold text-purple-600">{lowIncomeOrders}</p>
          <p className="text-sm text-purple-500">Support program orders</p>
        </div>
      </div>
      
      {/* Supply Categories */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Quick Order Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <button 
            onClick={() => handleCategoryClick('brackets')}
            className="bg-blue-50 border border-blue-100 rounded-lg p-4 hover:bg-blue-100 transition-colors text-center"
          >
            <div className="font-medium text-blue-800">Brackets</div>
            <div className="text-sm text-gray-600">Metal, Ceramic, Self-ligating</div>
          </button>
          <button 
            onClick={() => handleCategoryClick('wires')}
            className="bg-green-50 border border-green-100 rounded-lg p-4 hover:bg-green-100 transition-colors text-center"
          >
            <div className="font-medium text-green-800">Wires</div>
            <div className="text-sm text-gray-600">Various sizes and materials</div>
          </button>
          <button 
            onClick={() => handleCategoryClick('elastics')}
            className="bg-purple-50 border border-purple-100 rounded-lg p-4 hover:bg-purple-100 transition-colors text-center"
          >
            <div className="font-medium text-purple-800">Elastics</div>
            <div className="text-sm text-gray-600">Ligatures, Power chains</div>
          </button>
          <button 
            onClick={() => handleCategoryClick('appliances')}
            className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 hover:bg-yellow-100 transition-colors text-center"
          >
            <div className="font-medium text-yellow-800">Appliances</div>
            <div className="text-sm text-gray-600">Retainers, Expanders</div>
          </button>
          <button 
            onClick={() => handleCategoryClick('instruments')}
            className="bg-red-50 border border-red-100 rounded-lg p-4 hover:bg-red-100 transition-colors text-center"
          >
            <div className="font-medium text-red-800">Instruments</div>
            <div className="text-sm text-gray-600">Pliers, cutters, tools</div>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select 
              className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending Approval</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
            <select 
              className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date">Sort by Date</option>
              <option value="amount">Sort by Amount</option>
              <option value="item">Sort by Item</option>
              <option value="status">Sort by Status</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <input 
              type="text" 
              placeholder="Search by Order ID, item or supplier..." 
              className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-end">
            <button 
              onClick={() => {
                setFilterStatus('all');
                setSortBy('date');
                setSearchTerm('');
              }}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
      
      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item & Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status & Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Supplier
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedOrders.map(order => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{order.id}</div>
                      <div className="text-sm text-gray-500">{order.requestDate}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{order.item}</div>
                      <div className="text-sm text-gray-500">Qty: {order.quantity}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">Rs. {order.totalAmount.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">@ Rs. {order.unitPrice}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col space-y-1">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(order.priority)}`}>
                        {order.priority}
                      </span>
                      {order.patientType === 'Low-Income' && (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                          Low-Income Support
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.supplier}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => handleViewOrder(order)}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      View
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
          <div className="text-sm text-gray-500">Showing {sortedOrders.length} orders</div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-md hover:bg-gray-50">Previous</button>
            <button className="px-3 py-1 border rounded-md hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>

      {/* Suppliers Modal */}
      {showSuppliersModal && selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{selectedCategory.title} - Available Suppliers</h3>
                  <p className="text-sm text-gray-600">Choose from available suppliers and items</p>
                </div>
                <button 
                  onClick={() => setShowSuppliersModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedCategory.items.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        <p className="text-lg font-bold text-green-600">Rs. {item.price.toLocaleString()}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getAvailabilityColor(item.availability)}`}>
                        {item.availability}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-700 mb-2">Supplier Information</h5>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div><span className="font-medium">Company:</span> {item.supplier}</div>
                        <div><span className="font-medium">Contact:</span> {supplierInfo[item.supplier]?.contact}</div>
                        <div><span className="font-medium">Email:</span> {supplierInfo[item.supplier]?.email}</div>
                        <div><span className="font-medium">Delivery:</span> {supplierInfo[item.supplier]?.deliveryTime}</div>
                        <div className="flex items-center">
                          <span className="font-medium mr-2">Rating:</span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <span className="ml-1 text-sm">({item.rating})</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleOrderFromSupplier(item)}
                        className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                      >
                        Order Now
                      </button>
                      <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50">
                        Contact Supplier
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 border-t bg-gray-50">
              <div className="flex justify-end">
                <button 
                  onClick={() => setShowSuppliersModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Details Modal */}
      {showOrderModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Order Details - {selectedOrder.id}</h3>
                  <p className="text-sm text-gray-600">Requested on {selectedOrder.requestDate}</p>
                </div>
                <button 
                  onClick={() => setShowOrderModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Order Information</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Order ID:</span> {selectedOrder.id}</div>
                    <div><span className="font-medium">Item:</span> {selectedOrder.item}</div>
                    <div><span className="font-medium">Quantity:</span> {selectedOrder.quantity}</div>
                    <div><span className="font-medium">Unit Price:</span> Rs. {selectedOrder.unitPrice.toLocaleString()}</div>
                    <div><span className="font-medium">Total Amount:</span> Rs. {selectedOrder.totalAmount.toLocaleString()}</div>
                    <div><span className="font-medium">Patient Type:</span> {selectedOrder.patientType}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Status & Delivery</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Status:</span> 
                      <span className={`ml-1 px-2 py-1 rounded text-xs ${getStatusColor(selectedOrder.status)}`}>
                        {selectedOrder.status}
                      </span>
                    </div>
                    <div><span className="font-medium">Priority:</span> 
                      <span className={`ml-1 px-2 py-1 rounded text-xs ${getPriorityColor(selectedOrder.priority)}`}>
                        {selectedOrder.priority}
                      </span>
                    </div>
                    <div><span className="font-medium">Supplier:</span> {selectedOrder.supplier}</div>
                    {selectedOrder.trackingNumber && (
                      <div><span className="font-medium">Tracking:</span> {selectedOrder.trackingNumber}</div>
                    )}
                    <div><span className="font-medium">Expected Delivery:</span> {selectedOrder.estimatedDelivery}</div>
                    {selectedOrder.deliveryDate && (
                      <div><span className="font-medium">Delivered:</span> {selectedOrder.deliveryDate}</div>
                    )}
                  </div>
                </div>
              </div>

              {selectedOrder.notes && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Notes</h4>
                  <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">{selectedOrder.notes}</p>
                </div>
              )}
            </div>
            
            <div className="p-6 border-t bg-gray-50">
              <div className="flex justify-end gap-2">
                <button 
                  onClick={() => setShowOrderModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Close
                </button>
                {selectedOrder.status === 'Pending Approval' && (
                  <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                    Cancel Order
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* New Order Modal */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">New Supply Order</h3>
                <button 
                  onClick={() => setShowOrderForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleAddOrder} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="item">
                      Item *
                    </label>
                    <select
                      id="item"
                      name="item"
                      value={formData.item}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select item</option>
                      <optgroup label="Brackets">
                        {supplyCategories.brackets.map(item => (
                          <option key={item.name} value={item.name}>{item.name} - Rs. {item.price}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Wires">
                        {supplyCategories.wires.map(item => (
                          <option key={item.name} value={item.name}>{item.name} - Rs. {item.price}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Elastics">
                        {supplyCategories.elastics.map(item => (
                          <option key={item.name} value={item.name}>{item.name} - Rs. {item.price}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Appliances">
                        {supplyCategories.appliances.map(item => (
                          <option key={item.name} value={item.name}>{item.name} - Rs. {item.price}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Instruments">
                        {supplyCategories.instruments.map(item => (
                          <option key={item.name} value={item.name}>{item.name} - Rs. {item.price}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                      Quantity *
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="number"
                      min="1"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter quantity"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
                      Priority *
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="Low">Low</option>
                      <option value="Normal">Normal</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patientType">
                      Patient Type *
                    </label>
                    <select
                      id="patientType"
                      name="patientType"
                      value={formData.patientType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="General">General Patient</option>
                      <option value="Low-Income">Low-Income Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
                    Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    placeholder="Add any notes about the order (optional)"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setShowOrderForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SupplyOrders;