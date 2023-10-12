const list = document.querySelector('ul')
const form = document.querySelector('form')
const title = document.getElementById('title')
const id = document.getElementById('id')
const completed = document.getElementById('completed')

const getUsers = async url => {
   const responce = await fetch(url)
   const result = await responce.json()
   result.slice(0, 8).forEach(item => {
      const el = document.createElement('li')
      const title = document.createElement('h3')
      title.textContent = item.name
      el.classList.add('list__item')

      const elemBold = document.createElement('b')
      const spanEl = document.createElement('span')
      spanEl.textContent = 'username: '
      spanEl.classList.add('list__span')

      const id = document.createElement('span')
      id.textContent = `${item.username}`

      const wrapperCompleted = document.createElement('div')
      const webSiteSpan = document.createElement('span')
      webSiteSpan.textContent = 'website: '
      webSiteSpan.classList.add('list__span')

      const completed = document.createElement('a')
      completed.textContent = item.website
      completed.classList.add('list__item-complete')
      completed.setAttribute('href', '#')

      el.appendChild(title)
      el.appendChild(elemBold)
      elemBold.appendChild(spanEl)
      elemBold.appendChild(id)
      el.appendChild(wrapperCompleted)
      wrapperCompleted.appendChild(webSiteSpan)
      wrapperCompleted.appendChild(completed)

      list.appendChild(el)
   })
}

getUsers('https://jsonplaceholder.typicode.com/users')

// fetch('https://jsonplaceholder.typicode.com/users')
//    .then(res => res.json())
//    .then(data => data.slice(0, 8).forEach(item => {
//       const el = document.createElement('li')
//       const title = document.createElement('h3')
//       title.textContent = item.name
//       el.classList.add('list__item')

//       const elemBold = document.createElement('b')
//       const spanEl = document.createElement('span')
//       spanEl.textContent = 'username: '
//       spanEl.classList.add('list__span')

//       const id = document.createElement('span')
//       id.textContent = `${item.username}`

//       const wrapperCompleted = document.createElement('div')
//       const webSiteSpan = document.createElement('span')
//       webSiteSpan.textContent = 'website: '
//       webSiteSpan.classList.add('list__span')

//       const completed = document.createElement('a')
//       completed.textContent = item.website
//       completed.classList.add('list__item-complete')
//       completed.setAttribute('href', '#')

//       el.appendChild(title)
//       el.appendChild(elemBold)
//       elemBold.appendChild(spanEl)
//       elemBold.appendChild(id)
//       el.appendChild(wrapperCompleted)
//       wrapperCompleted.appendChild(webSiteSpan)
//       wrapperCompleted.appendChild(completed)

//       list.appendChild(el)
//    }))

list.classList.add('list')

form.addEventListener('submit', (e) => {
   e.preventDefault()

   handleSubmit()
})

const handleSubmit = () => {
   fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
         title: title.value,
         id: id.value,
         completed: completed.value,
      })
   })
}