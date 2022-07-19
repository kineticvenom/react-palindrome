function OutputLabel (props) {
    let rWord= (props.value).split('').reverse().join('')
    if(props.value === rWord)
          return (<p id="my-output">Your word {props.value} is a Palindrome! </p>)
    else 
         return <p id='my-output'>Your word {props.value} is not a Palindrome!</p>
  }

export default OutputLabel