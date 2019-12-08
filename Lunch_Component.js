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
  ActivityIndicator
} from 'react-native';
import {HeaderBackbutton} from 'react-navigation-stack';
import { Container, Header, Left, Body, Right, Title,List, ListItem,Content, Tabs, Tab,Icon } from 'native-base';
import YouTube from 'react-native-youtube';
import { NavigationEvents } from 'react-navigation';

export default class Breakfast_Component extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            meal_time:"breakfast",
            meal_name:"",
            meal_video_link:"",
            recipe: [],
            isLoading: true

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
                  if(meal.meal_time == "Lunch"){
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
                 <YouTube
                    videoId= "123"
                    key="1"
                   
                    apiKey="AIzaSyDw_HlAZk-60g1QxsT2ptd8PGgMFb6tnvo"
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}
                    style={{ alignSelf: 'stretch', height: 300 }}
                    />

                    <View style={{ flex:1,alignItems:"center", paddingTop:"10%"}}> 
                      <Text style={{fontFamily:"sans-serif-black", fontSize:30}}>{this.state.meal_name}</Text>
                    
                    </View> 
                    {recipe}
                    {/* <View style={{ flex:1,alignItems:"flex-start", backgroundColor:"red", padding:"5%"}}> 
                      <Text style={{fontFamily:"sans-serif", fontSize:20}}>Step 1:</Text>
                      <Text style={{fontFamily:"sans-serif", fontSize:15}}>{this.state.recipe[0].content}</Text>
                      
                    
                    </View> */
                     
                    }
                    {}
                   

                    </ScrollView>
            </Container>
        )
        }
    }

}