function janken(user) {
  let cpuJankens = ["g.png", "c.png", "p.png"];
  let userJankens = ["g.png", "c.png", "p.png"];

  // ユーザーの選んだ手を表示
  let userImg = document.getElementById("userImg");
  userImg.src = "img/" + userJankens[user];

  //   CPUの手を0~2でランダムに選ぶ
  let cpu = Math.floor(Math.random() * 3);

  // CPUの選んだ手を表示
  let cpuImg = document.getElementById("cpuImg");
  cpuImg.src = "img/" + cpuJankens[cpu];

  //   じゃんけんの勝敗判定
  let result = [
    ["あいこ", "勝ち", "負け"],
    ["負け", "あいこ", "勝ち"],
    ["勝ち", "負け", "あいこ"],
  ];
  document.getElementById("result").textContent = result[user][cpu];
}
