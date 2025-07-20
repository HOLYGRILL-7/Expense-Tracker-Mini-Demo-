import React, { useState } from "react";

const ListSec = () => {
  const [categories, setCategories] = useState([
    { name: "Bills", amount: 1200, details: "Monthly recurring bills" },
    { name: "Needs", amount: 800, details: "Essential expenses" },
    { name: "Wants", amount: 400, details: "Discretionary spending" },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDetails, setNewDetails] = useState("");

  const formatCurrency = (value) => {
    if (!value) return "";
    return Number(value).toLocaleString("en-GH", {
      style: "currency",
      currency: "GHS",
      minimumFractionDigits: 2,
    });
  };

  const addCategory = () => {
    if (newCategory.trim() && newAmount > 0) {
      const categoryData = {
        name: newCategory.trim(),
        amount: parseFloat(newAmount) || 0,
        details: newDetails.trim(),
      };
      setCategories([...categories, categoryData]);
      setNewCategory("");
      setNewAmount("");
      setNewDetails("");
      setShowForm(false);
    }
  };

  const handleAmountChange = (e) => {
    const input = e.target.value;
    // Allow empty input, numbers, and a single decimal point
    if (input === "" || /^[0-9]*\.?[0-9]*$/.test(input)) {
      setNewAmount(input);
    }
  };

  const handleEdit = (index) => {
    const category = categories[index];
    console.log(`Edit ${category.name} clicked!`);
  };

  const handleCancel = () => {
    setNewCategory("");
    setNewAmount("");
    setNewDetails("");
    setShowForm(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addCategory();
    }
  };

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = () => {
    addCategory();
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md w-full max-w-4xl">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-blue-400 rounded-full"></div>
          <h1 className="text-2xl font-bold text-gray-800">Categories</h1>
        </div>
        <p className="text-gray-500 text-md flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
          Manage your expense categories
        </p>
      </div>

      <ul className="mt-4">
        {categories.map((category, index) => (
          <li key={index}>
            <div className="bg-white text-black font-semibold px-6 py-3 mt-5 w-full rounded-xl border border-gray-200 shadow-md hover:shadow-lg hover:bg-gray-50 cursor-pointer flex items-center justify-between gap-2 transition-all duration-200">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-lg font-semibold">{category.name}</span>
                  <span className="text-lg font-bold text-green-600 mt-6">
                    {formatCurrency(category.amount)}
                  </span>
                </div>
                {category.details && (
                  <p className="text-sm text-gray-600 mt-1">
                    {category.details}
                  </p>
                )}
              </div>
              <button
                className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer px-2 py-1 rounded transition-colors ml-4"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>

      {showForm ? (
        <div className="mt-5 bg-white p-4 rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Add New Category
          </h3>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter category name..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              autoFocus
            />

            <input
              type="text"
              value={newAmount}
              onChange={handleAmountChange}
              onKeyDown={handleKeyDown}
              placeholder="GHS"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />

            <textarea
              value={newDetails}
              onChange={(e) => setNewDetails(e.target.value)}
              placeholder="Optional details..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 resize-none"
              rows="2"
            ></textarea>

            <div className="flex gap-2">
              <button
                onClick={handleFormSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                disabled={!newCategory.trim() || !newAmount || parseFloat(newAmount) <= 0}
              >
                Add
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={handleAddClick}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <span>+</span>
          Add Category
        </button>
      )}
    </div>
  );
};

export default ListSec;