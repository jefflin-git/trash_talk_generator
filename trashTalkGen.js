//隨機選擇函式
function randomFun(array) {
  let index = Math.floor(Math.random() * array.length)
  return array[index]
}

//產生幹話函式
function generateTrashTalk(option) {

  // define things user might want
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // create a collection to store things user picked up
  let taskCollection = []
  let target = ''
  if (option.job === 'engineer') {
    target = '工程師'
    taskCollection = taskCollection.concat(task.engineer)
  }
  if (option.job === 'designer') {
    target = '設計師'
    taskCollection = taskCollection.concat(task.designer)
  }
  if (option.job === 'entrepreneur') {
    target = '創業家'
    taskCollection = taskCollection.concat(task.entrepreneur)
  }

  // return error notice if taskCollection is empty
  if (target.length === 0) {
    return 'Please select a character!'
  }

  // start generating trash talk
  const oneTask = randomFun(taskCollection)
  const onePhrase = randomFun(phrase)
  const result = `身為一個${target}，${oneTask}，${onePhrase}吧!`
  // return the generated trash talk
  return result
}

// export generatePassword function for other files to use
module.exports = generateTrashTalk
