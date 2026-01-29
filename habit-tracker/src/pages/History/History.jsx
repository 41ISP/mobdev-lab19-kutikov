import { useNavigate, useParams } from "react-router-dom"
import "./History.css"
import { useEffect, useState } from "react"
import { getObject } from "../../utils/storage"
import { formatDate } from "../../utils/formatters"
import DaysList from "../../components/DaysList"
import { daysSince } from "../../utils/utils"

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
                        {/* <div class="stat-box">
                            <div class="stat-box-value">23</div>
                            <div class="stat-box-label">Best Streak</div>
                        </div> */}
                        <div class="stat-box">
                            <div class="stat-box-value">{Math.round(
                                (habit.history.length /
                                (daysSince(habit.startDate) + 1)) * 100
                            )}%</div>
                            <div class="stat-box-label">Success Rate</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-box-value">{daysSince(habit.startDate) + 1}</div>
                            <div class="stat-box-label">Total Days</div>
                        </div>
                    </div>
                </div>

                <div class="chart-container">
                    <div class="chart-title">30-Day Overview</div>
                    <div class="progress-bar-container">
                        <div class="progress-label">
                            <span>Completion Rate</span>
                            <span><strong>
                                {habit.history.length}
                                /
                                {daysSince(habit.startDate) + 1} days</strong></span>
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
                            <span>Completed ({habit.history.length} days)</span>
                        </div>
                        <div class="legend-item">
                            <div
                                class="legend-color"
                            ></div>
                            <span>Missed (
                                {(daysSince(habit.startDate) + 1)
                                - habit.history.length
                                } days)</span>
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

                    <DaysList id={id} />


                </div>
            </div>
        </div>)
}

export default History