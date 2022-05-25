import { Button, Card } from 'antd';
import { Link } from "react-router-dom";

const { Meta } = Card;

//card will contain extra info about pet  that will be used while filling adoption form by user

export const PetItem=(props)=>{
  console.log("petitem ",props)
    return(
      
        <div >
        <Card
            hoverable
            style={{ width: 240 ,height:300,padding:10}}
            cover={<img alt="example" src={props.url}/>}
          >
            <Meta title={props.name} description={props.desc}></Meta> 
            
          </Card>
          {!props.isMissing&& <Link to='/AdoptionForm'><Button title='Adopt'>Adopt</Button></Link>}
        
        </div>
   
         
    )
}

export default PetItem