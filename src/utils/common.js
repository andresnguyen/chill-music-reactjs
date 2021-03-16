const common = {
    formatDate: (time) => {
        const number = Math.floor(time)
        const minutes = ('0'+ Math.floor(number / 60)).slice(-2)
        const seconds = ('0'+ (number - Math.floor(number / 60) * 60)).slice(-2)
    
        return `${minutes}:${seconds}`
    },

    shuffle: (arr, currentIndex) => {

        const result = [...arr]
        result.splice(currentIndex, 1)
        const objIndex = arr[currentIndex]

        result.sort(() => 0.5 - Math.random())
        return [objIndex, ...result]
    }
}

export default common