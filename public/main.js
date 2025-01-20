document.addEventListener("DOMContentLoaded", () => {
    let counters = document.querySelectorAll(".counter")
    let maxCounts = [1800, 59500, 38000] // Max Followers //
  
    counters.forEach((counter, index) => {
      let count = 0
      let maxCount = maxCounts[index]
      let duration = 3000 // 3 seconds //
      let interval = 20 // Update //
      let increment = maxCount / (duration / interval)
  
      let updateCounter = () => {
        count += increment
        if (count > maxCount) {
          count = maxCount
          clearInterval(timer)
        }
        counter.textContent = Math.round(count)
      }
  
      let timer = setInterval(updateCounter, interval)
    })
  })
  