import React, { createContext, useContext, useState, useEffect } from "react";
// import firebase from "firebase/app";
import {firestore} from "../MyFirebaseConfig";

// Create the context
const MyFilterContext = createContext();

// Create a custom hook to access the context
export const useMyFilterContext = () => useContext(MyFilterContext);

// Create the context provider component
export const MyFilterProvider = ({ children }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isOpen, setIsOpen] = useState({});

  const handleToggle = (fieldName) => {
    setIsOpen((prevIsOpen) => ({
      ...prevIsOpen,
      [fieldName]: !prevIsOpen[fieldName],
    }));
  };

  const handleOptionClick = (option, fieldName) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = { ...prevSelectedOptions };

      if (updatedOptions[fieldName]) {
        if (updatedOptions[fieldName].includes(option)) {
          updatedOptions[fieldName] = updatedOptions[fieldName].filter(
            (item) => item !== option
          );
        } else {
          updatedOptions[fieldName] = [...updatedOptions[fieldName], option];
        }
      } else {
        updatedOptions[fieldName] = [option];
      }

      return updatedOptions;
    });
  };

  const handleSelectAll = (options, fieldName) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = { ...prevSelectedOptions };
      updatedOptions[fieldName] = options;
      return updatedOptions;
    });
  };

  const handleClearSelection = (fieldName) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = { ...prevSelectedOptions };
      updatedOptions[fieldName] = [];
      return updatedOptions;
    });
  };

  const GetDataFromFirestore = () => {
    useEffect(() => {
      // Check if selectedOptions is not an empty object
      if (Object.keys(selectedOptions).length !== 0) {
        // const firestore = firebase.firestore();
        let query = firestore.collection("cars");

        // Build the query based on selectedOptions
        Object.entries(selectedOptions).forEach(([fieldName, options]) => {
          // Check if options is not an empty array and fieldName exists
          if (options.length > 0 && fieldName) {
            query = query.where(fieldName, "in", options);
            // console.log("query11" , fieldName, options);
          }
        });

        // query = query.orderBy("timestamp", "desc");

        query.get().then((querySnapshot) => {
          // Process the query snapshot here
          // querySnapshot.forEach((doc) => {
          //   // Access document data using doc.data()
          //   console.log(doc.data());
          // });
          console.log(querySnapshot.size);
        });
      }
    }, []);
  };

  GetDataFromFirestore();

  return (
    <MyFilterContext.Provider
      value={{
        selectedOptions,
        handleOptionClick,
        handleSelectAll,
        handleClearSelection,
        isOpen,
        handleToggle,
      }}
    >
      {children}
    </MyFilterContext.Provider>
  );
};
