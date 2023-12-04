import React, { useEffect, useState } from 'react';

const YourComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Your data fetching logic here
        const result = await fetch('your-api-endpoint');
        const jsonData = await result.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Cleanup function to unsubscribe or clear resources
    return () => {
      // Unsubscribe, clear timers, or perform cleanup here
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <div>
      {/* Your component rendering logic here */}
    </div>
  );
};

export default YourComponent;
