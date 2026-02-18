import SkillBlock from "./SkillBlock";
import SkillSection from "./SkillSection";

import './Skills.css';

function Skill(props) {

    const keys = ['Frontend', 'Backend', 'Database', 'DevOps/OS' , 'AI Tools', 'Other' ]
    return (
        <div ref = {props.skillRef} className="page-column skills-section" id="section-skills">
            <div className="page-column-header">
                Skills     
       
            </div>
            <div className="skills-section-body">
                <SkillSection title="Frontend">
                    <SkillBlock logoUrl="/portfolio/Logo/javascript.png"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/bootstrap.png"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/reactLogo.svg" title="React"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/typescriptLogo.svg" title="Typescript"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/cssLogo.svg" title="CSS"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/angular.png" title="Angular"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/blazor.png" title="Blazor"></SkillBlock>
                </SkillSection>
                <SkillSection title="Backend">
                    <SkillBlock logoUrl="/portfolio/Logo/nodejs.png"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/pythonLogo.svg" title="Python"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/flask.png" title="Flask"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/go.png" title="GoLang"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/net.png"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/django.png" title="Django"></SkillBlock>
                </SkillSection>
                <SkillSection title="Database">
                    <SkillBlock logoUrl="/portfolio/Logo/mysql.png"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/postgres.png"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/mongodb.png"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/redis.png"></SkillBlock>
                </SkillSection>
                <SkillSection title="Cloud & Tools">
                    <SkillBlock logoUrl="/portfolio/Logo/gitLogo.svg" title="Git"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/docker.png"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/jira.png" title="Jira"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/figma.png" title="Figma"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/aws.png"></SkillBlock>
                    <SkillBlock logoUrl="/portfolio/Logo/azure.png" title="Azure"></SkillBlock>
                </SkillSection>
            </div>
        </div>
    )

}

export default Skill