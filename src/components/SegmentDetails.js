import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // For getting the segment ID from the URL
import apiClient from '../api/apiClient'; // To fetch data from your backend

const SegmentDetails = () => {
  const { id } = useParams(); // Get segment ID from URL
  const [segment, setSegment] = useState(null);

  useEffect(() => {
    apiClient.get(`/segment/${id}`) // Fetch segment details
      .then((response) => setSegment(response.data))
      .catch((error) => console.error('Error fetching segment details:', error));
  }, [id]);

  if (!segment) return <p>Loading...</p>;

  return (
    <div>
      <h1>{segment.name}</h1>
      <p>Start Date: {segment.startDate}</p>
      <p>End Date: {segment.endDate}</p>
      <h2>Habits</h2>
      <ul>
        {segment.habits.map((habit) => (
          <li key={habit.id}>{habit.name} - {habit.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default SegmentDetails;
