import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
  WebView,
} from 'react-native';
import {HeaderBackButton} from 'react-navigation-stack';
import { Container, Header, Left, Body, Right, Title,List, ListItem,Content, Tabs, Tab,Icon } from 'native-base';
import YouTube from 'react-native-youtube';
import Main_Content from './Main_Content';







export default class Meals extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      date: "",
      
    
      lid:"none",
      did:"none",
      pdid: "none",
      lunch: [],
      dinner: [],
      pd: [],
      key:1,



  }
  }
   
    componentDidMount(){
        const data = {
            "date": "19-11-2019",
            "meals": [
              {
                "meal_time": "Breakfast",
                "meal_time_id": 2,
                "meal_name": "Rajma Chawal",
                "meal_video_link": "https://www.youtube.com/watch?v=DsZr3U4Clf0",
                "recipe": [
                  {
                    "step": 1,
                    "content": "Cook tomatoes"
                  },
                  {
                    "step": 2,
                    "content": "Cook Onions"
                  }
                ]
              },
              {
                "meal_time": "Lunch",
                "meal_time_id": 3,
                "meal_name": "Rajma Chawal",
                "meal_video_link": "https://www.youtube.com/watch?v=osKgp8Y2QB4",
                "recipe": [
                  {
                    "step": 1,
                    "content": "Cook tomatoes"
                  },
                  {
                    "step": 2,
                    "content": "Cook Onions"
                  }
                ]
              }
            ]
          }

          data.meals.forEach(
            (meal) => {
              if(meal.meal_time == "Breakfast"){
               
                
                this.setState({breakfast: {link: meal.meal_video_link,
                                            name: meal.meal_name,
                                            recipe: meal.recipe}})
               
               
                // ID = this.state.breakfast[0].split("?v=")[1];
                // console.log(ID)
                // this.setState({bid:"asdasd"})
                // console.log(this.state.bid)
              }
              else if(meal.meal_time == "Lunch"){
                this.setState({lunch:this.state.lunch.push(meal.meal_video_link)})
                this.setState({lunch:this.state.lunch.push(meal.meal_name)})
                this.setState({lunch:this.state.lunch.push(meal.recipe)})
              }
             else if(meal.meal_time == "Dinner"){
                this.setState({dinner:meal})
              }
             else if(meal.meal_time == "PD"){
                this.setState({pd: meal})
              }
            }
          )

          console.log(this.state)

          // let ID = ""
          // ID = this.state.breakfast[0].split("?v=")[1];
          // console.log(ID)
          // this.setState({breakfast: this.state.breakfast.push(ID)})
          // console.log(this.state.breakfast)
          // ID = this.state.lunch[0].split("?v=")[1];
          // this.setState({lunch: this.state.lunch.push(ID)})
       
         


          

         

          
    }

   

    render(){
      const { params } = this.props.navigation.state;
      const flat = params ? params.flat : null;
      console.log(flat);
        return(
            <Container>
        <Header hasTabs>
            <Left>
            <HeaderBackButton onPress={() => this.props.navigation.goBack(null)} />
            </Left> 
            <Body><Text style={{color:"white"}}>{flat}</Text></Body> 
            <Right/>  
         </Header>
        <Tabs>
          <Tab heading="Breakfast">
            <Container style={{paddingTop:"0%"}}>
                <Main_Content meal_time="Breakfast" />


            </Container>
          </Tab>


          <Tab heading="Lunch">
            <Main_Content meal_time="Lunch" />

          </Tab>


          <Tab heading="Dinner">
            <Main_Content meal_time = "Dinner" />

          </Tab>
          <Tab heading="PD">
            <Main_Content meal_time = "PD" />

          </Tab>
        </Tabs>
      </Container>
        );
    }
}