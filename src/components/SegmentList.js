import React, { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';
import SegmentForm from './SegmentForm';

const SegmentList = () => {
    const [segments, setSegments] = useState([]);
    const [editingSegment, setEditingSegment] = useState(null); // Track which segment is being edited

    useEffect(() => {
        const fetchSegments = async () => {
            try {
                const response = await apiClient.get('/segment');
                setSegments(response.data);
            } catch (error) {
                console.error('Error fetching segments:', error);
            }
        };

        fetchSegments();
    }, []);

    const handleSegmentCreated = (newSegment) => {
        setSegments((prevSegments) => [...prevSegments, newSegment]);
    };

    const handleEdit = (segment) => {
        setEditingSegment(segment); // Set the segment to be edited
    };

    const handleDelete = async (segmentId) => {
        try {
            await apiClient.delete(`/segment/${segmentId}`);
            setSegments((prevSegments) =>
                prevSegments.filter((segment) => segment.id !== segmentId)
            );
        } catch (error) {
            console.error('Error deleting segment:', error);
        }
    };
    

    return (
        <div>
            <h1>Segments</h1>
            {editingSegment ? (
                <SegmentForm
                    onSegmentCreated={(updatedSegment) => {
                        setSegments((prevSegments) =>
                            prevSegments.map((seg) =>
                                seg.id === updatedSegment.id ? updatedSegment : seg
                            )
                        );
                        setEditingSegment(null); // Exit editing mode
                    }}
                    editingSegment={editingSegment} // Pass the segment being edited
                />
            ) : (
                <SegmentForm onSegmentCreated={handleSegmentCreated} />
            )}
            <ul>
                {segments.map((segment) => (
                    <li key={segment.id}>
                        {segment.name} - {segment.startDate} to {segment.endDate}
                        <button onClick={() => handleEdit(segment)}>Edit</button>
                        <button onClick={() => handleDelete(segment.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SegmentList;
