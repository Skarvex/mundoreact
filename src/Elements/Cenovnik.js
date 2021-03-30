import React, {useState} from 'react'
import Background from './trianglify-v1-cs85g_cc5d2i.jpg'
import './cenovnik.css'
import {Particles} from 'react-particles-js'
import ScrollIntoView from 'react-scroll-into-view'
import {Modal, Button} from 'react-bootstrap'

function Cenovnik() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        {/* <h1 className='text-center'>Ценовник</h1> */}
        <section class="pricing py-5 mt-5">
        <Particles
     params={{
	    "particles": {
	        "number": {
	            "value": 350,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} className='hahah' style={{display: 'block'}}/>
  <Modal show={show} className='modalce' onHide={handleClose}>
        <Modal.Header className='pozadina text-white border-0'>
          <Modal.Title className='ubavfont text-center'>За било какви нарачки и информации</Modal.Title>
        </Modal.Header>
        <Modal.Body className='ubavfont pozadina text-white text-center'>Контактирајте не на телефонскиот број, e-mail, или на било која од оставените социјални мрежи.<br/><strong>-MojWebsite.mk-</strong></Modal.Body>
        <Modal.Footer className='pozadina border-0  justify-content-center'>
          <Button className='shashs justify-content-middle butonce border-0' onClick={handleClose}>
            Во ред
          </Button>
        </Modal.Footer>
      </Modal>
  <div class="container">
    <h2 className='text-center text-white'>Ценовник</h2>
    <hr className='vsk'/>
    
    <div class="row">
      
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0 fft shush" style={{minHeight: '500px'}}>
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Веб Страна</h5>
            <h6 class="card-price text-center">17.900 денари<span class="period"></span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Модерен дизајн</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Најбрзата технологија (React.js)</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Компатибилна за сите уреди</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Гратис Домен + Хостинг/1 година</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Можност за ажурирање</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Без база на податоци</li>
            </ul>
              <a class="btn btn-block text-uppercase shash" onClick={handleShow}>Нарачај</a>
          </div>
        </div>
      </div>
     
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0 fft shush" style={{minHeight: '500px'}}>
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Веб Апликација</h5>
            <h6 class="card-price text-center">21.900 денари<span class="period"></span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Модерен дизајн</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Најбрзата технологија (React.js и Node.js)</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Компатибилна за сите уреди</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Гратис Домен + Хостинг/1 година</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Можност за ажурирање</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>База на податоци</li>
            </ul>
              <a class="btn btn-block text-uppercase shash"  onClick={handleShow}>Нарачај</a>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4">
        <div class="card fft shush h-100" style={{minHeight: '500px'}}>
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Мобилна Апликација</h5>
            <h6 class="card-price text-center">22.900 денари<span class="period"></span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Прикачување на App store и Google play</strong></li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Најбрзата технологија</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Можност за тестирање</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Модерен Дизајн</li>
            </ul>
              <a class="btn btn-block text-uppercase shash"  onClick={handleShow}>Нарачај</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default Cenovnik
