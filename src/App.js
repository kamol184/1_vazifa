import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>WIX</h1>
            <p className='headparag'>Нажмите «Редактировать», чтобы создать свой сайт</p>
            <a href='#'>Подробнее</a>
            <button>Редактировать</button>
        </div>
      </header>

      <h2>Олег  Марков</h2>
      <div className='olegmarkovparagrap'>
       <p>Главная </p>
       <p className='obomne'>Обо мне</p>
       <p className='obomne'>Связаться</p>
      </div>

      <section id='homeSection'>
        <div className='container'>
          <div className='home1'>
          <img src='https://static.wixstatic.com/media/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg/v1/fill/w_552,h_552,al_c,lg_1,q_80,enc_auto/d78df6_4517dc1e0b1545bf84dccd915203c870.jpg'></img>
          <img src='https://static.wixstatic.com/media/d78df6_3eea4c192eed4667a602ead5652459c5.jpg/v1/fill/w_569,h_569,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_3eea4c192eed4667a602ead5652459c5.jpg'></img>
          <img src='https://static.wixstatic.com/media/d78df6_b9747effc3074458a295cf5674f8c73c.jpg/v1/fill/w_569,h_569,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_b9747effc3074458a295cf5674f8c73c.jpg'></img>
          </div>

          <div className='home2'>
          <img src='https://static.wixstatic.com/media/d78df6_9f4f79dd27814710b261e3acb931156e.jpg/v1/fill/w_379,h_569,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_9f4f79dd27814710b261e3acb931156e.jpg' className='ikki'></img>
           <img src='https://static.wixstatic.com/media/d78df6_b572be78b8984e2db58978eb21e433d7.jpg/v1/fill/w_569,h_569,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_b572be78b8984e2db58978eb21e433d7.jpg'></img>
          <img src='https://static.wixstatic.com/media/d78df6_394a136048754355ad8432b30522c761.jpg/v1/fill/w_569,h_569,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_394a136048754355ad8432b30522c761.jpg'></img>
          </div>

          <div className='home3'>
          <img src='https://static.wixstatic.com/media/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg/v1/fill/w_569,h_569,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_914d12d64a57420c99737b9933ebe7fc.jpg'></img>
          <img src='https://static.wixstatic.com/media/d78df6_afe9335eb67640c988d648f7671308e5.jpg/v1/fill/w_569,h_569,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_afe9335eb67640c988d648f7671308e5.jpg'></img>
          <img src='https://static.wixstatic.com/media/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg/v1/fill/w_569,h_569,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.jpg'></img>
          </div>

        </div>
      </section>

      <footer>
        <p className='footerparagrap'>© 2035 Олег Марков. Сайт создан на <a href='#'>Wix.com</a></p>
        <img src='https://static.wixstatic.com/media/8d2c2a4846503b9067e2fd2f590445c2.wix_mp/v1/fill/w_24,h_24,al_c,usm_0.66_1.00_0.01,enc_avif,quality_auto/8d2c2a4846503b9067e2fd2f590445c2.wix_mp' className='icon'></img>
        <img src='https://static.wixstatic.com/media/f33e5c8ff44ad726a15419f6ff97b3fd.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f33e5c8ff44ad726a15419f6ff97b3fd.png' className='icon'></img>
        <img src='https://static.wixstatic.com/media/fe7017590fbd384c7502a64601c7b444.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fe7017590fbd384c7502a64601c7b444.png' className='icon'></img>
        <img src='https://static.wixstatic.com/media/a0a5617532c029a9bcc4b6490606cc49.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a0a5617532c029a9bcc4b6490606cc49.png' className='icon'></img>
      </footer>
    </div>
  );
}

export default App;
