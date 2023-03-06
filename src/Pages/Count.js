
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faMinus} from '@fortawesome/free-solid-svg-icons'
//styled-components
import styled from 'styled-components'

const CountButton = styled.button`
  width: 20px;
  height: 20px;
  font-size: 18px;
  background-color: white;
  margin: 0 20px;
  border: none;
`

/*재사용성을 위해 카운트 뼈대를 만들어주고
바뀌는 값을 props로*/

export default function Count(props){
    
    return(
      <span>
        <CountButton onClick={props.minusClick}>
          <FontAwesomeIcon icon={faMinus}/>
        </CountButton>
        <span>{props.count}</span>
        <CountButton onClick={props.plusClick}>
          <FontAwesomeIcon icon={faPlus}/>
        </CountButton>
      </span>
    )
}

