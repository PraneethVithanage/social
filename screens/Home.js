import React from 'react';
import {Text, View,StyleSheet,TextInput,TouchableOpacity,Image,FlatList} from 'react-native';
import Posts from './Posts';

postSet=[
  {
    id:"1",
    name:"Praneeth Vithanage",
    text:"With the establishment of modern universities in Sri Lanka in the 1940s and 1950s, the Vidyalankara Pirivena became the Vidyalankara University in 1959, later the Vidyalankara Campus of the University of Ceylon in 1972, and, ultimately, the University of Kelaniya in 1978.",
    timestamp:212212121212,
    avatar:require("../assets/prane.jpg"),
    image:require("../assets/campus.jpg")

  },
  {
    id:"2",
    name:"Nethmi Hansika",
    text:"The University of Kelaniya has pioneered a number of new developments in higher education",
    timestamp:212212121212,
    avatar:require("../assets/user1.jpg"),
    image:require("../assets/campus2.jpg")

  },
  {
    id:"3",
    name:"Himal silva",
    text:"It was one of the first universities to begin teaching science in Sinhala and the first to restructure the traditional Arts Faculty into three faculties: Humanities, Social Sciences, and Commerce and Management.",
    timestamp:212212121212,
    avatar:require("../assets/user2.jpeg"),
    image:require("../assets/campus3.png")

  },
  {
    id:"4",
    name:"Praneeth Vithanage",
    text:"It has several departments not generally found in the Sri Lankan University system and some Kelaniya innovations have been adopted subsequently by other universities. ",
    timestamp:212212121212,
    avatar:require("../assets/prane.jpg"),
    image:require("../assets/campus4.jpg")

  },
  {
    id:"5",
    name:"Praneeth Vithanage",
    text:"These include the Departments of Industrial Management and Microbiology in the Faculty of Science; Departments of Linguistics, Fine Arts, Modern Languages and Hindi in the Faculty of Humanities; and Mass Communication and Library and Information Sciences in the Faculty of Social Sciences.",
    timestamp:212212121212,
    avatar:require("../assets/prane.jpg"),
    image:require("../assets/campus5.jpg")

  }

];
export default class Home extends React.Component {

  static navigationOptions ={
    header : null
  }
  

   renderPost = postSet =>{
     return(
       <View style={styles.feedItem}>
       <Image source = {postSet.avatar} style={styles.avatar}/>
       <View style= {{flex:1}}> 
               <View style ={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

             <View>
               <Text style={styles.name}>{postSet.name}</Text>
               <Text style={styles.timestamp}>{postSet.timestamp}</Text>
            </View>
               </View>
               <Text style={styles.post}>{postSet.text}</Text>
               <Image source={postSet.image} style={styles.postImage} resizeMode = "cover"></Image>
       </View>


       </View>

    );
     
   };


  render() {
    return (
<View style={styles.container}>

   
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>
       <FlatList
            style={styles.feed}
            data ={postSet}
            renderItem={({item}) => this.renderPost(item)}
            keyExtractor = {item => item.id}
            showsVerticalScrollIndicator = {false}
           />
       

      
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
},
header:{
  paddingTop:48,
  paddingBottom:16,
  backgroundColor:"#FFF",
  alignItems:"center",
  justifyContent:"center",
  borderBottomWidth:1,
  borderBottomColor:"#EBECF4",
  shadowColor:"#454D65",
  shadowOffset:{height:5},
  shadowRadius:15,
  shadowOpacity:0.2,
  zIndex:10
  
},
headerTitle:{
fontSize:20,
fontWeight:'500'
},
feed:{
  marginHorizontal:16
},
feedItem:{
  backgroundColor:"#FFF",
  borderRadius:5,
  padding:8,
  flexDirection: "row",
  marginVertical:8
},
avatar:{
  width:36,
  height:36,
  borderRadius:18,
  marginRight:16
},

timestamp:{
  fontSize:11,
  color:"#C4C6CE",
  marginTop:4
},
post:{
  marginTop:16,
  fontSize:14,
  color:"#838899",

},
postImage:{
  width:undefined,
  height:150,
  borderRadius:5,
  marginVertical:16
}
});