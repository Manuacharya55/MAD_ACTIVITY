import odiTeam from "../utils/odi.js";

const players = document.querySelector("#players");

odiTeam.forEach((curEle) => {
  players.innerHTML += `<div class="card">
                <h1>${curEle.teamSquadPlayerName}</h1>
                <p>${curEle.teamSquadPlayerRole}</p>
                <p>${curEle.teamSquadPlayerInfoList}</p>
                <p>${curEle.teamSquadPlayerInfoList2}</p>
                <div class="img">
                    <img src="${curEle.src}" alt="">
                </div>
            </div>`;
});
