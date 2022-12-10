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
        }
        if(typeof fields["username"] !=="undefined") {
            if(!fields["username"].match(/^[a-zA-Z]*$/)) {
                formValid = false;
                error["username"] = "please enter alphabet charectors";                
            }
        }
        if(!fields["email"]){
            formValid = false;
            error["email"] = "Please enter your email address";
        }
        if(typeof fields["email"] !=="undefined") {
            if(!fields["email"].match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                formValid = false;
                error["email"] = "Please enter a valid email";
            }
        }
        if(!fields["textarea"]){
            formValid = false;
            error["textarea"] = "Please add your comments";
        }
        this.setState({error:error});
        return(formValid);
    }
    submitRegistration(e:any){
        e.preventDefault();
        if(this.validForm()){
            let localObj:any = {};
            localObj["username"] = "";
            this.setState({fields:localObj});
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
                        <input type="text" name="username" placeholder="Name" value={this.state.fields.username} onChange= {this.handelChange} />
                        <span className="myfolio-error">{this.state.error.username}</span>
                    </fieldset>
                    <fieldset>
                        <input type="text" name="email" placeholder="Email" value={this.state.fields.email} onChange= {this.handelChange} />
                        <span className="myfolio-error">{this.state.error.email}</span>
                    </fieldset>
                    <fieldset>
                        <textarea name="textarea" placeholder="Write Your Requirment" value={this.state.fields.textarea} onChange={this.handelChange} />
                        <span className="myfolio-error">{this.state.error.textarea}</span>
                    </fieldset>
                    <input type={"submit"} className="myfolio-btn" />
                </form>
            </div>
        );
        
    }
    
};

export default ContactForm;