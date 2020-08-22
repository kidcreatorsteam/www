const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startApp() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'How can I help?',
    options: [
      {
        text: 'I want to work with the KCT!',
        nextText: 2
      },
      {
        text: 'Help! I want to speak to a specific member!',
        nextText: 4
      },
      {
        text: 'Bug reports!',
        nextText: 8
      }
    ]
  },
  {
    id: 2,
    text: 'You do? That is cool! Type "work with us" into the box to the right.',
    options: [
      {
        text: 'What now?',
        nextText: 3
      },
      {
        text: 'Will they respond?',
        nextText: 7
      }
    ]
  },
  {
    id: 3,
    text: 'Wait for a reply. They will reply, it just might take some time.',
    options: [
      {
        text: 'Back',
        nextText: -1
      }
    ]
  },
  {
    id: 4,
    text: 'What you can do is email the members in the contact page. Type "contact us email" into the box to the right.',
    options: [
      {
        text: 'Okay',
        nextText: -1
      },
      {
        text: 'Why?',
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: 'We do not want too much spam!',
  },
  {
    id: 6,
    text: 'Type "Message" into the box to the right.',
    options: [
        {
            text: 'Back',
            nextText: -1
        }
    ]
  },
  {
    id: 7,
    text: 'Yes, of course they will!',
    options: [
      {
        text: 'Back',
        nextText: -1
      }
    ]
  },
  {
    id: 8,
    text: 'Alright.',
    options: [
      {
        text: 'For KCT InfoX',
        nextText: 9
      },
      {
        text: 'For the website',
        nextText: 11
      },
      {
        text: 'Other',
        nextText: 10
      }
    ]
  },
  {
    id: 9,
    text: 'KCT InfoX is currently in Beta. Type "InfoX" into the box to the right and submit a bug report/suggestion from Scratch.',
    options: [
      {
        text: 'Back',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'Okay. Type "Message" into the box to the right.',
    options: [
      {
        text: 'Back',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'Okay. Type "Website Bug" into the box to the right.',
    options: [
      {
        text: 'Back',
        nextText: -1,
      }
    ]
  }
]

startApp()