import React from 'react';
import './App.scss';

import logo from './assets/logo.svg';
import phoneIcon from './assets/iconPhone.svg';
import sushiImage from './assets/sushiMain.png';
import iconBook from './assets/iconBook.svg';
import iconMegaphone from './assets/iconMegaphone.svg';
import iconLock from './assets/iconLock.svg';
import iconWhatsapp from './assets/iconWhatsapp.svg';
import iconTelegram from './assets/iconTelegram.svg';
import iconMoney from './assets/iconMoney.svg';
import iconWallet from './assets/iconWallet.svg';

import videoPic from './assets/videoPic.png';
import quoteMark from './assets/quoteMark.svg';
import authorPhoto from './assets/authorPhoto.png';

import mapPic from './assets/mapPic.png';

import tablePic from './assets/tablePic.png';
import arrowIcon from './assets/arrowIcon.svg';

import miniPic from './assets/miniPic.png';
import standartPic from './assets/standartPic.png';
import barPic from './assets/barPic.png';

import studyPic from './assets/studyPic.png';

import zonesPic from './assets/mapPic.png';
import projectPic from './assets/projectPic.png';
import kLenorPic from './assets/kLenorPic.png';
import openPic from './assets/openPic.png';

import promoPic from './assets/promoPic.png';
import menuPic from './assets/menuPic.png';
import socialPic from './assets/socialPic.png';
import appPic from './assets/appPic.png';
import googlePlay from './assets/googlePlay.png';
import appStore from './assets/appStore.png';

import reviewOne from './assets/reviewOne.png';
import reviewTwo from './assets/reviewTwo.png';
import reviewThree from './assets/reviewThree.png';
import reviewFour from './assets/reviewFour.png';
import arrowDown from './assets/arrowDown.svg';

import iconVk from './assets/iconVk.svg';
import iconYoutube from './assets/iconYoutube.svg';
import iconMail from './assets/iconMail.svg';
import iconPhone from './assets/iconPhone.svg';

function App() {
    return (
        <div className="sushishop">
            <header className="top">
                <div className="left">
                    <img src={logo} alt="" className="logo" />
                    <span className="franchise">Франшиза</span>
                </div>

                <a href="" className="phone">
                    <img src={phoneIcon} alt="" className="phone-icon" />
                    +7 (800) 775-11-91
                </a>

                <button className="btn-white">Связаться с нами</button>
            </header>

            <section className="main">
                <div className="text">
                    <h1 className="title">Откройте свой бизнес</h1>
                    <p className="title-orange">при поддержке экспертов Сушишоп</p>

                    <p className="desc">
                        Мы одни из первых в России запустили франчайзинг в нише японской кухни,
                        знаем все нюансы работы и умеем адаптироваться в меняющемся рынке.
                    </p>

                    <div className="buttons">
                        <button className="btn-orange">Связаться с нами</button>
                        <button className="btn-light">Заполнить анкету</button>
                    </div>
                </div>

                <div className="pic">
                    <img src={sushiImage} alt="" />
                </div>
            </section>

            <section className="bottom">
                <div className="item">
                    <img src={iconBook} alt="" className="icon" />
                    <p>Обучаем и поддерживаем партнеров до, во время и после открытия</p>
                </div>

                <div className="item">
                    <img src={iconMegaphone} alt="" className="icon" />
                    <p>Предоставляем полное маркетинговое сопровождение и все каналы продаж</p>
                </div>

                <div className="item">
                    <img src={iconLock} alt="" className="icon" />
                    <p>
                        Берём фиксированное роялти, а не процент, чтобы облегчить партнёрам
                        финансовую нагрузку
                    </p>
                </div>

                <div className="soc">
                    <a href="#" className="circle">
                        <img src={iconWhatsapp} alt="" />
                    </a>
                    <a href="#" className="circle">
                        <img src={iconTelegram} alt="" />
                    </a>
                </div>
            </section>

            <section className="info">
                <div className="left-menu">
                    <p className="menu-active">О франшизе</p>
                    <p className="menu-item">Бизнес-модель</p>
                    <p className="menu-item">Сильное обучение</p>
                    <p className="menu-item">Поддержка до и после запуска</p>
                    <p className="menu-item">Помощь в продвижении магазина</p>
                    <p className="menu-item">Отзывы</p>
                    <p className="menu-item">Вопрос-ответ</p>
                    <p className="menu-item">Оставить заявку</p>
                </div>

                <div className="right-side">
                    <div className="calc">
                        <div className="calc-row">
                            <p className="calc-name">Паушальный взнос единовременный</p>
                            <p className="calc-dots">..............................</p>
                            <p className="calc-value">от 190 000 ₽</p>
                        </div>

                        <div className="calc-row">
                            <p className="calc-name">Окупаемость, средняя по сети</p>
                            <p className="calc-dots">..............................</p>
                            <p className="calc-value">7 месяцев</p>
                        </div>

                        <div className="calc-row">
                            <p className="calc-name">Рентабельность</p>
                            <p className="calc-dots">..............................</p>
                            <p className="calc-value">11–20%</p>
                        </div>

                        <div className="calc-row">
                            <p className="calc-name">Инвестиции</p>
                            <p className="calc-dots">..............................</p>
                            <p className="calc-value">от 1 000 000 ₽</p>
                        </div>

                        <div className="calc-row">
                            <div className="calc-name calc-name-700">
                                <img src={iconMoney} alt="" className="calc-icon" />
                                <p>Роялти, фиксированный</p>
                            </div>
                            <p className="calc-dots">..............................</p>
                            <p className="calc-value calc-value-700">от 24 000 ₽</p>
                        </div>

                        <div className="calc-row">
                            <div className="calc-name calc-name-700">
                                <img src={iconWallet} alt="" className="calc-icon" />
                                <p>Чистая прибыль в месяц</p>
                            </div>
                            <p className="calc-dots">..............................</p>
                            <p className="calc-value calc-value-700">от 200 000 ₽</p>
                        </div>
                    </div>

                    <div className="stats">
                        <h2 className="stats-title">Бизнес в нише с растущими показателями</h2>

                        <p className="stats-desc">
                            Официальные исследования показывают колоссальный рост общенита в России,
                            увеличение среднего чека и количества чеков в 2022–2024 годах.
                        </p>

                        <div className="chart">
                            <div className="chart-row">
                                <p className="chart-label">
                                    Количество чеков в заведениях общепита
                                </p>
                                <div className="chart-bar">
                                    <div className="bar-light"></div>
                                    <div className="bar-dark"></div>
                                </div>
                            </div>

                            <div className="chart-row">
                                <p className="chart-label">Транзакции в барах</p>
                                <div className="chart-bar">
                                    <div className="bar-light"></div>
                                    <div className="bar-dark"></div>
                                </div>
                            </div>

                            <div className="chart-row">
                                <p className="chart-label">Транзакции в заведениях фастфуда</p>
                                <div className="chart-bar">
                                    <div className="bar-light"></div>
                                    <div className="bar-dark"></div>
                                </div>
                            </div>

                            <div className="chart-row">
                                <p className="chart-label">Транзакции в ресторанах и кафе</p>
                                <div className="chart-bar">
                                    <div className="bar-light"></div>
                                    <div className="bar-dark"></div>
                                </div>
                            </div>

                            <div className="chart-row">
                                <p className="chart-label">Доставка готовой еды</p>
                                <div className="chart-bar">
                                    <div className="bar-light"></div>
                                    <div className="bar-dark"></div>
                                </div>
                            </div>

                            <div className="chart-legend">
                                <div className="legend-item">
                                    <div className="dot-light"></div>
                                    <p>2023</p>
                                </div>
                                <div className="legend-item">
                                    <div className="dot-dark"></div>
                                    <p>2024</p>
                                </div>
                            </div>

                            <p className="chart-note">По данным «МТС банк» и YouDo</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about">
                <div className="container">
                    <h2 className="about-title">СУШИШОП — это качественный продукт и сервис</h2>

                    <div className="video">
                        <img src={videoPic} alt="" className="video-pic" />
                        <p className="video-note">Как работает Сушишоп (03:10)</p>
                    </div>

                    <h2 className="quote-title">Уверенный старт с франшизой СУШИШОП</h2>

                    <div className="quote-card">
                        <div className="card">
                            <img src={quoteMark} alt="" className="quote-mark" />

                            <p className="quote-text">
                                «Компания СУШИШОП обладает огромным багажом знаний о бизнесе и
                                занимает лидирующие позиции в сфере общественного питания.
                            </p>

                            <p className="quote-text">
                                И именно в этом мы эксперты. Мы делимся нашими знаниями с партнёрами
                                не только до, но и после старта бизнеса».
                            </p>

                            <div className="quote-author">
                                <img src={authorPhoto} alt="" className="author-photo" />
                                <div className="author-info">
                                    <p className="author-name">— Леонид Луговой</p>
                                    <p className="author-role">
                                        Директор по франчайзингу компании СУШИШОП
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="model">
                <div className="container">
                    <h2 className="model-title">
                        Бизнес-модель, рассчитанная на работу в разных условиях
                    </h2>

                    <p className="model-text">
                        Бизнес-модель СУШИШОП построена на реальных финансовых показателях
                        работающих магазинов. Мы собрали данные по выручкам, среднему чеку,
                        ежемесячным расходам со всех магазинов СУШИШОП и разработали финансовую
                        модель, способную работать в любом городе России и СНГ.
                    </p>

                    <p className="model-text">
                        Мы открываем СУШИШОП в малых городах, городах-миллионниках и даже за
                        границей. СУШИШОП успешно работает в двух странах — наша бизнес-модель
                        подходит для разных рынков.
                    </p>

                    <div className="model-card">
                        <div className="card">
                            <p className="model-number">173</p>
                            <p className="model-note">
                                Показатели стольких магазинов мы использовали при разработке
                                финансовой модели
                            </p>
                        </div>
                    </div>

                    <div className="map-cont">
                        <img src={mapPic} alt="" className="map-pic" />

                        <p className="map-note">СУШИШОПы на карте РФ</p>

                        <div className="map-dots">
                            <div className="dots">
                                <div className="map-dot-active"></div>
                                <div className="map-dot"></div>
                                <div className="map-dot"></div>
                                <div className="map-dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="plan">
                <div className="container">
                    <h2 className="plan-title">Бизнес-план на 2 года</h2>

                    <p className="plan-text">
                        Для каждого партнёра мы готовим план запуска, рассчитываем инвестиции, срок
                        окупаемости и будущую выручку на 2 года вперёд. Подробный индивидуальный
                        расчёт позволяет учитывать особенности локации и формата.
                    </p>

                    <button className="plan-button">
                        Получить финмодель
                        <img src={arrowIcon} alt="" className="button-arrow" />
                    </button>

                    <img src={tablePic} alt="" className="table-pic" />

                    <p className="table-note">
                        Пример расчёта с использованием финмодели СУШИШОП. Менеджер поможет
                        рассчитать бизнес-модель для вашего магазина
                    </p>

                    <div className="plan-card">
                        <div className="card">
                            <p className="plan-number">1580 рублей</p>
                            <p className="plan-note">
                                средний чек по всей сети. Основную часть заказов получаем онлайн —
                                через сайт и приложение
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="formats">
                <div className="container">
                    <h2 className="formats-title">Форматы СУШИШОП</h2>

                    <div className="format">
                        <img src={miniPic} alt="" className="format-pic" />

                        <div className="format-text">
                            <div className="format-name">
                                <p className="name">Мини</p>
                                <p className="tag">NEW</p>
                            </div>

                            <p className="format-desc">
                                Новый формат Mini для небольших помещений. Есть готовые магазины —
                                начать легко. С упором на доставку и самовывоз.
                            </p>

                            <div className="format-info">
                                <div className="info-item">
                                    <p className="info-label">Окупаемость</p>
                                    <p className="info-value">6–8 мес.</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-label">Инвестиции</p>
                                    <p className="info-value">от 1 000 000 ₽</p>
                                </div>
                            </div>

                            <button className="format-button">
                                Запросить условия
                                <img src={arrowIcon} alt="" className="button-arrow" />
                            </button>
                        </div>
                    </div>

                    <div className="format">
                        <img src={standartPic} alt="" className="format-pic" />

                        <div className="format-text">
                            <div className="format-name">
                                <p className="name">Стандарт</p>
                            </div>

                            <p className="format-desc">
                                Стандартный магазин с зоной ожидания для клиентов. Самый популярный
                                формат благодаря быстрой окупаемости.
                            </p>

                            <div className="format-info">
                                <div className="info-item">
                                    <p className="info-label">Окупаемость</p>
                                    <p className="info-value">9–10 мес.</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-label">Инвестиции</p>
                                    <p className="info-value">от 1 200 000 ₽</p>
                                </div>
                            </div>

                            <button className="format-button">
                                Запросить условия
                                <img src={arrowIcon} alt="" className="button-arrow" />
                            </button>
                        </div>
                    </div>

                    <div className="format">
                        <img src={barPic} alt="" className="format-pic" />

                        <div className="format-text">
                            <div className="format-name">
                                <p className="name">Суши-бар</p>
                            </div>

                            <p className="format-desc">
                                Суши-бар с посадочными местами для клиентов. Высокий средний чек и
                                выручка. Рассчитан на помещения с высоким пешеходным трафиком.
                            </p>

                            <div className="format-info">
                                <div className="info-item">
                                    <p className="info-label">Окупаемость</p>
                                    <p className="info-value">11–12 мес.</p>
                                </div>
                                <div className="info-item">
                                    <p className="info-label">Инвестиции</p>
                                    <p className="info-value">от 1 960 000 ₽</p>
                                </div>
                            </div>

                            <button className="format-button">
                                Запросить условия
                                <img src={arrowIcon} alt="" className="button-arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="teach">
                <div className="container">
                    <h2 className="teach-title">Обучение с учётом специфики общепита и СУШИШОП</h2>

                    <p className="teach-text">
                        Мы разработали бесплатный обучающий курс, первая часть которого проходит
                        дистанционно, вторая — в нашем учебном центре в Санкт-Петербурге. Обучение
                        длится 20 дней и включает в себя теоретический и практический блоки.
                    </p>

                    <div className="theory">
                        <div className="card">
                            <p className="theory-title">Теория без «воды»</p>

                            <p className="theory-text">
                                Теоретический курс ведут специалисты нашей компании:
                                бухгалтер-экономист, юрист, руководитель отдела контроля качества,
                                маркетологи и другие. На лекциях — никакой «воды». Вы получите
                                только актуальную информацию: как увеличить доходную часть,
                                уменьшить издержки и избежать краж среди сотрудников, как
                                соответствовать всем санитарным нормам и правильно вести
                                документооборот, как находить и обучать персонал и многое другое.
                            </p>

                            <p className="theory-text">
                                Информация из курса будет доступна и после его прохождения — в Базе
                                знаний СУШИШОП. База знаний — это ресурс, доступный только франчайзи
                                нашей компании, где вы всегда сможете найти нужную информацию, если
                                что-то забыли.
                            </p>

                            <div className="theory-questions">
                                <div className="question">
                                    <p className="question-label">►</p>
                                    <p className="question-text">
                                        На что обратить внимание в договоре аренды?
                                    </p>
                                </div>

                                <div className="question">
                                    <p className="question-label">►</p>
                                    <p className="question-text">
                                        Как избежать хищений недобросовестными сотрудниками?
                                    </p>
                                </div>

                                <div className="question">
                                    <p className="question-label">►</p>
                                    <p className="question-text">
                                        Как всегда быть готовым к санитарной проверке?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="days">
                        <div className="card">
                            <p className="days-number">20 дней</p>
                            <p className="days-note">
                                длится очное и заочное обучение нового франчайзи
                            </p>
                        </div>
                    </div>

                    <div className="practice">
                        <div className="card">
                            <p className="practice-title">Практика в действующем магазине</p>

                            <p className="practice-text">
                                Практика проходит в действующем магазине СУШИШОП. Студенты-франчайзи
                                проходят курс молодого бойца «от повара до директора магазина»:
                                учатся принимать заказы реальных клиентов и готовить роллы и сашими,
                                планировать расходы и доходы, а также мотивировать персонал. Это
                                самый эффективный способ погрузиться в специфику ниши.
                            </p>

                            <p className="practice-text">
                                Вы не только увидите все процессы изнутри, но и освоите важный навык
                                — умение заменить любого сотрудника своего магазина СУШИШОП.
                            </p>

                            <p className="practice-text">
                                Наши франчайзи становятся профессионалами общепита — примерно треть
                                из них уже открыли больше двух торговых точек.
                            </p>

                            <img src={studyPic} alt="" className="practice-pic" />

                            <p className="practice-note">
                                В процессе обучения каждого студента страхует наставник. Первый ролл
                                редко выходит комом
                            </p>

                            <button className="practice-button">
                                Программа обучения
                                <img src={arrowIcon} alt="" className="button-arrow" />
                            </button>
                        </div>
                    </div>

                    <div className="shops">
                        <div className="card">
                            <p className="shops-number">11 магазинов</p>
                            <p className="shops-note">
                                под началом одного франчайзи-партнёра — наш абсолютный рекорд.
                                Половина всех партнёров открывают 2 и более магазинов
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="support">
                <div className="container">
                    <h2 className="support-title">Поддержка до и после запуска</h2>

                    <p className="support-text">
                        Перед запуском каждого магазина СУШИШОП мы помогаем партнёру правильно
                        оценить регион и понять потенциальную и доступную ёмкость рынка.
                    </p>

                    <div className="room-card">
                        <div className="room-inner">
                            <p className="room-title">
                                Помещение нового СУШИШОП: помощь в выборе, оформление договора и
                                дизайн-проект
                            </p>

                            <p className="room-text">
                                Даём инструкции по выбору помещения, анализируем варианты вместе с
                                франчайзи-партнёром. В каждом городе найдётся место для вашего
                                СУШИШОП.
                            </p>

                            <img src={zonesPic} alt="" className="room-pic" />

                            <p className="room-note">Зоны доставки в Москве</p>

                            <div className="room-dots">
                                <div className="dots">
                                    <div className="dot-active"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                            </div>

                            <p className="room-text">
                                Юридический отдел проверяет договоры аренды, заключённые
                                франчайзи-партнёром: никому не нужны неприятные сюрпризы в виде
                                ремонта за свой счёт или права досрочно расторгнуть договор в
                                одностороннем порядке.
                            </p>

                            <p className="room-text">
                                Наш дизайнер разрабатывает индивидуальный дизайн-проект помещения —
                                это входит в паушальный взнос. Оцениваем смету и помогаем выбрать
                                подрядчика для ремонта согласно дизайн-проекту.
                            </p>

                            <img src={projectPic} alt="" className="room-pic" />

                            <p className="room-note">Пример проекта СУШИШОП для Казани</p>
                        </div>
                    </div>

                    <div className="percent-card">
                        <div className="percent-inner">
                            <p className="percent-number">20%</p>
                            <p className="percent-note">
                                бюджета на ремонт поможет сэкономить дизайн-проект
                            </p>
                        </div>
                    </div>

                    <div className="suppliers-card">
                        <div className="suppliers-inner">
                            <p className="suppliers-title">
                                Выбор поставщиков оборудования и продуктов
                            </p>

                            <p className="suppliers-text">
                                Мы не ограничиваем партнёров в выборе поставщиков и не принуждаем к
                                покупке оборудования или мебели через нашу компанию.
                            </p>

                            <p className="suppliers-text">
                                Наша задача — только рекомендовать проверенные нами бренды. Всю
                                мебель и профессиональную технику можно заказать у любого
                                поставщика, который вы выберете сами. Просто соблюдайте
                                рекомендованные технические требования и стандарты.
                            </p>

                            <p className="suppliers-text">
                                С поиском поставщиков продуктов мы тоже помогаем: вместе изучаем
                                локальный рынок и выбираем лучших. Мы уже нашли креветки в Великом
                                Новгороде, водоросли в Иркутске и рис в Беларуси.
                            </p>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-inner">
                            <p className="team-title">Помощь в создании надёжной команды</p>

                            <p className="team-text">
                                Мы поможем подобрать и обучить персонал: размещаем вакансии на свои
                                ресурсы, составляем список вопросов для соискателей, обучаем
                                принципам собеседования. Поможем выбрать наиболее подходящих
                                кандидатов и выстраивать отношения внутри команды.
                            </p>
                        </div>
                    </div>

                    <div className="software-card">
                        <div className="software-inner">
                            <p className="software-title">
                                Установка и настройка программного обеспечения
                            </p>

                            <p className="software-text">
                                Во всех магазинах сети используется программа r-keeper. Она
                                неоднократно признавалась лучшим ПО для предприятий общественного
                                питания.
                            </p>

                            <p className="software-text">
                                Учение работать в r-keeper — обязательный навык для наших франчайзи,
                                освоению этого ПО посвящён отдельный блок в учебном курсе.
                            </p>

                            <img src={kLenorPic} alt="" className="software-pic" />

                            <p className="software-note">R-keeper в СУШИШОП</p>
                        </div>
                    </div>

                    <div className="open-card">
                        <div className="open-inner">
                            <p className="open-title">Помощь в подготовке к открытию</p>

                            <p className="open-text">
                                За несколько дней до официального запуска мы берёмся за будущий
                                магазин СУШИШОП вплотную: команда открытия приезжает на место, чтобы
                                обучить персонал и помочь партнёру подготовить магазин к встрече
                                первых гостей.
                            </p>

                            <p className="open-text">
                                На открытии всегда присутствуют наши специалисты: они помогают
                                справляться с непредвиденными ситуациями, корректируют работу
                                сотрудников, в том числе и с гостями.
                            </p>

                            <img src={openPic} alt="" className="open-pic" />

                            <p className="open-note">Открытие нового СУШИШОП</p>
                        </div>
                    </div>

                    <div className="percent-card-two">
                        <div className="percent-inner-two">
                            <p className="percent-number-two">90%</p>
                            <p className="percent-note-two">
                                непредвиденных ситуаций происходит в день запуска бизнеса. С ними
                                помогает справляться специальная команда открытия
                            </p>
                        </div>
                    </div>

                    <div className="after-card">
                        <div className="after-inner">
                            <p className="after-title">Поддержка после запуска</p>

                            <p className="after-text">
                                С первого дня сотрудничества за каждым франчайзи закрепляется
                                персональный менеджер поддержки. С ним можно связаться по телефону,
                                электронной почте или через мессенджер и получить помощь в любой
                                непонятной ситуации. Например, если партнёр решит сменить локацию,
                                мы поможем с переездом.
                            </p>

                            <p className="after-text">
                                В самых запущенных случаях к делу подключаются топ-менеджеры
                                компании. Наши франчайзи знают, что неразрешимых проблем не бывает.
                            </p>
                        </div>
                    </div>

                    <div className="always-card">
                        <div className="always-inner">
                            <p className="always-number">всегда</p>
                            <p className="always-note">
                                остаемся с франчайзи на протяжении всей работы магазина. Так
                                работают только 20% франшиз на рынке
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="promo">
                <div className="container">
                    <h2 className="promo-title">Помощь в продвижении магазина</h2>

                    <p className="promo-text">
                        Наш отдел маркетинга готовит для каждого магазина маркетинговые
                        рекомендации: какие акции и когда запускать, через какие каналы
                        рекламировать магазин.
                    </p>

                    <p className="promo-text">
                        Мы разрабатываем материалы для решения различных задач отдельных магазинов:
                        повышение среднего чека, привлечение новых гостей или увеличение количества
                        повторных продаж.
                    </p>

                    <p className="promo-text">
                        Каждый месяц мы запускаем новые акции для увеличения оборота каждого
                        франчайзи и всей сети. Наши франчайзи проводят в своих магазинах локальные
                        кампании, которые позволяют учитывать особенности локации или целевой
                        аудитории.
                    </p>

                    <div className="promo-card">
                        <div className="promo-inner">
                            <img src={promoPic} alt="" className="promo-pic" />

                            <p className="promo-note">Акции 2024 года</p>

                            <div className="promo-dots">
                                <div className="dots">
                                    <div className="dot-active"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="menu-title">Новое меню раз в сезон</p>

                    <p className="menu-text">
                        Каждый сезон мы разрабатываем новое меню, учитывая современные тренды,
                        пожелания наших гостей и партнёров, а также рентабельность каждой позиции.
                    </p>

                    <img src={menuPic} alt="" className="menu-pic" />

                    <p className="menu-note">Меню года</p>

                    <div className="season-card">
                        <div className="season-inner">
                            <p className="season-number">4 раза в год</p>
                            <p className="season-note">
                                выходит сезонное меню. Основное меню изменяется 1–2 раза в год
                            </p>
                        </div>
                    </div>

                    <p className="brand-title">Общее продвижение бренда</p>

                    <p className="brand-text">
                        Мы продвигаем наш бренд в соцсетях: рассказываем о нашем меню, проводим
                        конкурсы, дарим подарки, чтобы в каждый СУШИШОП приходило ещё больше гостей.
                    </p>

                    <img src={socialPic} alt="" className="social-pic" />

                    <p className="brand-text">
                        Мы постоянно улучшаем сайт и мобильное приложение СУШИШОП для привлечения
                        клиентов и оптимизации процесса онлайн-заказа.
                    </p>

                    <div className="app-card">
                        <div className="app-inner">
                            <img src={appPic} alt="" className="app-pic" />

                            <p className="app-note">Наш сайт и приложение</p>

                            <div className="stores">
                                <img src={googlePlay} alt="" className="store" />
                                <img src={appStore} alt="" className="store" />
                            </div>
                        </div>
                    </div>

                    <div className="guests-card">
                        <div className="guests-inner">
                            <p className="guests-number">6000</p>
                            <p className="guests-note">
                                посетителей в день проходят через сайт и мобильное приложение
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="reviews">
                <div className="container">
                    <h2 className="reviews-title">Отзывы франчайзи</h2>

                    <p className="reviews-text">
                        Перед запуском каждого магазина СУШИШОП мы помогаем партнёру правильно
                        оценить регион и понять потенциальную и доступную ёмкость рынка.
                    </p>

                    <div className="reviews-top">
                        <div className="review-card">
                            <div className="review-inner">
                                <img src={reviewOne} alt="" className="review-pic" />
                                <div className="review-post">
                                    <p className="review-title">
                                        «Франшиза позволяет дать быстрый старт»
                                    </p>
                                    <p className="review-author">— Виктор Комаров, Москва</p>
                                    <p className="review-count">1 магазин</p>
                                </div>
                            </div>
                        </div>

                        <div className="review-card">
                            <div className="review-inner">
                                <img src={reviewTwo} alt="" className="review-pic" />
                                <div className="review-post">
                                    <p className="review-title">
                                        «Я остановился на Сушишопе и нисколько не жалею»
                                    </p>
                                    <p className="review-author">— Егор Авдеев, Санкт-Петербург</p>
                                    <p className="review-count">1 магазин</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="reviews-bottom">
                        <div className="review-card">
                            <div className="review-inner">
                                <img src={reviewThree} alt="" className="review-pic" />
                                <div className="review-post">
                                    <p className="review-title">
                                        «Решили открыть бизнес в другой сфере деятельности, которая
                                        выживает в кризисные времена»
                                    </p>
                                    <p className="review-author">
                                        — Тимур и Максим Воронцовы, Москва
                                    </p>
                                    <p className="review-count">1 магазин</p>
                                </div>
                            </div>
                        </div>

                        <div className="review-card">
                            <div className="review-inner">
                                <img src={reviewFour} alt="" className="review-pic" />
                                <div className="review-post">
                                    <p className="review-title">
                                        «Самое главное — не бояться трудностей»
                                    </p>
                                    <p className="review-author">— Виктор Комаров, Москва</p>
                                    <p className="review-count">1 магазин</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="reviews-link">
                        <p className="link-text">Смотреть все отзывы</p>
                        <img src={arrowDown} alt="" className="link-arrow" />
                    </div>
                </div>
            </section>

            <section className="faq">
                <div className="container">
                    <h2 className="faq-title">Вопрос-ответ</h2>
                    <p className="group">Общие вопросы</p>

                    <div className="faq-group">
                        <p className="faq-question">Что входит в паушальный взнос?</p>
                        <div className="faq-line"></div>

                        <p className="faq-question faq-question-active">Что входит в роялти?</p>
                        <div className="faq-line faq-line-active"></div>

                        <p className="faq-answer">
                            Роялти — это ежемесячная плата за аренду торгового знака, поддержку,
                            консультирование и обновление базы знаний
                        </p>
                        <div className="faq-line"></div>

                        <p className="faq-question">Почему роялти фиксированное?</p>
                        <div className="faq-line"></div>

                        <p className="faq-question">Почему предусмотрены отступные?</p>
                        <div className="faq-line"></div>

                        <p className="faq-question">Возможен ли эксклюзив на город/регион?</p>
                        <div className="faq-line"></div>

                        <p className="faq-question">
                            Можно ли посетить вашу точку и пообщаться с действующими партнерами?
                        </p>
                        <div className="faq-line"></div>

                        <p className="faq-question">Вы поможете с подбором помещения?</p>
                        <div className="faq-line"></div>
                    </div>

                    <p className="faq-group-two">Маркетинг</p>
                    <div className="faq-line"></div>

                    <p className="faq-group-two">До открытия</p>
                    <div className="faq-line"></div>

                    <p className="faq-group-two">После открытия</p>
                    <div className="faq-line"></div>

                    <p className="faq-group-two">О продукте</p>
                    <div className="faq-line"></div>
                </div>
            </section>

            <section className="footer">
                <div className="footer-top">
                    <p className="footer-title">
                        Откройте свой бизнес при поддержке экспертов СУШИШОП
                    </p>

                    <button className="footer-button">
                        Оставить заявку
                        <img src={arrowIcon} alt="" className="button-arrow" />
                    </button>
                </div>

                <div className="footer-line"></div>

                <div className="footer-bottom">
                    <p className="footer-copy">
                        © 2012 – 2024 Сеть магазинов СУШИШОП. Все права защищены.
                    </p>

                    <div className="footer-center">
                        <div className="footer-socials">
                            <a href="#" className="footer-circle">
                                <img src={iconVk} alt="" />
                            </a>
                            <a href="#" className="footer-circle">
                                <img src={iconYoutube} alt="" />
                            </a>
                            <a href="#" className="footer-circle">
                                <img src={iconMail} alt="" />
                            </a>
                            <a href="#" className="footer-circle">
                                <img src={iconPhone} alt="" />
                            </a>
                        </div>

                        <p className="footer-policy">Политика конфиденциальности</p>
                    </div>

                    <p className="footer-made">Сделано в PROFITKIT</p>
                </div>
            </section>
        </div>
    );
}

export default App;
