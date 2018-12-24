import React, {Component} from 'react';
import CardList from '../components/CardList';
import {Projects} from '../Projects';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';



class App extends Component{
      constructor(){
          super()
          this.state = {
              Projects: [],       // Projects: Projects,
              SearchField: ''
          }
      }

      componentDidMount(){
          fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>{
                      response.json();
          })
            .then(users=>{
                  this.setState({Projects: Projects});
            })

      }

      OnSearchChange = (event) => {
            this.setState({SearchField: event.target.value})
            //console.log(event.target.value);
      }

      render(){
          const {Projects, SearchField} = this.state
          const FilteredProjects = Projects.filter(Project => {
                return Project.name.toLowerCase().includes(SearchField.toLowerCase());
          })

          //if(!Projects.length ===0){
          return !Projects.length ?
              <h1>Loading</h1> :

          //else{
              //return
              (
                      <div className='tc'>
                          <h1 className='f1'>My Projects</h1>
                          <SearchBox SearchChange={this.OnSearchChange}/>
                          <Scroll>
                              <CardList Projects = {FilteredProjects}/>
                          </Scroll>
                      </div>
                );
          }
      }



export default App;
