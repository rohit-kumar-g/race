import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDu69s2Vg1TrGU3z_NiaSK_RmGJmmIq0xo",
//   authDomain: "race-5ed0a.firebaseapp.com",
//   databaseURL: "https://race-5ed0a-default-rtdb.firebaseio.com",
//   projectId: "race-5ed0a",
//   storageBucket: "race-5ed0a.appspot.com",
//   messagingSenderId: "262961717923",
//   appId: "1:262961717923:web:8a272993a78999ad091516",
// };
export const firebaser = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const firestorage = firebase.storage();
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
export const fireauth = firebase.auth();
// Function to store data in Firestore
export const addCarData = async (carData) => {
  try {
    const carsCollection = firestore.collection("cars");
    await carsCollection.add(carData);
    alert("Car data added successfully!");
    // console.log("Car data added successfully!");
  } catch (error) {
    // console.error("Error adding car data:", error);
  }
};
// Function to retrieve data from Firestore
export const getCarData = async () => {
  try {
    const carsCollection = firestore.collection("cars");
    const snapshot = await carsCollection.orderBy("timestamp", "desc").get();
    const carData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(carData.length, "carrradataa");
    return carData;
  } catch (error) {
    // console.error("Error fetching car data:", error);
    return error;
  }
};
// export const get5CarData = async () => {
//   try {
//     const carsCollection = firestore.collection("cars");
//     const snapshot = await carsCollection
//       .orderBy("timestamp", "desc")
//       .limit(5)
//       .get();
//     const carData = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     // console.log(carData, "jlkjl");
//     return carData;
//   } catch (error) {
//     // console.error("Error fetching car data:", error);
//     return [];
//   }
// };
// export const getCarDataindv = async (carId) => {
//   try {
//     const carRef = firestore.collection("cars").doc(carId);
//     const carSnapshot = await carRef.get();
//     if (carSnapshot.exists) {
//       return carSnapshot.data();
//     } else {
//       throw new Error("Car not found");
//     }
//   } catch (error) {
//     // console.error("Error getting car data:", error);
//     throw error;
//   }
// };
export const UnqVals4K = (jsonData, key) => {
  const uniqueValues = new Set();
  // Extract unique values
  jsonData.forEach((item) => {
    if (item[key]) {
      uniqueValues.add(item[key]);
    }
  });
  return Array.from(uniqueValues);
};
// export const DataManagementComponent = () => {
//   const [colorValues, setColorValues] = useState([]);
//   Fetch data from Firestore on component mount
//   useEffect(() => {
//   const fetchData = async () => {
//     const querySnapshot = await firestore
//       .collection("cars")
//       .where("color", "!=", "")
//       .get();
//     // console.log(querySnapshot,"query  ");
//     const values = querySnapshot.docs.map((doc) => doc.data().color);
//     setColorValues(values);
//     // console.log("mdttccc",values);
//   };
//   fetchData();
//   // }, []);
// };
export const deleteCarData = async (docId) => {
  try {
    const carDataRef = firestore.collection("cars").doc(docId);
    await carDataRef.delete();
    console.log("Document deleted:", docId);
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
};
export const updateCarData = async (updatedData) => {
  const carRef = firestore.collection("cars").doc(updatedData.id);
  try {
    await carRef.update(updatedData);
    console.log("Car data updated successfully");
  } catch (error) {
    console.error("Error updating car data:", error);
    throw error;
  }
};
