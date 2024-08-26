import "./HomePageInformation.css";
export default function HomePageInformation(){
    return(
        <div className=" bgcolor d-flex flex-column px-5 py-5 gap-4 mt-5">
            <div className=" d-flex flex-wrap justify-content-between px-5" >
                <div className=" h-50 w-50 col-md-6 col-12 ">
                <h3 className="py-3">How does innovation play a role in the success of startups?</h3>
                <h5>Startups contribute to economic growth by creating jobs, driving innovation, attracting investment, disrupting industries, and fostering a culture of entrepreneurship. They play a vital role in stimulating economic activity and promoting economic development.</h5>
                </div>
                <div> <img src="./startup.jfif" className=" mt-4 border rounded-5 border-white "></img></div>
            </div>
            <hr></hr>
            <div className=" d-flex flex-wrap flex-row justify-content-between px-5">
                <div> <img src="./innovation1.jpg" className=" mt-5 border rounded-5 border-white "></img></div>
                <div className=" h-50 w-50  col-md-6 col-12 " >
                <h3 className="py-3">What is IPR?</h3>
                <h5>IPR is crucial for startups to attract investment, license technology, negotiate favorable deals, and prevent competitors from copying their ideas. Gujarat has taken steps to support IPR protection for startups, but challenges remain. To further support startups, it is essential to raise awareness about IPR, provide affordable services, strengthen enforcement, and foster a culture of innovation.</h5>
                </div>
               
            </div>
            <hr></hr>
            <div className=" d-flex flex-wrap flex-row justify-content-between px-5 ">
                <div className=" h-50 w-50  col-md-6 col-12 ">
                <h3 className="py-3">Importance of investment</h3>
                <h5>Investment is crucial for supporting research, IPR, innovation, and startups in Gujarat. By providing financial resources, investors can help these initiatives to grow and develop. Gujarat has taken steps to attract investment, but challenges remain. To further encourage investment, it is essential to create a favorable climate, raise awareness, provide support, and foster a culture of risk-taking.</h5>
                </div>
                <div> <img src="./investment.jfif" className=" mt-5 border rounded-5 border-white "></img></div>
            </div>  
            <hr></hr>
        </div>
    )
}