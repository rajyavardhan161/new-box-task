const boxes = document.querySelectorAll('.box');
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
boxes.forEach (box  => {
    box.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;




    // box.style.backgroundColor = 'red';
    // box.style.border = '4px solid';
    // box.style.backgroundImage = "url('https://plus.unsplash.com/premium_photo-1669748156838-33fda144e8dd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=3000&q=60')";
    // box.style.backgroundSize = 'cover';
    // box.style.backgroundRepeat = 'no-repeat';
    });
});
