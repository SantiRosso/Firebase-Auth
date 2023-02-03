const postList = document.querySelector(".posts");
// import

export const setupPosts = (data, notUser) => {
  if (data.length) {
    let html = "";

    data.forEach((doc) => {
      const post = doc.data();
      const li = `
        <li class="list-group-item list-group-item-action list-group-item-dark">
            <h5>${post.Title}</h5>
            <p>${post.Comment}</p>
        </li>
      `;
      html += li;
    });

    postList.innerHTML = html;
  } else if (notUser) {
    postList.innerHTML = "<h1> Hello! Login to see posts! </h1>";
  } else {
    postList.innerHTML = "<h1> There are no posts yet </h1>";
  }
};
