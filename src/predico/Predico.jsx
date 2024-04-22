import React, { useState } from 'react';

function Predico() {
  const [imagePreview, setImagePreview] = useState(null);
  const [predictionResult, setPredictionResult] = useState('');

  const previewImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const classifyImage = async (event) => {
    event.preventDefault();
    const fileInput = document.getElementById('imageUpload');
    // console.log(fileInput);
    const file = fileInput.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://localhost:5000/classify', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();
        console.log(result);
        displayResult(result.prediction);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const displayResult = (prediction) => {
    // Check if the prediction is "Fresh Papaya"
    if (prediction === "Fresh Papaya") {
      setPredictionResult('Fresh Papaya Detected!');
    } else {
      // If the prediction is not "Fresh Papaya", display the original prediction
      setPredictionResult('Predicted Disease: ' + prediction);
    }
  };

  return (
    // <div>
    //   <form onSubmit={classifyImage}>
    //     <input type="file" accept="image/*" id="imageUpload" onChange={previewImage} />
    //     <div id="imagePreview">
    //       {imagePreview && <img src={imagePreview} width="200" alt="Preview" />}
    //     </div>
    //     <button type="submit">Classify Image</button>
    //     <div id="predictionResult">{predictionResult}</div>
    //   </form>
    // </div>
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl lg:text-6xl flex font-bold justify-center my-10">
        <p className='text-green-700 mr-4'>Upload</p> Your Papaya Image!
      </h1>
      <form onSubmit={classifyImage} className="flex flex-col items-center">
        <input
          className="image-upload border border-gray-300 rounded p-2 mb-4"
          type="file"
          accept="image/*"
          id="imageUpload"
          onChange={previewImage}
        />
        <div className="image-preview mb-4">
          {imagePreview && <img className="preview-img  border-8 border-green-500 rounded-lg" src={imagePreview} alt="Preview" />}
        </div>
        <button
          className="button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          PREDICT
        </button>
        <div className="result mt-4 text-xl font-bold" id="predictionResult">{predictionResult}</div>
      </form>
      <div className='mx-7 mt-4 mb-10'>
        <p className='text-lg text-center font-bold'>
          <span className='mt-8 text-red-700'>Note:</span><br /> Please Take Note That The Model Only Takes Inputs As Images Of <span className='text-green-700'>Papaya Fruits.</span><br /> Capture Picture In A <span className='text-green-700'>Well-Lit</span> Environment.<br /> Avoid Casting Any Reflection On The Papaya, This May Give A <span className='text-red-700'>Wrong</span> Prediction.
          <br />Model Only Predicts One of <span className='text-green-700'>5</span> Aforementioned Diseases
        </p>
      </div>
    </div>
  );
}

export default Predico;
