const categories = { fiction: [{ url: `/posts/the-purpose-of-education/`, date: `12 Dec 1948`, title: `The Purpose of Education`},],jekyll: [{ url: `/posts/jekyll-markdown/`, date: `04 Nov 2021`, title: `Jekyll Markdown`},{ url: `/posts/the-purpose-of-education/`, date: `12 Dec 1948`, title: `The Purpose of Education`},],テスト: [{ url: `/posts/%E6%8A%95%E7%A8%BF%E3%83%86%E3%82%B9%E3%83%882/`, date: `22 Aug 2022`, title: `投稿テスト2`},{ url: `/posts/%E6%8A%95%E7%A8%BF%E3%83%86%E3%82%B9%E3%83%88/`, date: `22 Aug 2022`, title: `投稿テスト`},], }

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