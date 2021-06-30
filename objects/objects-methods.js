let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,

    checkAvailability: function (partySize){
        if (partySize <= this.guestCapacity - this.guestCount){
            return true
        } else {
            return false
        }
    },

    seatParty: function (partySize){
        if (partySize <= this.guestCapacity - this.guestCount){
            this.guestCount += partySize
        } else {
            console.log ('Oops! Not much space for you')
        }
    },

    removeParty: function (partySize) {
        if (this.guestCount >= partySize){
            this.guestCount -= partySize
        } else {
            console.log ('Wrong entry!!!')
        }   
    }
}

restaurant.seatParty (72)
console.log (restaurant.checkAvailability(4))
restaurant.removeParty (5)
console.log (restaurant.checkAvailability(4))