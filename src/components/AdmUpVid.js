import React, { useState, useEffect } from "react";
import { firestore, firestorage } from "../myhelper_r/MyFirebaseConfig";
const AdmUpVid = ({ SelectedCar, field, onClose }) => {
  const [imageURLs, setImageURLs] = useState([]);
  useEffect(() => {
    // Fetch image URLs from Firestore
    const fetchImageURLs = async () => {
      try {
        const docRef = firestore.collection("cars").doc(SelectedCar.id);
        const doc = await docRef.get();
        if (doc.exists) {
          const data = doc.data();
          setImageURLs(data[field]);
          console.log(data[field]);
        }
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };
    fetchImageURLs();
  }, [SelectedCar.id, field]);
  const handleImageClick = async (imageURL) => {
    try {
      // Remove image URL from the state
      const updatedImageURLs = imageURLs.filter((url) => url !== imageURL);
      setImageURLs(updatedImageURLs);
      // Update the Firestore document with the modified array
      const docRef = firestore.collection("cars").doc(SelectedCar.id);
      await docRef.update({
        [field]: updatedImageURLs,
      });
      // Delete the image from Firebase Storage
      const imageRef = firestorage.refFromURL(imageURL);
      console.log("str " + imageURL);
      await imageRef.delete();
    } catch (error) {
      console.error("Error removing image:", error);
    }
  };
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    // const field = "moreImg";
    try {
      // Upload the new image to Firebase Storage
      const storageRef = firestorage.ref(`${SelectedCar.timestamp}/${field}`);
      const newImageRef = storageRef.child(`${file.name}`);
      await newImageRef.put(file);
      // Get the new image URL
      const newImageURL = await newImageRef.getDownloadURL();
      // Update the Firestore document with the new image URL
      const updatedImageURLs = [...imageURLs, newImageURL];
      const docRef = firestore.collection("cars").doc(SelectedCar.id);
      await docRef.update({
        [field]: updatedImageURLs,
      });
      setImageURLs(updatedImageURLs);
      // Clear the input field
      event.target.value = "";
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="update-form">
          <h2>Update Car Data</h2>
          <input type="file" multiple onChange={handleImageUpload} />
          <div className="App">
            <div className="image-container">
              {imageURLs && imageURLs.length > 0
                ? imageURLs.map((imageURL, index) => (
                    <div key={index} className="image-wrapper">
                      <div
                        onClick={() => handleImageClick(imageURL)}
                        className="cross-button"
                      >
                        &#10005;
                      </div>
                      <video
                        src={imageURL}
                        controls
                        poster={SelectedCar.frontimages}
                        className="thumbnail"
                      />
                    </div>
                  ))
                : "No images available"}
            </div>
          </div>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdmUpVid;
