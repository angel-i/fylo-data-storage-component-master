const progress = document.querySelector('.progress-done');

progress.style.width = progress.getAttribute('data-done') + '%';


setTimeout(()=>{
    progress.style.opacity = 1;
    progress.style.width = progress.getAttribute('data-done') + '%';
},500)