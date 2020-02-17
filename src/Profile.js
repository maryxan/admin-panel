import React from 'react';
import './App.css';
import PostData from './data/data.json';
import {Container, Card, Row, Button} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import styles from './Profile.css'
import Col from "reactstrap/es/Col";
import CardBody from "reactstrap/es/CardBody";
import Form from "reactstrap/es/Form";
import './Profile.css'


class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            postList: [],
            isclicked: false,
            selected: false,
            fieldvalue: "",
            colour: "",
            userid:"",
            username: "",
            useremail:"",
            userphone:"",
            useraddress:"",
            usercompany:"",
            selectedRow: -1

        }

        this.handleClick = this.handleClick.bind(this);
        this.Showbutton = this.Showbutton.bind(this);
        this.inputChangedHandler = this.inputChangedHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }


    componentDidMount () {
        this.setState({
            postList: PostData
        })
    }


    handleClick(id,name,email,phone,address,company) {

         this.setState({
            isclicked: true
        })

        this.setState({
            userid: id,
            username : name,
            useremail: email,
            userphone: phone,
            useraddress: address,
            usercompany : company
        })

    }

    Showbutton(){

        this.setState({
            selected: true
        })
    }
    inputChangedHandler(event,field){

        event.persist();
        event.preventDefault();


        if(field==="name"){  this.setState(({username}) => ({ username: event.target.value  }))
        }
        else if(field === "email"){
            this.setState({useremail: event.target.value})
        }else if(field==="phone"){
            this.setState({userphone: event.target.value})
        }else if(field==="address"){
            this.setState({useraddress: event.target.value})
        } else if(field==="company"){
            this.setState({usercompany: event.target.value})
        }

    }
    submitHandler = (event) => {
        event.preventDefault()
        this.setState(
            {
                selected: false
            }
        )

        let v = event.target.value;
        console.log(v)

        console.log(this.state.username)
        console.log(this.state.useremail)
        console.log(this.state.userphone)
        console.log(this.state.useraddress)
        console.log(this.state.usercompany)

    }


    clearHandler = () => {
        this.setState(
            {
                selected: false
            }
        )
        let numrow = this.state.userid;
        if(numrow === "5c093af1c6ee9117a581c7d6"){
            numrow = 0;
        } else if(numrow ==="5c093af1aeca1bb00607fb2a"){
            numrow = 1;
        } else if(numrow === "5c093af1aeca1bb00607fb2a"){
            numrow = 2;
        } else if(numrow === "5c093af172c42a579bdb685f"){
            numrow = 3;
        }else if(numrow === "5c093af1264dbf1a467091cf"){
            numrow = 4;
        }else if(numrow === "5c093af1e39cab35f1c9726e"){
            numrow = 5;
        }else if(numrow === "5c093af1dd7402c939bd490c"){
            numrow = 6;
        }else if(numrow === "5c093af15b557da4238bcb0c"){
            numrow = 7;
        }else if(numrow === "5c091af1e39cab35f9c9726n"){
            numrow = 8;
        }else if(numrow === "5c693af1dd7402c939bd4806"){
            numrow = 9;
        }else if(numrow === "50093af15b557da4248bcb02"){
            numrow = 10;
        }


        this.setState({
            username : this.state.postList[numrow].name,
            useremail: this.state.postList[numrow].email,
            userphone : this.state.postList[numrow].phone,
            useraddress : this.state.postList[numrow].address,
            usercompany : this.state.postList[numrow].company,

        })
    }
    changeColor = selectedRow => e => {
        if (selectedRow !== undefined) {
            this.setState({ selectedRow  });
        }
}

    render() {

        const {postList} = this.state
        const myvar = this.state.selected;
        let savebutton;
        let cancelbtn;
        if(myvar){
            savebutton = <Button type="submit" onClick={this.submitHandler} style={{width:80,backgroundColor: "#1b68b3" }} >Save</Button>
        } else
            savebutton= <Button disabled style={{width:80,backgroundColor: "#1b68b3" }}>Save</Button>
        if(myvar){
            cancelbtn = <Button onClick={this.clearHandler} style={{width:80, backgroundColor:"#f7f7f7",color:"black" }}>Cancel</Button>
        } else cancelbtn = null;

        return(
            <Container className={styles.container} >
                <Row style={{marginTop:50}}>
                <Card body className="tableHover">

               {postList.map((item) => {
                return (
                        <Row
                             style={{backgroundColor: this.state.colour , marginBottom:6}}
                             key={item.id} id={item.id}
                             // onClick={this.changeColor(item.id)}
                             onClick={ this.handleClick.bind(null,item.id,item.name, item.email, item.phone, item.address, item.company)}
                             className={this.state.selectedRow === item.id ? "tableSelected" : "" }
                        >

                            <img alt="userimg" style={{ marginLeft:5, width: 70, height: 70, borderRadius: 100 / 2 }} src={item.photo}/>

                            {item.name} <br/>
                            {item.email}<br/>

                        </Row>

            )
            })}
                </Card>
                    <Card body className={styles.tableHover}>
                        <Col className={styles.details}>
                                <CardBody>
                                    <Form>
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control" placeholder="Enter name" value={this.state.username} onChange={(event)=> this.inputChangedHandler(event,"name")} onClick={this.Showbutton}/>
                                        </div>

                                        <div className="form-group">
                                            <label>Email address</label>
                                            <input type="email" className="form-control" placeholder="Enter email" value={this.state.useremail} onChange={(event)=> this.inputChangedHandler(event,"email")} onClick={this.Showbutton}/>
                                        </div>

                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input type="text" className="form-control" placeholder="Enter phone" value={this.state.userphone} onChange={(event)=> this.inputChangedHandler(event,"phone")} onClick={this.Showbutton}/>
                                        </div>

                                        <div className="form-group">
                                            <label>Address</label>
                                            <input type="text" className="form-control" placeholder="Enter address" value={this.state.useraddress} onChange={(event)=> this.inputChangedHandler(event,"address")} onClick={this.Showbutton}/>
                                        </div>

                                        <div className="form-group">
                                            <label>Company</label>
                                            <input type="text" className="form-control" placeholder="Enter company" value={this.state.usercompany} onChange={(event)=> this.inputChangedHandler(event,"company")} onClick={this.Showbutton}/>
                                        </div>
                                        <Row className="justify-content-end">
                                            {cancelbtn}
                                            {savebutton}
                                        </Row>
                                    </Form>
                                </CardBody>
                        </Col>

                    </Card>




    </Row>

    </Container>

    )


    }
}

export default Profile;