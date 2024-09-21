import "./landing.css";

function Landing(){
    return(
        <>
         <section>
            <div className="landing">
                <div className="landing-content">
                    <h1>Medical and Clinical Center</h1>
                    <p>Our mission is to provide healthcare for all. We are committed to providing quality healthcare services to all our patients.</p>
                    <div className="btn-area">
                      <button>Join Us</button>
                      <button>Learn More</button>
                    </div>
                </div>
                <div className="designs">
                    <div className="plus-sign">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                    <div className="medicine">
                      <i className="fa-solid fa-user-doctor"></i>
                    </div>
                    <div className="syrinje">
                      <i className="fa-solid fa-syringe"></i>
                    </div>
                    <div className="heart">
                      <i className="fa-solid fa-heart-pulse"></i>
                    </div>
                    <div className="circles">
                    <i className="fa-regular fa-circle"></i>
                    </div>
                    <div className="cross">
                       <ion-icon name="apps"></ion-icon>                    </div>
                    <div className="subset-circle">
                      <ion-icon name="contrast"></ion-icon>
                    </div>
                    
                </div>
            </div>
         </section>
        
        </>
    )
}

export default Landing