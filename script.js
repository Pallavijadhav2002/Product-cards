// Countdown Timer
const eventDate = new Date("Feb 6, 2025 16:24:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const remainingTime = eventDate - now;

    if (remainingTime < 0) {
        document.getElementById("countdown").innerHTML = "<h2>Sale Ended!</h2>";
        setTimeout(() => location.reload(), 5000); // Reset after 5 seconds
        return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call
updateCountdown();



setInterval(countdown, 1000);

// Image Gallery Filters
document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll(".filter-button");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach(button => {
      button.addEventListener("click", () => {
          const filter = button.getAttribute("data-filter");

          filterButtons.forEach(btn => btn.classList.remove("active"));
          button.classList.add("active");

          galleryItems.forEach(item => {
              if (filter === "all" || item.classList.contains(filter)) {
                  item.style.display = "block";
              } else {
                  item.style.display = "none";
              }
          });
      });
  });
});


// Filter images based on selected category
function filterImages() {
  const filterValue = document.getElementById("categoryFilter").value;
  const items = document.querySelectorAll(".gallery-item");
  
  // Smooth transition when filtering
  const galleryContainer = document.querySelector(".gallery-container");
  galleryContainer.classList.add('hidden');
  
  setTimeout(() => {
    items.forEach(item => {
      if (filterValue === "all" || item.classList.contains(filterValue)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
    
    galleryContainer.classList.remove('hidden');
  }, 300);
}

// Open modal with the clicked image
function openModal(imgElement) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  
  modalImage.src = imgElement.src;
  modal.classList.add("show");
}

// Close the modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
}