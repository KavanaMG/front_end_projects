const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')


setTimeout(getData, 2500)
function getData(){
        header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" />'
        title.innerHTML = 'Lorem epsum dolor sit amet'
        excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolore, perferendis'
        profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
        name.innerHTML = 'John Doe'
        date.innerHTML = 'Jun 22 2021'


        animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
        animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}