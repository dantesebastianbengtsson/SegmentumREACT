import React from 'react';
import '../styles/Overview.css'; // Ensure this path is correct

const Overview = ({ segments, onExpand, onDelete, onCreate }) => {
    return (
        <div className="overview">
            <h1>Segment Overview</h1>
            <button className="create-button" onClick={onCreate}>Create New Segment</button>
            <div className="segments">
                {segments.map((segment) => {
                    // Ensure the segment always has three habits
                    const habits = [...segment.habits];
                    while (habits.length < 3) {
                        habits.push({ id: `placeholder-${habits.length + 1}`, name: `Habit ${habits.length + 1}` });
                    }

                    return (
                        <div key={segment.id} className="segment-box">
                            <div>
                                <h3>{segment.name}</h3>
                                <p>
                                    {segment.startDate} - {segment.endDate}
                                </p>
                            </div>
                            <div className="habit-boxes">
                                {habits.map((habit, index) => (
                                    <div key={index} className="habit-box">
                                        {habit.name}
                                    </div>
                                ))}
                            </div>
                            <div className="buttons">
                                <button className="expand" onClick={() => onExpand(segment.id)}>Expand</button>
                                <button className="delete" onClick={() => onDelete(segment.id)}>Delete</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Overview;
