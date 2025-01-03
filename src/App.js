import React, { useState } from 'react';
import Overview from './components/Overview';

const App = () => {
    const [segments, setSegments] = useState([]); // Placeholder state for segments

    // Example placeholder functions for create and delete
    const handleCreate = () => {
        const newSegment = {
            id: segments.length + 1,
            name: `Segment ${segments.length + 1}`,
            startDate: '2024-01-01',
            endDate: '2024-01-14',
            habits: [{ id: 1, name: 'Habit 1' }, { id: 2, name: 'Habit 2' }],
        };
        setSegments([...segments, newSegment]);
    };

    const handleDelete = (segmentId) => {
        setSegments(segments.filter((segment) => segment.id !== segmentId));
    };

    return (
        <div>
            <Overview
                segments={segments}
                onCreate={handleCreate}
                onDelete={handleDelete}
                onExpand={(id) => console.log(`Expand Segment with ID: ${id}`)}
            />
        </div>
    );
};

export default App;
