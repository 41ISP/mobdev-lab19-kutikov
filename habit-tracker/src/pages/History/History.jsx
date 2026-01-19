import { useNavigate, useParams } from "react-router-dom"
import "./History.css"
import { useEffect, useState } from "react"
import { getObject } from "../../utils/storage"
import { formatDate } from "../../utils/formatters"
import TableGrid from "../../components/TableGrid"

const History = () => {
    const { id } = useParams()
    const [habit, setHabit] = useState(undefined)
    useEffect(() => {
       const loadHabits = async () => {
            const habits = await getObject("habits")
            setHabit(habits.find((el) => el.id == id))
       }
       loadHabits() 
    }, [])
    useEffect(() => {console.log(habit)}, [habit])
    const navigate = useNavigate()
    return habit && (
        <div class="container">
            <header>
                <button class="back-btn" onClick={() => navigate("/")}>← Back to Dashboard</button>
                <h1>📊 Progress Timeline</h1>
                <div></div>
            </header>

            <div class="filter-section">
                <div class="filter-group">
                    {habit.name}
                </div>
                <div class="filter-group">
                    <label>Time Period:</label>
                    <select>
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>Last 90 Days</option>
                        <option>All Time</option>
                    </select>
                </div>
            </div>

            <div class="habit-detail-card">
                <div class="habit-header">
                    <div class="habit-title-section">
                        <div class="habit-title">{habit.name}</div>
                        <div class="habit-subtitle">
                            Started on {formatDate(habit.startDate)} • {habit.frequency} at {habit.notificationTime}
                        </div>
                    </div>
                    <div class="habit-stats-grid">
                        <div class="stat-box">
                            <div class="stat-box-value">{habit.streak}</div>
                            <div class="stat-box-label">Current Streak</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-box-value">23</div>
                            <div class="stat-box-label">Best Streak</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-box-value">89%</div>
                            <div class="stat-box-label">Success Rate</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-box-value">47</div>
                            <div class="stat-box-label">Total Days</div>
                        </div>
                    </div>
                </div>

                <div class="chart-container">
                    <div class="chart-title">30-Day Overview</div>
                    <div class="progress-bar-container">
                        <div class="progress-label">
                            <span>Completion Rate</span>
                            <span><strong>27/30 days</strong></span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill"></div>
                        </div>
                    </div>
                    <div class="legend">
                        <div class="legend-item">
                            <div
                                class="legend-color"
                            ></div>
                            <span>Completed (27 days)</span>
                        </div>
                        <div class="legend-item">
                            <div
                                class="legend-color"
                            ></div>
                            <span>Missed (3 days)</span>
                        </div>
                    </div>
                </div>

                <div class="timeline-section">
                    <div class="timeline-header">
                        <div class="timeline-title">Activity Timeline</div>
                        <div class="view-toggle">
                            <button class="view-btn active">Calendar</button>
                            <button class="view-btn">List</button>
                        </div>
                    </div>

                    <TableGrid />

                    <div class="list-view">
                        <div class="timeline-item">
                            <div class="timeline-date">
                                <div class="timeline-date-day">Tuesday</div>
                                <div class="timeline-date-full">
                                    Jan 14, 2026
                                </div>
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-status">
                                    <div class="status-icon completed">✓</div>
                                    <div>
                                        <div class="status-text completed">
                                            Completed
                                        </div>
                                        <div class="timeline-note">
                                            Completed at 7:15 AM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-date">
                                <div class="timeline-date-day">Monday</div>
                                <div class="timeline-date-full">
                                    Jan 13, 2026
                                </div>
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-status">
                                    <div class="status-icon completed">✓</div>
                                    <div>
                                        <div class="status-text completed">
                                            Completed
                                        </div>
                                        <div class="timeline-note">
                                            Completed at 7:05 AM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-date">
                                <div class="timeline-date-day">Sunday</div>
                                <div class="timeline-date-full">
                                    Jan 12, 2026
                                </div>
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-status">
                                    <div class="status-icon completed">✓</div>
                                    <div>
                                        <div class="status-text completed">
                                            Completed
                                        </div>
                                        <div class="timeline-note">
                                            Completed at 8:30 AM - Late start
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-date">
                                <div class="timeline-date-day">Saturday</div>
                                <div class="timeline-date-full">
                                    Jan 11, 2026
                                </div>
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-status">
                                    <div class="status-icon completed">✓</div>
                                    <div>
                                        <div class="status-text completed">
                                            Completed
                                        </div>
                                        <div class="timeline-note">
                                            Completed at 7:00 AM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-date">
                                <div class="timeline-date-day">Friday</div>
                                <div class="timeline-date-full">
                                    Jan 10, 2026
                                </div>
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-status">
                                    <div class="status-icon completed">✓</div>
                                    <div>
                                        <div class="status-text completed">
                                            Completed
                                        </div>
                                        <div class="timeline-note">
                                            Completed at 6:45 AM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-date">
                                <div class="timeline-date-day">Thursday</div>
                                <div class="timeline-date-full">
                                    Jan 9, 2026
                                </div>
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-status">
                                    <div class="status-icon completed">✓</div>
                                    <div>
                                        <div class="status-text completed">
                                            Completed
                                        </div>
                                        <div class="timeline-note">
                                            Completed at 7:20 AM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-date">
                                <div class="timeline-date-day">Wednesday</div>
                                <div class="timeline-date-full">
                                    Jan 8, 2026
                                </div>
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-status">
                                    <div class="status-icon completed">✓</div>
                                    <div>
                                        <div class="status-text completed">
                                            Completed
                                        </div>
                                        <div class="timeline-note">
                                            Completed at 7:10 AM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="timeline-date">
                                <div class="timeline-date-day">Tuesday</div>
                                <div class="timeline-date-full">
                                    Jan 7, 2026
                                </div>
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-status">
                                    <div class="status-icon missed">✗</div>
                                    <div>
                                        <div class="status-text missed">
                                            Missed
                                        </div>
                                        <div class="timeline-note">
                                            Woke up late
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default History