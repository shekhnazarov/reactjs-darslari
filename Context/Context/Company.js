import React, {createContext, useState} from 'react'

export const StudentsContext = createContext();

export const Students = ({children}) => {
  const [count, setCount] = useState([
    {id: 1, name: "Rustam Zokirov", status: "Frontend", count: 0},
    {id: 2, name: "Otabek Botirov", status: "Backend", count: 0},
    {id: 3, name: "Odil Inoyatov", status: "AntiHacking", count: 0},
    {id: 4, name: "Asadbek Abdullayev", status: "AI", count: 0},
    {id: 5, name: "Umar Shekhnazarov", status: "Fullstack", count: 0},
    {id: 6, name: "Daston Otajonov", status: "Frontend", count: 0},
    {id: 7, name: "Farxod Ergashov", status: "Frontend", count: 0},
    {id: 8, name: "Asadbek Yoldoshov", status: "Backend", count: 0},
    {id: 9, name: "Shakhzod Rakhimov", status: "Android", count: 0},
    {id: 10, name: "Kamolbek Matchanov", status: "Software", count: 0},
  ])
  return (
    <StudentsContext.Provider value={[count, setCount]}>
      {children}
    </StudentsContext.Provider>
  )
}

export default Students
