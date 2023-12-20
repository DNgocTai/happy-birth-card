document.addEventListener("DOMContentLoaded", function () {
  const $ = document.querySelector.bind(document);
  const video = $("video");
  const audio = $("audio");
  const cake = $("#cake");
  const top = $("#env-top");
  const bottom = $("#env-bottom");
  const left = $("#env-left");
  const right = $("#env-right");
  const env = $("#envelope");
  const card = $("#card");
  const content = `Dear Bae: 
  Lời đầu tiên anh muốn nói là cảm ơn em vì đã bên cạnh anh suốt thời gian qua.
  Đã được một khoảng thời gian từ lúc anh với em bên nhau, đối với anh đó là một thời gian dài. Chúng ta cùng trải qua những niềm vui, nỗi buồn, sự cố gắng, thấu hiểu và đồng hành. Anh biết rằng anh còn nhiều điểm thiếu sót, gây ra những khoảng khắc đau lòng cho em. Anh hứa sẽ thay đổi để em không cần phải lo lắng nữa. Tương lai còn rất nhiều ngày kỷ niệm đẹp đẽ đang chờ đợi anh và em. Anh hy vọng em sẽ ngày càng xinh đẹp, mạnh khỏe, lạc quan, yêu đời, và hạnh phúc hơn trong tuổi mới này.
  Chúc mừng sinh nhật, chúc tình yêu của chúng ta mãi bền chặt.
  Yêu em 😘`;
  cake.addEventListener("click", function () {
    cake.style.display = "none";
    video.play();
    audio.play();
    top.style.transform = "translate(-50%,-50%) rotateX(-135deg)  skew(10deg)";
    let tmr = setTimeout(() => {
      top.style.opacity = "0";
      bottom.style.opacity = "0";
      left.style.opacity = "0";
      right.style.opacity = "0";
      env.style.opacity = "0";
      card.style.transform = "translate(-50%, -50%) scale(1.5)";
      card.style.opacity = "0.8";
      let i = 0;
      const inv = setInterval(() => {
        card.textContent = content.substring(0, i) + (i & 1 ? "_" : "");
        i++;
        if (i >= content.length) {
          card.textContent = content;
          clearTimeout(tmr);
          clearInterval(inv);
        }
      }, 100);
    }, 3000);
  });
});
