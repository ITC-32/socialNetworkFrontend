const chatHistory = document.querySelector('.chat-history')
chatHistory.scrollTop = chatHistory.scrollHeight

function someFunc() {
    let msgInput = document.querySelector('div.chat-actions > div.send-form > textarea');
    let msg = msgInput.value;
    // logic send
    let chatContainer = document.createElement('div')
    chatContainer.classList.add('msg-card-container', 'incoming-msg')
    let msgContainer = document.createElement('p')
    msgContainer.classList.add('chat-message-card', 'own-message')
    let msgObj = document.createElement('span')
    msgObj.innerHTML = msg
    const date = new Date()
    const msgDate = date.getHours() + ':' + date.getMinutes()
    let msgDateObj = document.createElement('span')

    msgDateObj.innerHTML = msgDate
    msgContainer.appendChild(msgObj)
    msgContainer.appendChild(msgDateObj)
    chatContainer.appendChild(msgContainer)
    chatHistory.appendChild(chatContainer)
    chatHistory.scrollTop = chatHistory.scrollHeight
    msgInput.value = ''
}

const sendBtn = document.querySelector(".chat-actions .send-btn")
sendBtn.addEventListener('click', someFunc)
