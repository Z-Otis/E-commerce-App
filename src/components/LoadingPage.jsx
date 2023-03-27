import '../App.css'
import { Navigate, useNavigate } from 'react-router-dom'
import loadingImg from '../images/pexels-rombo-3015339.jpg'


 const LoadingPage = () => {
    const navigate = useNavigate();

    return <main className='loading-page'>
        <img src={loadingImg} alt="one" className='img'/>
        <h3>The Royal Kitchen</h3>
        <button onClick={()=>navigate("/home")} className='btn'>
        view our meals
        </button>
    </main>
}
export default LoadingPage