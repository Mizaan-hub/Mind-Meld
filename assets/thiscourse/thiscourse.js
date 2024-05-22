window.onload = function() {
    const imageSrc = sessionStorage.getItem('imageSrc');
    const title = sessionStorage.getItem('title');
    const thisCourse = document.querySelector('.thisCourse__container');
    const newCourse = document.createElement('article');
    newCourse.className = 'course';
    newCourse.innerHTML = `
      <div class="course__img">
        <img src="${imageSrc}" alt="Course Image">
      </div>
      <div class="course__info">
        <h4>${title}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet explicabo accusamus accusantium, alias laborum quae amet!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat dicta ad tempore harum mollitia illo, ratione natus beatae quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, obcaecati voluptatibus. Numquam neque facilis dolore rerum dolores ut fuga laborum asperiores! Unde recusandae officiis facilis dicta debitis incidunt illum eveniet deleniti suscipit delectus, laudantium dolorem exercitationem qui maxime minima doloribus. Eius aliquam optio tempora numquam minima aperiam hic sequi reiciendis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis numquam vitae expedita sed soluta harum, quisquam, aperiam ex alias, nostrum provident sunt officiis eius delectus velit dolores a dicta! Suscipit ratione quo illo dolore libero, autem deleniti, tempore ducimus dolorem nesciunt minus molestias omnis ut neque cumque, totam natus quos illum. Dolores optio quae atque laboriosam ullam doloremque similique qui iusto, consectetur molestias soluta vero eaque sint temporibus enim neque fugit praesentium repellendus adipisci iure voluptatibus. Veritatis, tempore veniam! Aliquam!</p>
      </div>
    `;
    thisCourse.appendChild(newCourse);
  };