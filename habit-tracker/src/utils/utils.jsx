export const isEqToday = (date) => {
    const today = new Date()
    return today.getFullYear() == new Date(date).getFullYear() &&
        today.getMonth() == new Date(date).getMonth() &&
        today.getDate() == new Date(date).getDate()
}

export const daysSince = (date) => {
    return Math.floor((new Date() - new Date(date))
        / (1000 * 60 * 60 * 24))
}

export const formatDateShort = (date) => {
    return new Date(date).toLocaleTimeString("en-US",
        {
            month: "short",
            day: "numeric",
            year: "numeric"
        })
}

export const mapDays = (startDate, callback) => {
    const start = new Date(startDate)
    const end = new Date()

    const acc = []

    for (
        let i = new Date(start);
        i <= end;
        i.setDate(i.getDate() + 1)
    ) {
        acc.push(callback(new Date(i)))
    }
    return acc 
}