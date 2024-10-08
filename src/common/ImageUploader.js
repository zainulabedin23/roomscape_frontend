import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    const preview = URL.createObjectURL(event.target.files[0]);
    setImagePreview(preview);
    // Auto-upload functionality
    if (event.target.files[0]) {
      navigate('/final-submission', { state: { uploadedImage: preview } });
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedImage(event.dataTransfer.files[0]);
    const preview = URL.createObjectURL(event.dataTransfer.files[0]);
    setImagePreview(preview);
    // Auto-upload functionality
    if (event.dataTransfer.files[0]) {
      navigate('/final-submission', { state: { uploadedImage: preview } });
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col items-center w-3/4 mx-auto p-5 mt-0 border rounded-lg shadow-lg bg-white">
      <div
        className="w-full h-52 border-dashed border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer bg-gray-50 transition duration-300 hover:bg-gray-100"
        onClick={triggerFileInput}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {imagePreview ? (
          <img src={imagePreview} alt="Uploaded" className="w-full h-full object-contain rounded-lg" />
        ) : (
          <p className="text-gray-500">Drag and drop an image or click to browse</p>
        )}
      </div>
      <input
        type="file"
        accept=".png, .jpeg, .jpg, .heic, .heif"
        onChange={handleImageChange}
        ref={fileInputRef}
        className="hidden"
      />
      <p className="mt-2 text-sm text-gray-500">Accepted file types: PNG, JPEG, JPG, HEIC, HEIF</p>
      <p className="text-sm text-gray-500">File size limit: 25MB</p>
      <button className="mt-4 p-2 bg-green-600 text-white rounded-lg transition duration-300 hover:bg-green-700">
        Upload Image
      </button>
    </div>
  );
};

export default ImageUpload;
