document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter")
    const maxCounts = [1800, 59500, 38000] // Max Followers //
  
    counters.forEach((counter, index) => {
      let count = 0
      const maxCount = maxCounts[index]
      const duration = 3000 // 3 seconds //
      const interval = 20 // Update //
      const increment = maxCount / (duration / interval)
  
      const updateCounter = () => {
        count += increment
        if (count > maxCount) {
          count = maxCount
          clearInterval(timer)
        }
        counter.textContent = Math.round(count)
      }
  
      const timer = setInterval(updateCounter, interval)
    })
  })
  