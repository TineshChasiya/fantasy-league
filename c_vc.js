// class cvc-info-player, player-close

const cvc_info = document.querySelectorAll(".cvc-info");
const cvc_info_player = document.querySelector(".cvc-info-player");
const player_close = document.querySelector(".player-close");


cvc_info.forEach(info => {
    info.addEventListener('click', () => {
        cvc_info_player.style.display = "block";
    });
  });


  player_close.addEventListener('click', () => {
    cvc_info_player.style.display = "none";
});