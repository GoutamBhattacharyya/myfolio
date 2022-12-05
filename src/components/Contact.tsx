import React from "react";

interface FormProps {
    name?:  string;
    fields: any;
    error:  any;
}

class ContactForm extends React.Component<{},FormProps> {    
    constructor(props:any){
        super(props);
        this.state = {
            fields:{},
            error:{}
        }
        this.submitRegistration = this.submitRegistration.bind(this);
        this.handelChange = this.handelChange.bind(this);
    }
    validForm():any {
        let fields:any = this.state.fields;
        let error:any = {};
        let formValid:boolean = true;
        if(!fields["username"]){
            formValid = false;
            error["username"] = "please enter your user name";
            alert("kkkk")
        }
        this.setState({error:error});
        return(formValid);
    }
    submitRegistration(e:any){
        e.preventDefault();
        if(this.validForm()){
            let fields:any = {};
            fields["username"] = "";
            this.setState({fields:fields});
            alert(this.state.fields.username)
            
        }        
    }
    handelChange(e:any){
        const fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({fields});
    }
    render(): React.ReactNode {
        return (
            <div className="myfolio-contact-section">
                <form onSubmit={this.submitRegistration} method="post">
                    <fieldset>
                        <input type="text" name="username" placeholder="Name" value={this.state.fields.username} onChange={this.handelChange} />
                        <div className={`"myfolio-error ${this.state.error.username!==undefined?"-show":""}`}>{this.state.error.username}</div>
                    </fieldset>
                    <fieldset>
                        <input type="email" placeholder="Email" />
                    </fieldset>
                    <fieldset>
                        <textarea placeholder="Write Your Requirment" />
                    </fieldset>
                    <input type={"submit"} className="myfolio-btn" />
                </form>
            </div>
        );
        
    }
    
};

export default ContactForm;