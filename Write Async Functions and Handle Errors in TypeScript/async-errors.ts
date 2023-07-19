// Write async functions and handle errors in typescript

// Implement an asynchronous function that simulates fetching data from an API
async function fetchData(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "success") {
        resolve({
          status: "success",
          data: [1, 2, 3, 4, 5],
        });
      } else {
        reject("Error fetching data.");
      }
    }, 3000);
  });
}

// Implement an asynchronous function that performs a simple processing step
async function processData(data: any): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = data.data.map((item: number) => item * 2);
      resolve(processedData);
    }, 3000);
  });
}

// Implement an asynchronous function that displays the processed data
async function displayData(data: any): Promise<void> {
  console.log("Processed Data:", data);
}

// Function to fetch and process data in a sequential manner
async function fetchAndProcessData(url: string): Promise<void> {
  try {
    // Fetch data from the API
    const fetchedData = await fetchData(url);

    // Process the fetched data
    const processedData = await processData(fetchedData);

    // Display the processed data
    await displayData(processedData);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the fetchAndProcessData function with "success" url parameter
fetchAndProcessData("success");

// Call the fetchAndProcessData function with "error" url parameter
fetchAndProcessData("error");
