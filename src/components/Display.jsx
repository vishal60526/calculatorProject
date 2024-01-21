import style from './Display.module.css'
const Display=({values})=>{
    return(
        <>  
   <div className={style.dis}> {values}</div>
        </>
    );
}
export default Display;