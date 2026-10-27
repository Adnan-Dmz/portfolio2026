import { useContext } from "react"
import { StyleContext } from "../usehook/createcontext"
import "./style/Project.css"
import imgManageTicket from "../icon/ManageTicket-Half.png"
import logoLink from "../icon/logoLink.svg"
import logoGithub from "../icon/logoGithub.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Project = () => {
    const { isPersian, isLight } = useContext(StyleContext)
    return (
        <div className="pro" >
            <div className={`div-project ${isLight ? "div-projectlight" : "div-projectdark"}`}>
                <div>
                    <div>
                        <img className={`img-manageticket ${isLight ? "img-manageticketlight" : "img-manageticketdark"}`} src={imgManageTicket} alt="" />
                    </div>
                    <div className="aboutproject">
                        <h3 className={`title-projectticket ${isLight ? "title-projectticketlight" : "title-projectticketdark"}`}>{isPersian ? "داشبورد مدریت تیکت ها" : "Ticket Management Dashboard"}</h3>
                        <p className={`p-titleticket ${isLight ? "p-titleticketlight" : "p-titleticketdark"}`}>{isPersian ? "یک داشبورد مدریت تیکت با React, شامل مدریت تیکت ها,اطلاعات مشتری ها" : "A React-based dashboard for managong support ticket, customer information"}</p>
                        <div className="useSkills">
                            <span className={`span-skillticket ${isLight ? "span-skillticketlight" : "span-skillticketdark"}`}>React Router</span>
                            <span className={`span-skillticket ${isLight ? "span-skillticketlight" : "span-skillticketdark"}`}>CSS3</span>
                            <span className={`span-skillticket ${isLight ? "span-skillticketlight" : "span-skillticketdark"}`}>JavaScript</span>
                            <span className={`span-skillticket ${isLight ? "span-skillticketlight" : "span-skillticketdark"}`}>React</span>
                            <span className={`span-skillticket ${isLight ? "span-skillticketlight" : "span-skillticketdark"}`}>LocalStorage</span>
                            <span className={`span-skillticket ${isLight ? "span-skillticketlight" : "span-skillticketdark"}`}>Context API</span>
                        </div>
                    </div>
                </div>
                <div className="btn-showprojectticket">
                    <button onClick={() => {
                        window.location.href = "https://adnan-dmz.github.io/supporthub/"
                    }} className={`btn-livedemo ${isLight ? "btn-livedemolight" : "btn-livedemodark"}`}>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        <p>{isPersian ? "مشاهده انلاین" : "Live Demo"}</p>
                    </button>
                    <button onClick={() => {
                        window.location.href = "https://github.com/Adnan-Dmz/supporthub.git"
                    }} className={`btn-githun ${isLight ? "btn-githunlight" : "btn-githundark"}`}>
                        <FontAwesomeIcon icon={faGithub} />
                        <p>{isPersian ? "گیت هاب" : "GitHub"}</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Project