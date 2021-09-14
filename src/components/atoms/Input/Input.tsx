import React, {forwardRef, InputHTMLAttributes} from 'react'
import styled from 'styled-components';


interface InputProps extends InputHTMLAttributes<HTMLInputElement>
//이러면 html input태그의 속성을 가져올 수 있는건가
//ref전달 어떻게 하는지 모르겠다


// const Input = forwardRef<HTMLInputElement, InputProps>(
//     ({ type, value, onChange, ...props }, ref) => (
//       <InputStyles {...props} ref={ref} onChange={onChange}></InputStyles>
//     )
//   );


const InputStyle = styled.input`
    width: 80,
    border: 'none',
    borderBottom: '1px solid grey',
    fontSize: 20,
`
export default Input;