import custsatisfaction from 'assets/customer-satisfaction.png'
import quality from 'assets/shield.png'
import values from 'assets/values.png'

function CoreValues() {
  return (
    <>
      {/* core values section */}
      <div className="container col-xxl-8 px-4 py-5" id="corevalues">
        <div className="row g-5">
          <div className="col-md-3">
            <h4>
              <span className="underline-blue">Core Values</span>
            </h4>
          </div>

          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4">
                <img src={quality} className="img-fluid p-5" alt="Commitment to Quality" />
                <h5>Commitment to Quality</h5>
                <p>We are not creating a perfect software, but we will do our best to deliver high quality code that can be used for a long-term period.</p>
              </div>

              <div className="col-md-4">
                <img src={custsatisfaction} className="img-fluid p-5" alt="Customer Centric Approach" />
                <h5>Customer Centric Approach</h5>
                <p>Our strategy in developing software is to understand the needs, wants and pain points of the customer. We expect our target market can use our product to satisfy their need, want and pain.</p>
              </div>

              <div className="col-md-4">
                <img src={values} className="img-fluid p-5" alt="Focus on Business Value" />
                <h5>Focus on Business Value</h5>
                <p>Priority management is very important in every business. We collaborate with product and business team to prioritize on projects and tasks that bring the maximum value for your business.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default CoreValues;