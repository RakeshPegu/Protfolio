import { Link } from 'react-router-dom';
import './card.scss';
import SinglePage from '../singlePage/SinglePage';




function Card({ item }) {
    const {createAt, ...data} = item;
    

   const date = new Date(createAt)
   const year = date.getFullYear()
   const month = String(date.getMonth()+1).padStart(2,"0");
   const day =  String(date.getDate()).padStart(2, '0')
   const formattedDate = `${day}/${month}/${year}`;
  
    


    return (
        <Link to={`/${item.id}`} >
            
            <div className='card'>
             
            <div className="wrapper">
                <div className="imgContainer">
                    <img src={data.images || "./noavatar.jpg"} alt='No avatar available' />
                </div>
                
                <div className="textContainer">
                    <h3>{data.name}</h3>
                    <span>Posted date:{formattedDate}</span>
                    {/* If createAt is a date string or timestamp, consider formatting it */}
                </div>
            </div>
        </div>
        </Link>
    
        
    
    );
}

export default Card;
