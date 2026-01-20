import { useEffect, useState } from "react"
import { getObject } from "../utils/storage"
import { daysSince, mapDays } from "../utils/utils"

const DaysList = ({ id }) => {
    const [habit, setHabit] = useState(undefined)
    const days = habit && daysSince(habit.startDate)
    
    useEffect(() => {
        const getHabit = async () => {
            const habits = await getObject("habits")
            setHabit(habits.find((el) => el.id == id))
        }
        getHabit()
    }, [])

    return (
        <div class="list-view">


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
    )
}

export default DaysList