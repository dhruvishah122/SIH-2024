import './IPRServices.css'
export default function IPRservices() {
    return (
        <div >
            <div className="titlee">IPR Services</div>
            <div className=" bgcolorr d-flex flex-column px-5 py-5 gap-4 mt-2">
                <div className=" d-flex flex-wrap justify-content-between px-5">
                    <div className=" h-50 w-75 col-md-6 col-12 shadow">
                        <div className="investmentInfoo">
                            <h3 className="py-3">Patent Application Management</h3>
                        </div>
                        <div className="investmentInfoTitlee">
                            <h5>
                            Patent application management involves preparing and submitting a detailed patent application to secure protection for an invention. It includes conducting prior art searches, drafting the application, addressing any objections from the patent office, and tracking the application's progress. Effective management also involves handling post-grant maintenance and ensuring ongoing protection against infringement.
                            </h5>
                            <button type="button" class="btn btnn rounded-2">Know More</button>
                        </div>
                    </div>
                    <div>
                        {" "}
                      
                    </div>
                </div>
                <hr></hr>
                <div className=" d-flex flex-wrap flex-row justify-content-between px-5">
                    <div>
                        {" "}
                        <img src="./tradmark.jfif"
                       className="imggg border rounded-5 border-white  "
            ></img>
                    </div>
                    <div className=" h-50 w-75  col-md-6 col-12 shadow">
                        <div className="investmentInfoo">
                            <h3 className="py-3">Trademark Registration</h3>
                        </div>
                        <div className="investmentInfoTitlee">
                            <h5>
                            Trademark registration involves filing an application to officially protect a brand’s name, logo, or symbol. It includes conducting a search to ensure uniqueness, submitting the application, and undergoing examination and publication. Once approved, the trademark is registered, granting exclusive rights to the owner and requiring regular maintenance and renewal to stay active.
                            </h5>
                            <button type="button" class="btn btnn rounded-2">Know More</button>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className=" d-flex flex-wrap flex-row justify-content-between px-5 ">
                    <div className=" h-50 w-75  col-md-6 col-12 shadow">
                        <div className="investmentInfoo">
                            <h3 className="py-3">Copyright Protection</h3>
                        </div>
                        <div className="investmentInfoTitlee">
                            <h5>
                            Copyright protection grants creators exclusive rights to their original works, such as literary, artistic, or musical creations. It automatically applies upon the creation of the work and covers the right to reproduce, distribute, perform, and display the work. Registration with a copyright office is not required but provides legal benefits, such as the ability to sue for statutory damages and attorney fees. Copyright protection lasts for the creator's lifetime plus an additional period (e.g., 70 years), after which the work enters the public domain.
                            </h5>
                            <button type="button" class="btn btnn rounded-2">Know More</button>
                        </div>
                    </div>
                    <div>
                        {" "}
                        {/* <img
              src="./researchImage-3.jpg"
              className="imggg border rounded-5 border-white "
            ></img> */}
                    </div>
                </div>
            <hr></hr>
            <div className=" d-flex flex-wrap flex-row justify-content-between px-5">
                    <div>
                        {" "}
                        <img
              src="./trade.jfif"
              className="imggg border rounded-5 border-white "
            ></img>
                    </div>
                    <div className=" h-50 w-75  col-md-6 col-12 shadow">
                        <div className="investmentInfoo">
                            <h3 className="py-3">Designs and Trade Secrets</h3>
                        </div>
                        <div className="investmentInfoTitlee">
                            <h5>
                            Designs protect the unique visual appearance of products through registration, granting exclusive rights for a specified period, often up to 15 years. Trade Secrets safeguard confidential business information, such as formulas or processes, through strict secrecy measures. This protection endures as long as the information remains confidential and valuable, with no set time limit.
                            </h5>
                            <button type="button" class="btn btnn rounded-2">Know More</button>
                        </div>
                    </div>
                </div>
                </div>
                <hr></hr>
        </div>

    )
}