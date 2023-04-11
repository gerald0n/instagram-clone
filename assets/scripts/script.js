const likes = document.querySelectorAll("ion-icon[name='heart-outline'");

likes.forEach(like => {
  like.addEventListener('click', () => {
    if(like.name === "heart-outline" && like.id !== "top-icon") {
      like.name = 'heart';
      like.style.color = 'red';
    } else if(like.id === "like-comment") {
        like.name = 'heart-outline';
        like.style.color = '#8e8e8e';
    } else {
      like.name = 'heart-outline';
      like.style.color = 'black';
    }
})
})


