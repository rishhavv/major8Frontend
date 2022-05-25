import { Cascader } from 'antd';
import { useState } from 'react';

export const ListOptions=({selectedCategory,handlePress,selectedBreed,data})=>{
  const [petType,setpetType]=useState('')
  function onChange(arr, selectedOptions) {
    console.log("selectedOptions",selectedOptions);
    setpetType(arr)
    handlePress(arr)
    console.log("arr ",arr[0],arr[1])
    petType && console.log("petType",petType)
  }
    return(
        <Cascader options={data} autoFocus bordered size='mid' onChange={onChange}></Cascader>
    )
}
export default ListOptions