import React, { useEffect, useState } from 'react';
import apiClient from '../api/apiClient'; // To fetch data from your backend
import '../styles/SegmentList.css';

const SegmentList = () => {
  const [segments, setSegments] = useState([]);

  useEffect(() => {
    apiClient.get('/segment') // Fetch all segments from the backend
      .then((response) => setSegments(response.data))
      .catch((error) => console.error('Error fetching segments:', error));
  }, []);

  return (
    <div>
      <h1>Segments</h1>
      <ul>
        {segments.map((segment) => (
          <li key={segment.id}>
            {segment.name} (Start: {segment.startDate}, End: {segment.endDate})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SegmentList;
