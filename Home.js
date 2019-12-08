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
} from 'react-native';
import { Container, Header, Left, Body, Right, Title,List, ListItem,Content, ActivityIndicator } from 'native-base';


export default class Home extends React.Component{

    constructor(props){
        super(props);
       
         
        this.state= {
            name: "",
            flat_list: [],
            isLoading: true
        }
    }

    componentDidMount(){
        const data = {
            "cook_name": "Rohit",
            "flat_list": [
            {
                "flat_name": "C-117",
                "flat_id": 1
            },
            {
                "flat_name": "C-119",
                "flat_id": 2
            }
            ]
        }

        this.setState({name: data.cook_name});
        this.setState({flat_list: data.flat_list});
        this.setState({isLoading: false})
        console.log()

    }
    static navigationOptions = {
       
      }


    render(){

       
          
       const { navigation } = this.props;
       console.log(this.state)

       let flat = this.state.flat_list.map( (flat) => {
        return(
            <ListItem style={styles.item} button={true} key={flat.flat_id} onPress = {() => {
                this.props.navigation.navigate('Meals', {
                    flat: flat.flat_name
                });
            }}>
                <Text >{flat.flat_name}</Text>
            </ListItem>
        )
      })
          
        return(

            
        
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title>{this.state.name}</Title>

                    </Body>
                    <Right />
                </Header>
                <Content>
            <List>
               
                {flat}
             </List>
        </Content>
            </Container>
        
        );
    }
}


const styles = StyleSheet.create({
    item : {
      display: "flex",
      flexDirection: "row",
      justifyContent: 'center',
     
     
    }
  })