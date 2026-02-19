import SkillBlock from "./SkillBlock";
import SkillSection from "./SkillSection";

import './Skills.css';
import { asset } from "../../utils/path";


function Skill(props) {

    const keys = ['Frontend', 'Backend', 'Database', 'DevOps/OS' , 'AI Tools', 'Other' ]
    return (
        <div ref = {props.skillRef} className="page-column skills-section" id="section-skills">
            <div className="page-column-header">
                Skills     
       
            </div>
            <div className="skills-section-body">
                <SkillSection title="Frontend">
                    <SkillBlock logoUrl={asset("Logo/javascript.png")}></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/bootstrap.png")}></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/reactLogo.svg")} title="React"></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/typescriptLogo.svg")} title="Typescript"></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/cssLogo.svg")} title="CSS"></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/htmlLogo.svg")} title="Html"></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/angular.png")}title="Angular"></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/blazor.png")}title="Blazor"></SkillBlock>
                </SkillSection>
                <SkillSection title="Backend">
                    <SkillBlock logoUrl={asset("Logo/nodejs.png")}></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/pythonLogo.svg")} title="Python"></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/flask.png")} title="Flask"></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/go.png")} title="GoLang"></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/net.png")}></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/django.png")} title="Django"></SkillBlock>
                </SkillSection>
                <SkillSection title="Database">
                    <SkillBlock logoUrl={asset("Logo/mysql.png")}></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/postgres.png")}></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/mongodb.png")}></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/redis.png")}></SkillBlock>
                </SkillSection>
                <SkillSection title="Cloud & Tools">
                    <SkillBlock logoUrl={asset("Logo/gitLogo.svg")} title="Git"></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/docker.png")}></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/jira.png")} title="Jira"></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/figma.png")} title="Figma"></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/aws.png")}></SkillBlock>
                    <SkillBlock logoUrl={asset("Logo/azure.png")} title="Azure"></SkillBlock>
                </SkillSection>
            </div>
        </div>
    )

}

export default Skill