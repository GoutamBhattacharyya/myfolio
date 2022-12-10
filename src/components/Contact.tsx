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
            if(!fields["username"].match(/^[a-z\s]{0,255}$/i)) {
                formValid = false;
                error["username"] = "please enter your user name";
                
            }
        }
        this.setState({error:error});
        return(formValid);
    }
    submitRegistration(e:any){
        e.preventDefault();
        //console.log(this.validForm());
        if(this.validForm()){
            let localObj:any = {};
            localObj["username"] = "";
            console.log(localObj);
            this.setState({fields:localObj});
            console.log(this.state.fields) 
        }        
    }
    handelChange(e:any){
         const fields = this.state.fields;
         console.log(typeof(fields));
         fields[e.target.name] = e.target.value;
         this.setState({fields});
         console.log(this.state.fields);
    }
    render(): React.ReactNode {
        return (
            <div className="myfolio-contact-section">
                <form onSubmit={this.submitRegistration} method="post">
                    <fieldset>                        
                        <input type="text" name="username" placeholder="Name" value={this.state.fields.username} onChange= {this.handelChange} />
                        <div className={`"myfolio-error ${this.state.error.username!==undefined?"-show":""}`}>{this.state.error.username}</div>
                    </fieldset>
                    <fieldset>
                        <input type="email" name="email" placeholder="Email" value={this.state.fields.email} onChange={this.handelChange} />
                    </fieldset>
                    <fieldset>
                        <textarea name="textarea" placeholder="Write Your Requirment" value={this.state.fields.textarea} onChange={this.handelChange} />
                    </fieldset>
                    <input type={"submit"} className="myfolio-btn" />
                </form>
            </div>
        );
        
    }
    
};

export default ContactForm;