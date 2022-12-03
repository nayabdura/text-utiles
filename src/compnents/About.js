import React from 'react'

function About(props) {
    return (
        <>
            <div className="container ml-8 " style ={{color : props.mode ==='light'?'black':'white'} }>
                <h1>  About App  </h1>
            </div>
            <div className="container mb-3">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>This Text Manipulating App is Developed by Inceptious Tecnologies.Inceptious Tech is a small firm founded in 2017 with a team of technologists and innovators. We have extensive experience designing, building and supporting rich interactive applications that engage customers and transform business processes. We are experts at designing intuitive interfaces to allow end-users the ability to rapidly make critical decisions about insights gained from data.Our mission is to deliver exceptional customer care so you don't have to worry about your car's performance. Our engineers are available 24/7 for any of your questions and concerns!,We specialize in creating beautiful, engaging and measurable products for your company to use internally and externally. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About