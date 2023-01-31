import {Component} from "react";
import "./logo-skill.less"

export default class LogoSkill extends Component {
    render() {
        return (
            <div className={"left-box"}>
                <div className={"box-content"} >
                    <div className={"logo-number"}>9</div>

                    <div className={"logo-info"}>
                        <div>
                            展示 <br/> 技能熟练度 <br/> &nbsp;
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}