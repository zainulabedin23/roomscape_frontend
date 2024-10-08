import React from 'react';
import { useLocation } from 'react-router-dom';

export default function FinalSubmission() {
  const location = useLocation();
  const uploadedImage = location.state?.uploadedImage;

  const itemPreferences = [
    "Sofa",
    "Chairs",
    "Coffee Table",
    "Bookshelf",
    "Decorative Items",
    "Wall Painting",
    "Clock"];
   const Existingitem=[
    'Clock',
    'Sofa',
    "Wall Painting"
   ]
  const [selectedSolution, setSelectedSolution] = React.useState(null);

  const handleSolutionClick = (solution) => {
    setSelectedSolution(solution);
  };

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 min-h-[80vh]">
<div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md flex flex-col justify-between min-h-[80vh]">
  <div>
    <h2 className="text-lg font-semibold text-gray-800 mb-2">Improve your Living room</h2>
    <p className="text-gray-500 mb-4">Showcase the latest trends in your room</p>

    <label className="block mt-4 mb-2">
      <span className="text-gray-500">Budget</span>
      <input 
        type="number" 
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none" 
        placeholder="Enter your budget (in Rs.)"
      />
    </label>

    <span className="block mt-4 mb-2 text-gray-500">Item Preferences</span>
    {itemPreferences.map((item, index) => (
        <label className="flex items-center mb-2" key={index}>
          <input type="checkbox" className="mr-2" />
          {item}
        </label>
      ))}
      <span className="block mt-4 mb-2 text-gray-500">Existing item you wish to upgrade</span>
      {Existingitem.map((item, index) => (
        <label className="flex items-center mb-2" key={index}>
          <input type="checkbox" className="mr-2" />
          {item}
        </label>
      ))}
    {/* <label className="block mt-4 mb-2">
      <span className="text-gray-500">Any other specifics to include?</span>
      <textarea 
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-primary focus:outline-none" 
        rows="2"
        placeholder="Add details about preferences or specifics..."
      >
        Add Armchair, Ottoman and Lamp.
      </textarea>
    </label> */}
  </div>



        <button className="mt-auto bg-blue-600 text-white hover:bg-blue-500 p-2 rounded-md w-full mb-5">Get Design Recommendations</button>
      </div>

      <div className="flex-1 bg-white p-2 rounded-lg shadow-md flex justify-center items-center h-[100vh]">
  {uploadedImage ? (
    <img 
      src={uploadedImage} 
      alt="Uploaded preview" 
      className="object-cover rounded-md max-h-[80vh] w-auto" 
    />
  ) : (
    <p className="text-gray-500">No image uploaded</p>
  )}
</div>
    </div>
  );
}
