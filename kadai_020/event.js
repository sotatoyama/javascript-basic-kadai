const changeText = document.getElementById('text')
const eventBtn = document.getElementById('btn')

eventBtn.addEventListener('click', () => {
  changeText.textContent= "ボタンをクリックしました"
})