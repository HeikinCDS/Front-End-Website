 document.addEventListener('DOMContentLoaded', () => {
      let items = [
        'Laksa', 'Satay', 'Char Kuey Teow', 'Roti Canai', 'Nasi Lemak', 'Murtabak', 'Apam Balik', 'Chee Cheong Fun'
      ];
      const wheel = document.getElementById('wheel');
      const spinBtn = document.getElementById('spinBtn');
      const resultText = document.getElementById('resultText');
      const addFoodForm = document.getElementById('addFoodForm');
      const newFoodInput = document.getElementById('newFoodInput');
      const foodList = document.getElementById('foodList');
      const resetBtn = document.getElementById('resetBtn');

      const defaultItems = [...items];
      const colors = ['#f94144','#f3722c','#f8961e','#f9c74f','#90be6d','#43aa8b','#577590','#277da1'];

      // Function to update wheel display
      function updateWheel() {
        const slice = 360 / items.length;
        const segments = items.map((_, i) => `${colors[i % colors.length]} ${i*slice}deg ${(i+1)*slice}deg`).join(',');
        wheel.style.background = `conic-gradient(${segments})`;
        
        // Update labels
        updateLabels();
        updateFoodList();
      }

      // Function to update food list display
      function updateFoodList() {
        foodList.innerHTML = '';
        items.forEach((item, index) => {
          const foodItem = document.createElement('div');
          foodItem.className = 'badge rounded-pill position-relative';
          foodItem.style.background = colors[index % colors.length];
          foodItem.style.color = 'white';
          foodItem.style.cursor = 'pointer';
          foodItem.innerHTML = `
            ${item}
            <button type="button" class="btn-close btn-close-white ms-2" 
                    style="font-size: 0.5rem; opacity: 0.8;" 
                    onclick="removeFood(${index})" 
                    title="Remove ${item}"></button>
          `;
          foodList.appendChild(foodItem);
        });
      }

      // Function to remove food item
      window.removeFood = function(index) {
        if (items.length > 2) {
          items.splice(index, 1);
          updateWheel();
        } else {
          alert('You need at least 2 food items on the wheel!');
        }
      };

      // Function to add new food item
      addFoodForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newFood = newFoodInput.value.trim();
        
        if (newFood && !items.includes(newFood)) {
          items.push(newFood);
          newFoodInput.value = '';
          updateWheel();
        } else if (items.includes(newFood)) {
          alert('This food item is already on the wheel!');
        } else {
          alert('Please enter a valid food name!');
        }
      });

      // Function to reset to default items
      resetBtn.addEventListener('click', () => {
        items = [...defaultItems];
        updateWheel();
      });

      // Function to update labels
      function updateLabels() {
        const labels = document.getElementById('labels');
        labels.innerHTML = '';
        items.forEach((name, i) => {
          const li = document.createElement('li');
          li.className = 'list-inline-item mb-2';
          li.innerHTML = `<span class="badge rounded-pill" style="background:${colors[i % colors.length]};">${name}</span>`;
          labels.appendChild(li);
        });
      }

      // Build conic-gradient from items
      updateWheel();

      let currentRotation = 0;
      const spinsMin = 6; // full rotations
      function spin() {
        spinBtn.disabled = true;
        const randomSlice = Math.floor(Math.random() * items.length);
        const sliceDeg = 360 / items.length;
        const targetDegWithinSlice = Math.random() * sliceDeg; // random within slice
        // Pointer is at 0deg (top). We need the chosen slice to land at 0deg after rotation.
        const finalDeg = (spinsMin * 360) + (360 - (randomSlice * sliceDeg + targetDegWithinSlice));
        currentRotation += finalDeg;
        wheel.style.transform = `rotate(${currentRotation}deg)`;

        // After transition, compute selected index precisely
        wheel.addEventListener('transitionend', onEnd, { once: true });
        function onEnd() {
          const normalized = ((currentRotation % 360) + 360) % 360; // 0..359
          const indexFromTop = Math.floor(((360 - normalized) % 360) / sliceDeg) % items.length;
          const selected = items[indexFromTop];
          resultText.textContent = `You should try: ${selected}!`;
          const modal = new bootstrap.Modal(document.getElementById('resultModal'));
          modal.show();
          setTimeout(() => { spinBtn.disabled = false; }, 400);
        }
      }

      spinBtn.addEventListener('click', spin);
    });