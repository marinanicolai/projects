import React from 'react'
import { Container, Box ,Button} from '@shared/core';
import { TableItem } from '@components/TableItem/TableItem';
import { listenerCount } from 'process';

type Props = {
  list: []
}

const InputArea = ({list} :Props) => {

  const handleAddEvent = () => {
    // let errors: string[] = [];
console.log("clicked");

  }
  return (   
     <>
        <table>
          <thead  >
            <tr>
             <th><TableItem size = {18} item = {`Date`} fontWeight={'normal'} margin={'auto'}/></th>
             <th><TableItem size = {18} item = {`Category`} fontWeight={'normal'} margin={'auto'} /></th>
             <th><TableItem size = {18} item = {`Description`} fontWeight={'normal'} margin={'auto'} /></th>
             <th><TableItem size = {18} item = {`Amount`} fontWeight={'normal'} margin={'auto'} /></th>
              <th> <Button variant="tonal" onClick={handleAddEvent}>Add</Button></th>
           </tr>
         </thead>
       </table>
       <tbody>
        {/* {list?.map((item,index) => (
        <TableItem size = {18} item={item} fontWeight={'normal'} margin={'auto'} key={index}/>))} */}
       </tbody>
    </>   
  )
}

export default InputArea