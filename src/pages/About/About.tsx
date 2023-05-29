import './about-style.css';

const About = () => {
  return (
    <div className='about'>
      <div className="container">
        <section className="about-me">
          <h3 className="about__title">Обо мне</h3>
          <p className="about__text">Считаю необходимым заниматься тем, что интересно, это приоритетное условие, для того чтобы добиться высоких результатов и принести пользу для себя и других людей. Раньше я занимался эксплуатацией электрооборудования, но понял, что дальнейший рост по должности или в сфере мне не интересен, поэтому я начал искать новую сферу деятельности.</p>
          <p className="about__text">В течении 1,5 лет занимаюсь разработкой сайтов, очень нравится процесс написания (время пролетает, как мгновение), а также видеть прогресс в качестве кода или когда в прошлом трудные задачи становятся обычными.</p>
          <p className="about__text">Параллельно прохожу обучение в Нетологии на fullstack-разработчика JS / PHP.</p>
          <p className="about__text">Освоил JS/TS, но после работе с TypeScript, JavaScript выглядит подозрительно просто. Интересна работа с ReactJS, он экономит время и улучшает производительность, особенно понравилась в связке с Redux Toolkit, но как мне кажется в NextJS роутинг сильно удобнее и от этого еще интереснее.</p>
        </section>
        <section className="personality">
          <h3 className="about__title">Личностные качества</h3>
          <ul className="personality-list">
            <li className="personality-item">
              В связи с производственной необходимостью брал на себя дополнительный функционал
              по договорной деятельности, сметным расчетам и курирование складом переносного электроинструмента
            </li>
            <li className="personality-item">
              Способен выдерживать периоды интенсивной работы, за 1 месяц составил 13 комплектов договоров
              оказания услуг с составлением локальных сметных расчетов для дальнейшей их публикации
              на тендерной площадке
            </li>
            <li className="personality-item">
              Быстро осваиваю необходимые для работы навыки, за 2 недели освоил программу «ГРАНД-Смета»
              и правила составления смет на производство электромонтажных работ и включил их в свою работу
            </li>
            <li className="personality-item">
              Был назначен ответственным за устранение 37 замечаний Промышленной безопасности 
              Отдела главного энергетика и успешно справился с ними.
            </li>
          </ul>
        </section>
        <section className="job">
          <h3 className="about__title">Опыт работы</h3>
          <ul className="job-list">
            <li className="job-item">
              <p className='job__position'>Инженер по организации эксплуатации и ремонту, ООО "Свод Интернешнл"</p>
              <ul>
                <li>Управление персоналом по пяти основным направлениям (эксплуатация ДЭС, ИБП, ТП, КЛ и наружнее освещение)</li>
                <li>Восстановил работоспособность топливного резервуара РГСД-100</li>
                <li>Внедрил и обосновал необходимость массого использования услуг подрядных организаций, 
                  в свзи с чем была налажена квалифицированная эксплуатация оборудования
                </li>
                <li>
                  В связи с большим количеством технологичного оборудования я проявил инициативу 
                  и взял на себя функцию составления и ведения договоров в отделе главного энергетика по ремонту 
                  оборудования и успешно провел работы более чем по 50 договорам
                </li>
                <li>Период работы: с 2017г. по 2022г.</li>
              </ul>
            </li>
            <li className="job-item">
              <p className='job__position'>Инженер-энергетик, ПАО "МТС"</p>
              <ul>
                <li>Организация присоединения новых базовых станций к электросетям</li>
                <li>Контроль проектной документации</li>
                <li>Период работы: с 2015г. по 2017г</li>
              </ul>
            </li>
            <li className="job-item">
              <p className='job__position'>Ведущий специалист, ООО "ИТС"</p>
              <ul>
                <li>Организация работ по наладке электрооборудования объекта "Крытый конькобежный центр" для проведения ОИ-2014</li>
                <li>Управление персоналом по эксплуатации электрооборудования</li>
                <li>Период работы: с 2012г. по 2014г.</li>
              </ul>
            </li>
            <li className="job-item">
              <p className='job__position'>Электромеханик контактной сети, ПАО "РЖД"</p>
              <span>Период работы: с 2007г. по 2012г.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default About