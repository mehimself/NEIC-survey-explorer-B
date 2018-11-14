import axios from 'axios'

const actions = {
  putList({commit}, list) {
    axios
      .put('/api/news/', list)
      .then(response => {
        commit('putList', list)
      })
      .catch(function (err) {
        console.log('put list to /api.news', list)
        console.warn('axios error with putList:', err)
      })
  },
  postItem({commit}, item) {
    axios
      .post('/api/news/', item)
      .then(response => {
        console.log('created', response.data)
        item.id = response.data
        commit('postItem', item)
      })
      .catch(function (err) {
        console.log('post to /api/news', item)
        console.warn('axios error with postItem:', err)
      })
  },
  putItemAttribute({state, commit}, update) {
    let body = {
      id: update.id
    }
    body[update.attributeName] = update.value
    axios
      .put('/api/news/' + update.id, body)
      .then(response => {
        commit('putItemAttribute', update)
      })
      .catch(function (err) {
        console.log('putItemAttribute', update)
        console.warn('axios error with putItemAttribute:', err)
      })
  },
  deleteItem({state, commit}, itemId) {
    axios
      .delete('api/news/' + itemId)
      .then(response => {
        commit('deleteItem', itemId)
      })
      .catch(function (err) {
        console.log('deleteItem', itemId)
        console.warn('axios error with deleteItem:', err)
      })
  }
}

export default actions
