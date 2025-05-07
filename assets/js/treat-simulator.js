document.addEventListener('DOMContentLoaded', () => {
    const btn  = document.getElementById('dispense-treat');
    const box  = document.getElementById('treat-anim-container');
  
    btn.addEventListener('click', () => {
      // 1) Shake the button
      btn.classList.add('shake');
      setTimeout(() => btn.classList.remove('shake'), 500);
  
      // 2) Spawn a bone icon
      const bone = document.createElement('i');
      bone.className = 'fas fa-bone treat-bone';
      // random horizontal offset variation
      bone.style.left = (Math.random() * 30 - 15) + 'px';
      box.appendChild(bone);
  
      // 3) Remove when animation ends
      bone.addEventListener('animationend', () => bone.remove());
    });
  });
  