const categories = { 日記: [{ url: `/posts/dialy/`, date: `22 Aug 2022`, title: `日記`},],雑記: [{ url: `/posts/dialy/`, date: `22 Aug 2022`, title: `日記`},],プロフ: [{ url: `/posts/profile/`, date: `22 Aug 2022`, title: `プロフィール`},{ url: `/posts/skills/`, date: `22 Aug 2022`, title: `スキル`},{ url: `/posts/achievement/`, date: `22 Aug 2022`, title: `実績`},{ url: `/posts/creative/`, date: `22 Aug 2022`, title: `作ったもの`},],技術: [{ url: `/posts/creative/`, date: `22 Aug 2022`, title: `作ったもの`},], }

console.log(categories);

window.onload = function () {
  document.querySelectorAll(".article-category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      console.log(posts);
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};