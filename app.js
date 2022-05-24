
  console.log('search');

  const input = document.querySelector('.recherche__input');

  if (input) {

    const posts = [
      {
        id: 1,
        title: 'Les garanties de l’immobilier neuf',
        img: 'img/article5.png',
        href: '#',
        tags: [
          {
            href: '#',
            name: '#conférence',
          },
          {
            href: '#',
            name: '#conférence',
          },
        ],
      },
      {
        id: 2,
        title: 'L’Immobilier neuf en 3 questions',
        img: 'img/article4.png',
        href: '#',
        tags: [
          {
            href: '#',
            name: '#conférence',
          },
          {
            href: '#',
            name: '#conférence',
          },
        ],
      },
      {
        id: 3,
        title: 'Comment réussir son achat dans le neuf ?',
        img: 'img/recent1.png',
        href: '#',
        tags: [
          {
            href: '#',
            name: '#conférence',
          },
          {
            href: '#',
            name: '#conférence',
          },
        ],
      },
      {
        id: 1,
        title: 'Les garanties de l’immobilier neuf',
        img: 'img/article5.png',
        href: '#',
        tags: [
          {
            href: '#',
            name: '#conférence',
          },
          {
            href: '#',
            name: '#conférence',
          },
        ],
      },
      {
        id: 2,
        title: 'L’Immobilier neuf en 3 questions',
        img: 'img/article4.png',
        href: '#',
        tags: [
          {
            href: '#',
            name: '#conférence',
          },
          {
            href: '#',
            name: '#conférence',
          },
        ],
      },
      {
        id: 3,
        title: 'Comment réussir son achat dans le neuf ?',
        img: 'img/recent1.png',
        href: '#',
        tags: [
          {
            href: '#',
            name: '#conférence',
          },
          {
            href: '#',
            name: '#conférence',
          },
        ],
      },
      {
        id: 1,
        title: 'Les garanties de l’immobilier neuf',
        img: 'img/article5.png',
        href: '#',
        tags: [
          {
            href: '#',
            name: '#conférence',
          },
          {
            href: '#',
            name: '#conférence',
          },
        ],
      },
      {
        id: 2,
        title: 'L’Immobilier neuf en 3 questions',
        img: 'img/article4.png',
        href: '#',
        tags: [
          {
            href: '#',
            name: '#conférence',
          },
          {
            href: '#',
            name: '#conférence',
          },
        ],
      },
      {
        id: 3,
        title: 'Comment réussir son achat dans le neuf ?',
        img: 'img/recent1.png',
        href: '#',
        tags: [
          {
            href: '#',
            name: '#conférence',
          },
          {
            href: '#',
            name: '#conférence',
          },
        ],
      },
    ];



    function filterPosts(title) {
      return posts.filter(function(post) {
        return post.title.toLowerCase().indexOf(title.toLowerCase()) > -1;
      })
    }





    const container = document.querySelector('.recherche__field');

    const select = document.querySelector('.recherche__custom-select');
    const selectContent = document.querySelector('.custom-select__list')

    const close = document.querySelector('.recherche__close');

    input.addEventListener('focus', function() {
      container.classList.add('active');
    })


    input.addEventListener('blur', function() {
      container.classList.remove('active');
    })



    function reset() {
      selectContent.innerHTML = '';
      select.classList.remove('active');
    }


    function showForSelect(posts) {
      let str = posts.map( post => {

        let tags = post.tags.map( tag => {
          return `<li class="tags__item">
            <a href="${tag.href}" class="tags__link">${tag.name}</a>
          </li>`
        }).join('');


        // console.log(post);
        return `<li class="custom-select__item">
          <div class="custom-select__img">
            <img src="${post.img}" alt="#" class="custom-select__img-elem">
          </div>
          <div class="custom-select__content">
            <a href="${post.href}" class="custom-select__title">
              ${post.title}
            </a>
            <ul class="custom-select__tags tags">
              ${tags}
            </ul>
          </div>
        </li>`;
      }).join('');

      selectContent.innerHTML = str;
      select.classList.add('active');
    };


    input.addEventListener('input', function(e) {
      const input = e.currentTarget;
      const title =  input.value;
      const length = title.length;



      if (length > 0 ) {
        close.classList.add('active');


        let newPosts = filterPosts(title);

        if(newPosts.length !== 0) {

          showForSelect(newPosts);





        } else {
          // удаляем список из html полностью
          reset();

        }

      } else {
        close.classList.remove('active');
        reset();
      }




    });

    close.addEventListener('click', function(e) {
      const current = e.currentTarget;
      current.classList.remove('active');
      input.value = '';
      reset();
    })


  }
