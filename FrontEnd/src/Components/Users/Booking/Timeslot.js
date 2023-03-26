
export const getTimeSlot = (startTime, endTime, gap) => {
    const timeSlots = []
    const startDate = new Date(`2000-01-01T${startTime}:00`);
    const endDate = new Date(`2000-01-01T${endTime}:00`);
    const duration = endDate - startDate;
    const numSlots = Math.floor(duration / (gap * 60 * 1000));
    for (let i = 0; i < numSlots; i++) {
        const slotTime = new Date(startDate.getTime() + (i * gap * 60 * 1000));
        let time = slotTime.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' });
        if (time.split(':')[0].length === 1) time = '0' + time;
        timeSlots.push(time);
    }
    return timeSlots
}