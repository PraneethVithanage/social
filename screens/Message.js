import React from 'react';
import {Button, Text, View,StyleSheet,TextInput,TouchableOpacity,Image,StatusBar,LayoutAnimation} from 'react-native';

export default class Message extends React.Component {
  static navigationOptions ={
    header : null
  }
  
  

  handleLogin = () => {
         const {email,password} = this.state
  }
  render() {
    return (
<View style={styles.container}>

   
        <Text>cafdfdffdfdffdfr</Text>
        <Text>cfdfffdar</Text>
        <Text>car</Text>
        <Text>cfdfdfdar</Text>
       

      
        <View style={styles.bar}> 
        <TouchableOpacity  style={{margin: 25}} onPress = {() => this.props.navigation.navigate("Profile")}>
           <Image  style={styles.image}source ={ require("../assets/profile.png")}>
           </Image>
        </TouchableOpacity>
        
        

         <TouchableOpacity style={{margin: 25}}  onPress = {() => this.props.navigation.navigate("Home")}>   
            <Image style={styles.image} source ={ require("../assets/home.png")}>
           </Image>
         </TouchableOpacity>
         
            
         <TouchableOpacity style={{margin: 25}} onPress = {() => this.props.navigation.navigate("Posts")}>
            <Image style={styles.image} source ={ require("../assets/add.png")}>
            </Image>
         </TouchableOpacity>
         <TouchableOpacity style={{margin: 25}} onPress = {() => this.props.navigation.navigate("Notification")}>
            <Image style={styles.image}source ={ require("../assets/notification.png")}>
            </Image>
         </TouchableOpacity>

        <TouchableOpacity style={{margin: 25}} onPress = {() => this.props.navigation.navigate("Message")}>
            <Image style={styles.image} source ={ require("../assets/message.png")}>
            </Image>
        </TouchableOpacity>  
        </View>
        <View style={styles.code} >
        <View  style={{ flexDirection: "row"}}>
        <Text style={{color:'black',fontSize:10,marginLeft:25}}>Account</Text>
        <Text style={{color:'black',fontSize:10,marginLeft:45}}>Home</Text>
        <Text style={{color:'black',fontSize:10,marginLeft:55}}>Post</Text>
        <Text style={{color:'black',fontSize:10,marginLeft:42}}>notification</Text>
        <Text style={{color:'black',fontSize:10,marginLeft:30}}>Message</Text>
        </View>
        </View>   
        

        </View>
      
      
    );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
},

bar: {
  
  
  flexDirection: 'row',
  justifyContent: 'space-between',
  position: 'absolute',
  bottom: 0,
  backgroundColor:'gray',
  width:'100%'
  
},
image:{
  width:30,
  height:30,
  

},
code:{
  position: 'absolute',
  bottom: 0
}
});