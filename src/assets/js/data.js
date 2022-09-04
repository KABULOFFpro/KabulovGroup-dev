const bookingData = {
    title: "summary",
    informations: [
        {
            title: "service type",
            info: 'hourly'
        },
        {
            title: "pickup location",
            info: 'switzerland park, chandragiri'
        },
        {
            title: "drop off location",
            info: 'switzerland park, chandragiri'
        },
        {
            title: "pickup date, time",
            info: `${new Date().toLocaleDateString()} | ${new Date().getHours()}:00`
        },
    ],
    distanceInfo: [
        {
            title: "total distance",
            num: "0 km"
        },
        {
            title: "total time",
            num: "7h 0m"
        }
    ],
    chosenVehicles: [
    ],
    totalPrice() {
        let total = 0
        if (this.chosenVehicles.length) {
            this.chosenVehicles.forEach(car => {
                if (!isNaN(car.price)) {
                    total += car.price
                } else {
                    total = 0
                }
            }); 
        } else {
            total = 0
        }

        return total
    }
}

export default bookingData