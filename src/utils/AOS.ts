import AOS from 'aos';
import 'aos/dist/aos.css';

const initAOS = () => {
    AOS.init({
      duration: 2000, 
      once: true,     // Запуск анимации только один раз
    });
  };
  
  export default initAOS;
