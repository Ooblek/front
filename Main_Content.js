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
  
  ActivityIndicator
} from 'react-native';
import {HeaderBackbutton} from 'react-navigation-stack';
import { Container, Header, Left, Body, Right, Title,List, ListItem,Content, Tabs, Tab,Icon } from 'native-base';
import YouTube from 'react-native-youtube';
import { WebView } from "react-native-webview";


export default class Main_Content extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            meal_time:"",
            meal_name:"",
            meal_video_link:"",
            recipe: [],
            isLoading: true

        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      
      if (nextProps.meal_time !== prevState.meal_time) {
        console.log(nextProps.meal_time)
        return ({meal_time: nextProps.meal_time}) // <- this is setState equivalent
      }
      
    }

    componentDidMount(){
        console.log("didmou")
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
                "meal_video_link": "https://www.youtube.com/watch?v=DsZr3U4Clf0",
                "recipe": [
                  {
                    "step": 1,
                    "content": "Cook tomatoeds"
                  },
                  {
                    "step": 2,
                    "content": "Cook Onions"
                  }
                ]
              },
              {
                "meal_time": "Dinner",
                "meal_time_id": 4,
                "meal_name": "Rajma Chawal 2",
                "meal_video_link": "https://www.youtube.com/watch?v=DsZr3U4Clf0",
                "recipe": [
                  {
                    "step": 1,
                    "content": "Cook tomatoeds"
                  },
                  {
                    "step": 2,
                    "content": "Cook Onions"
                  }
                ]
              },
              {
                "meal_time": "PD",
                "meal_time_id": 5,
                "meal_name": "Rajma Chawal 4",
                "meal_video_link": "https://www.youtube.com/watch?v=DsZr3U4Clf0",
                "recipe": [
                  {
                    "step": 1,
                    "content": "Cook tomatoeds"
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
                  if(meal.meal_time === this.props.meal_time){
                      let ID = meal.meal_video_link.split("?v=")[1];
                
                      console.log(meal.meal_video_link.substr(32,meal.meal_video_link.length))
                     
                      this.setState({meal_video_link: ID,
                                     meal_name:meal.meal_name,
                                     meal_time: this.props.meal_time,
                                     recipe: meal.recipe,
                                     isLoading: false
                                     }, () =>{
                          console.log(this.state)
                      })
                      
                  }
              }
          )
          
    }


    render(){
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
          }
          else{

            let recipe = this.state.recipe.map( (step) => {
              return(
                <View style={{ flex:1,alignItems:"flex-start",  padding:"5%"}}> 
                      <Text style={{fontFamily:"sans-serif", fontSize:20}}>Step {step.step}</Text>
                      <Text style={{fontFamily:"sans-serif", fontSize:15}}>{step.content}</Text>
                      
                    
                </View>
              )
            })

        return(

          <Container style={{paddingTop:"0%"}}>
          <ScrollView
        contentContainerStyle={{
            
          justifyContent: 'flex-start'
      }}>
            {console.log(this.state.meal_video_link)}
             

                <WebView
                        style={{ alignSelf: 'stretch', height: 300 }}
                        source={{ uri: `https://www.youtube.com/embed/${this.state.meal_video_link}` }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}   
                      />

                <View style={{ flex:1,alignItems:"center", paddingTop:"10%"}}> 
                  <Text style={{fontFamily:"sans-serif-black", fontSize:30}}>{this.state.meal_name}</Text>
                
                </View> 
                {recipe}
                
                {}
               

                </ScrollView>
        </Container>
        )
        }
    }

}