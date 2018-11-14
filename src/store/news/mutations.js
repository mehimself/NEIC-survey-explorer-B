import IdGenerator from '../IdGenerator'

function storeLocally(state) {
  state.news.sort((a, b) => a.date - b.date)
  localStorage.setItem('news', JSON.stringify(state.news))
}

const idGenerator = new IdGenerator()
const mutations = {
  putList(state, newList) {
    state.news = newList
    storeLocally(state)
  },
  postItem(state, item) {
    if (item.id === undefined) {
      item.id = idGenerator.newId(Date.now())
    }
    state.news.push(item)
    storeLocally(state)
  },
  putItemAttribute(state, update) {
    let itemIndex = state.news.findIndex(item => item.id === update.id)
    let item = state.news[itemIndex]
    if (!item) {
      console.log('item not found by update id', update)
    } else {
      item[update.attributeName] = update.value
      storeLocally(state)
    }
  },
  deleteItem(state, itemId) {
    state.news.splice(state.news.findIndex(item => item.id === itemId), 1)
    storeLocally(state)
  }
}

export default mutations
