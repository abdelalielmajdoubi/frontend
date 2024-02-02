import React, { useState, useEffect } from "react";

function ApiComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/persons");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <>
      <button style={{ backgroundColor: "red" }}>
        {" "}
        {data ? data["abdelali"] : "click her to go google"}{" "}
      </button>
    </>
  );
}

export default ApiComponent;

// @Bean
// 	CommandLineRunner commandLineRunner(PersonRepository personRepository) {
// 		return args -> {
// 			// Creating sample Person objects
// 			Person john = new Person("John", "Doe", 30);
// 			Person jane = new Person("Jane", "Doe", 25);
// 		Person bob = new Person("Bob", "Smith", 40);

// 			// Inserting them into the database
// 			personRepository.save(john);
// 			personRepository.save(jane);
// 			personRepository.save(bob);
// 		};
// 	}
