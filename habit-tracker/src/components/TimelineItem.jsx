const TimelineItem = ({ day, date, completed, completionTime }) => {
    // const completed = false
    return (
        <div class="timeline-item">
            <div class="timeline-date">
                <div class="timeline-date-day">{day}</div>
                <div class="timeline-date-full">
                    {date}
                </div>
            </div>
            <div class="timeline-content">
                <div class="timeline-status">
                    <div
                        class={`status-icon${completed
                            ? " completed"
                            : ""}`}>{completed ? "✓" : "✗"}</div>
                    <div>
                        <div
                            class={`status-text${completed
                                ? ' completed'
                                : ""}`}>
                            {completed ? "Completed" : "Missed"}
                        </div>
                        <div class="timeline-note">
                            Completed at {completionTime}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TimelineItem