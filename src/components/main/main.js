import './main.css'
import { useTranslation } from 'react-i18next';



function Main() {
    const { t, i18n } = useTranslation();



    return (
      <main className='main-content'>
          <section className='benefits'>
              <div className='wrapper'>
                  <h2 className='benefits-title'>
                      {t('description.main0')}
                  </h2>

                  <div className='benefits-items-container'>

                      <div className='benefit-item'>
                          <img src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/aa41cf3f-2b37-42c4-92f0-4fd4b34a0512.png" alt=""/>
                          <p>{t('description.main1')}</p>
                      </div>

                      <div className='benefit-item'>
                          <img src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/77f07343-8fa9-4daa-b029-f61de096d36f.png" alt=""/>
                          <p>{t('description.main2')}</p>
                      </div>

                      <div className='benefit-item'>
                          <img src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/ee9eae01-6884-4f62-9613-9b2d2c4eae98.png" alt=""/>
                          <p>{t('description.main3')}</p>
                      </div>

                      <div className='benefit-item'>
                          <img src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/86e22521-f235-4dbb-b3bb-963cb187d94c.png" alt=""/>
                          <p>{t('description.main4')}</p>
                      </div>

                  </div>
              </div>
          </section>
      </main>
    );
}


export default Main;