import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{
    return(
        <div className="user-card">
            <h1>About</h1>
            <h2> This is my Learn React About Page</h2>
            
            <UserClass name ={"Kiran Tayade (Class)"} location={"Pune Class"} contact ={"L042269 Class"}/>
        </div>
        
    )
}

export default About;