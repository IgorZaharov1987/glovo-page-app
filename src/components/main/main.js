import './main.css'

function Main() {
    return (
      <main className='main-content'>
          <section className='benefits'>
              <div className='wrapper'>
                  <h2 className='benefits-title' >
                      BENEFITS OF WORKING WITH GLOVO:
                  </h2>

                  <div className='benefits-items-container'>

                      <div className='benefit-item'>
                          <img src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/aa41cf3f-2b37-42c4-92f0-4fd4b34a0512.png" alt=""/>
                          <p>Monitor your orders from preparation to delivery</p>
                      </div>

                      <div className='benefit-item'>
                          <img src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/77f07343-8fa9-4daa-b029-f61de096d36f.png" alt=""/>
                          <p>Grow your brand, thanks to our database of millions of users.</p>
                      </div>

                      <div className='benefit-item'>
                          <img src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/ee9eae01-6884-4f62-9613-9b2d2c4eae98.png" alt=""/>
                          <p>Improve your sales and increase profits</p>
                      </div>

                      <div className='benefit-item'>
                          <img src="https://image.partner.glovoapp.com/lib/fe4511707564057d751573/m/1/86e22521-f235-4dbb-b3bb-963cb187d94c.png" alt=""/>
                          <p>Deliver your orders quickly and easily: within 30 minutes, every day of the year, 24 hours a day.</p>
                      </div>

                  </div>
              </div>
          </section>
      </main>
    );
}


export default Main;