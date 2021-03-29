import React from 'react'
import './cel.css'
import {GiFlexibleLamp, GiPencilBrush, GiBullseye} from 'react-icons/gi'
import {ImCalendar} from 'react-icons/im'
import {FaHandsHelping} from 'react-icons/fa'

function Cel() {
    return (
        <>
        <div className='text-center ssss'>
            <h2>Вашиот вистински избор за влез во онлајн светот</h2>
            <p className='text-muted'>Зошто да не одберете нас</p>
            <hr className='hrp'/>
            <div class="container">
    
    <div class="row">
      
      <div class="col-lg-3">
        <div class="card mb-5 mb-lg-0 fft ffs">
          <div class="card-body">
            <h5 class="card-title text-uppercase text-center ffs">Иновативни</h5>
            <h6 class="card-price text-center"><GiFlexibleLamp className='ikona'/><span class="period"></span></h6>
            <p className='cel-text'>Mundo™ користи најиновативната и најновата технологија при креирање на веб страни. Резултат  - Вашата веб страна секогаш ќе биде достапна, најоптимизирана, најбезбедна и на врвот на пребарувањата на Google и другите пребарувачи.</p>
          </div>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card fft ffs mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-uppercase text-center ffs">Модерен Дизајн</h5>
            <h6 class="card-price text-center"><GiPencilBrush className='ikona'/><span class="period"></span></h6>
            <p>Со модерн дизајн, Вашата веб страна секогаш ќе остава долготраен и позитивен впечаток на секој посетител.  Mundo™ секој проект го развива од почеток, Вие го изберете стилот и боите, секоја веб страна е уникатна.  </p>
          </div>
        </div>
      </div>
     
      <div class="col-lg-3">
        <div class="card mb-5 mb-lg-0 fft ffs">
          <div class="card-body">
            <h5 class="card-title text-uppercase text-center ffs">Најдобар Избор</h5>
            <h6 class="card-price text-center"><GiBullseye className='ikona'/><span class="period"></span></h6>
            <p>Тоа ние што го нудиме не може да го најдете на ниедно друго место. Ние како студенти сме во идеална позиција да ви овозможеме да имате Ваша веб страна со најновата технологија за двојно пониска цена од другите.</p>
          </div>
        </div>
      </div>
      
      <div class="col-lg-3">
        <div class="card fft ffs">
          <div class="card-body">
            <h5 class="card-title text-uppercase text-center ffs">Доверливи</h5>
            <h6 class="card-price text-center"><FaHandsHelping className='ikona'/><span class="period"></span></h6>
            <p>Секогаш ќе бидеме тука за Вас, со задоволство да Ви помогнеме и да ви ги исполниме вашите потреби. Со персонален пристап кон работата со нашите клиенти, без Вие да треба да се вклучите во процесот. Секое ветување и секој договор во целост го исполнуваме.</p>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <p className='text-muted'>Mundo™ е иницијатива од двајца млади и амбициозни студенти кои имаат за цел позитивно да влијаат на средината и малите бизниси. </p>
    <p className='text-muted'> Времињата и опшеството се променија. Луѓето поголем дел од своето време поминуваат на своите електронски уреди, дознааваат нови локации и бизниси од нивен интерес преку интернетот. Искористете ја оваа промената во Ваш интерес. Претставете се со ефикасна и атрактивна веб страница,  оставете долготраен впечаток на корисниците на Вашите услуги. </p>
  </div>
        </div>
    </>
    )
}

export default Cel
