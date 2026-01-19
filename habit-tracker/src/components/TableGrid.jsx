const TableGrid = () => {
    return (
        <div class="calendar-grid">
            <div class="calendar-header">Sun</div>
            <div class="calendar-header">Mon</div>
            <div class="calendar-header">Tue</div>
            <div class="calendar-header">Wed</div>
            <div class="calendar-header">Thu</div>
            <div class="calendar-header">Fri</div>
            <div class="calendar-header">Sat</div>

            <div class="calendar-day completed">
                <div class="calendar-day-number">29</div>
                <div>✓</div>
            </div>
            <div class="calendar-day completed">
                <div class="calendar-day-number">30</div>
                <div>✓</div>
            </div>
            <div class="calendar-day completed">
                <div class="calendar-day-number">31</div>
                <div>✓</div>
            </div>
            <div class="calendar-day completed">
                <div class="calendar-day-number">1</div>
                <div>✓</div>
            </div>
            <div class="calendar-day completed">
                <div class="calendar-day-number">2</div>
                <div>✓</div>
            </div>
            <div class="calendar-day missed">
                <div class="calendar-day-number">3</div>
                <div>✗</div>
            </div>
            <div class="calendar-day completed">
                <div class="calendar-day-number">4</div>
                <div>✓</div>
            </div>

            <div class="calendar-day completed">
                <div class="calendar-day-number">5</div>
                <div>✓</div>
            </div>
            <div class="calendar-day completed">
                <div class="calendar-day-number">6</div>
                <div>✓</div>
            </div>
            <div class="calendar-day missed">
                <div class="calendar-day-number">7</div>
                <div>✗</div>
            </div>
            <div class="calendar-day completed">
                <div class="calendar-day-number">8</div>
                <div>✓</div>
            </div>
            <div class="calendar-day completed">
                <div class="calendar-day-number">9</div>
                <div>✓</div>
            </div>
            <div class="calendar-day completed">
                <div class="calendar-day-number">10</div>
                <div>✓</div>
            </div>
            <div class="calendar-day completed">
                <div class="calendar-day-number">11</div>
                <div>✓</div>
            </div>

            <div class="calendar-day completed">
                <div class="calendar-day-number">12</div>
                <div>✓</div>
            </div>
            <div class="calendar-day completed">
                <div class="calendar-day-number">13</div>
                <div>✓</div>
            </div>
            <div class="calendar-day completed">
                <div class="calendar-day-number">14</div>
                <div>✓</div>
            </div>
            <div class="calendar-day pending">
                <div class="calendar-day-number">15</div>
                <div>○</div>
            </div>
            <div class="calendar-day future">
                <div class="calendar-day-number">16</div>
            </div>
            <div class="calendar-day future">
                <div class="calendar-day-number">17</div>
            </div>
            <div class="calendar-day future">
                <div class="calendar-day-number">18</div>
            </div>
        </div>
    )
}

export default TableGrid