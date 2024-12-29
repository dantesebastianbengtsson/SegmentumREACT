import React, { useState, useEffect } from 'react';
import apiClient from '../api/apiClient';

const SegmentForm = ({ onSegmentCreated, editingSegment }) => {
    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        if (editingSegment) {
            setName(editingSegment.name);
            setStartDate(editingSegment.startDate);
            setEndDate(editingSegment.endDate);
        }
    }, [editingSegment]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingSegment) {
                // Update segment if editing
                const response = await apiClient.put(`/segment/${editingSegment.id}`, {
                    name,
                    startDate,
                    endDate,
                });
                onSegmentCreated(response.data);
            } else {
                // Create new segment if not editing
                const response = await apiClient.post('/segment', {
                    name,
                    startDate,
                    endDate,
                });
                onSegmentCreated(response.data);
            }
            // Reset the form
            setName('');
            setStartDate('');
            setEndDate('');
        } catch (error) {
            console.error('Error creating/updating segment:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Segment Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="date"
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <input
                type="date"
                placeholder="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            <button type="submit">{editingSegment ? 'Update Segment' : 'Create Segment'}</button>
        </form>
    );
};

export default SegmentForm;