function play() {
    const audio = document.getElementById('audio');
    audio.play();
    console.log('play');
}

function changeWallpaper() {
    var body = document.body;
    const wallpapers = [
        "image/Background/wallpaper/wp (1).jpg",
        "image/Background/wallpaper/wp (1).png",
        "image/Background/wallpaper/wp (1).webp", 
        "image/Background/wallpaper/wp (2).jpg",
        "image/Background/wallpaper/wp (2).webp",
        "image/Background/wallpaper/wp (3).jpg",
        "image/Background/wallpaper/wp (4).jpg",
        "image/Background/wallpaper/wp (4).webp",
        "image/Background/wallpaper/wp (5).jpg",
        "image/Background/wallpaper/wp (6).jpg",
        "image/Background/wallpaper/wp (7).jpg",
    ];
    var randomIndex = Math.floor(Math.random() * wallpapers.length);
    var i = 'url("' + wallpapers[randomIndex] + '")';
    body.style.backgroundImage = i;
    console.log(body.style.backgroundImage);
}
function changetest() {
    var body = document.body;
    body.style.backgroundImage = 'url("image/Background/wallpaer/wp (1).jpg")';
    
}

