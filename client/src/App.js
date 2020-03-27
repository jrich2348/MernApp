import React, {Component} from 'react';
import './App.css';
import axios from 'axios';  
class App extends React.Component{
  state = {
    title:'',
    body:'',
    posts: []
  };

  componentDidMount= () => { 
    this.getBlogPost();
  };

  getBlogPost = () =>{
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({posts:data});
        console.log('Data has been received!!', response);
      })
      .catch(() => {
        alert('error retrieving data!!!');

      })
      .finally(function () {
        // always executed
      });
  }
  
  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({ [name]: value});
  };   
  
  submit =(event) => {
    event.preventDefault(); // disable browser from refreshing , do nothing until told

    const payload = {
      title: this.state.title,
      body: this.state.body,
    };
  

  axios({
    url:'/api/save',  
    method: 'POST',
    data: payload
  })
  .then(() => {
    console.log('Data has been sent to the server ');
    this.restUserInputs();
    this.getBlogPost();
})

  .catch(() => {
    console.log('Server error');
  });

};

restUserInputs = () => {
  this.setState({
    title: "",
    body: "",
   //  posts: "",
  });
}; 

displayBlogPost = (posts) => {

  if (!posts.length) return null;

  return posts.map((posts, index)=>(
    <div key={index} className="blog-post_display">
      <h3>{posts.title}</h3>
      <p>{posts.body}</p>
    </div>
  ));
 
}
  render() {
      console.log('State', this.state);
    //return JSX
    return (
      <div className="app-container">
        <h1>Welcome To Pet Pose</h1>
        <form onSubmit ={this.submit}>
          <div className="form-input">
            <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title} 
            onChange={this.handleChange}
            />
          </div>
      
          <div>
            {/* {this.state.posts.map( e => '<p> ${e.namw} </p>')} */}
          </div>
          
          <div className="form-input">
            <textarea 
            placeholder="Body" 
            name="body" 
            cols="30"
            rows="10" 
            value={this.state.body} 
            onChange={this.handleChange}
            >
\             </textarea>
          </div>

          <button>Submit</button>
        </form>
        <div className="blog-post">
          {this.displayBlogPost(this.state.posts)}
        </div>
      </div>
    );
  }
};

export default App;
