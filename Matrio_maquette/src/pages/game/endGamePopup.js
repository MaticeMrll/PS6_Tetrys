
document.getElementById('end-game-button').addEventListener('click', function() {
    var iframe = document.createElement('iframe');
    iframe.src = './endGameStat.html';
    iframe.className = 'end-stat';
    document.body.appendChild(iframe);
});
