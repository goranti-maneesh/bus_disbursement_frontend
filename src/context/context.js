import React, { createContext, useState } from 'react';

// Create a context
export const BookingContext = createContext();

// Create a provider component
export const BookingProvider = ({ children }) => {
  const [studentData, setStudentData] = useState(null);  // To store student details
  const [busData, setBusData] = useState(null);  // To store selected bus details

  return (
    <BookingContext.Provider value={{ studentData, setStudentData, busData, setBusData }}>
      {children}
    </BookingContext.Provider>
  );
};
