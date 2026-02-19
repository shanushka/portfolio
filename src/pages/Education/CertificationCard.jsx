import {asset} from "../../utils/path";
function CertificationCard(props) {

    return (
        <div className="certification-card" onClick={() => {window.open(props.certification.url, "_blank")}}>
            <div className="education-card-title">{props.certification.title}</div>
            <img src={asset("GoogleAIEssentialCertificate.png")}></img>
        </div>
    )

}

export default CertificationCard