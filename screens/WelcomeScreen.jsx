import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const WelcomeScreen = ({navigation}) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  return (
    
    <View style={styles.entireScreen}>
    {/** Screen Starts Here */}
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Jobizz</Text>
          <View style={{flexDirection:"row",  marginTop:20}}>
            <Text style={{fontSize:35, fontWeight:"500",}}>Welcome Back</Text>
              <MaterialCommunityIcons 
                style={{marginLeft:15}}
                  name="hand-wave" 
                    size={35} 
                      color="#a87d32"  
                      />
                  
                    
          </View>
          <View style={{marginLeft:15, marginTop:15}}>
            <Text style={{color:"#BDBEC2", fontWeight:"600", fontSize:20}}>Let's log in. Apply to jobs!</Text>
          </View>
      </View>
      {/** Form Section */}
      <View style={{marginTop:45, justifyContent:"center"}}>
          <TextInput
            placeholder="Name"
              style={styles.input}
                value={Name}
                  onChangeText={(text) => setName(text)}
          />
          <TextInput
            placeholder="Email"
              style={styles.input}
                value={Email}
                  onChangeText={(text) => setEmail(text)}
          />
          <TouchableOpacity style={styles.loginButtonContainer} onPress={() => navigation.navigate("Jobs")}>
            <Text style={{color:"#fff", fontSize:20, fontWeight:"700"}}>Log In</Text>
          </TouchableOpacity>
          <View style={{alignItems:"center", marginTop:35, flexDirection:"row", width:"100%"}}>
            <View style={styles.line}/>
                <Text style={styles.customText}>Or continue with</Text>
              <View style={styles.line}/>
          </View>
          {/**Icons Container */}
          <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", paddingTop:70}}>
            <Image source={require("../assets/Apple.png")}/>
            <Image source={require("../assets/Facebook.png")}/>
            <Image source={require("../assets/Google.png")}/>
          </View>
      </View>
      <View style={{flexDirection:"row", justifyContent:"center", marginTop:30}}>
         <Text style={{color:"#BDBEC2"}}>Haven't an account?</Text>
            <TouchableOpacity>
                <Text style={{color:"blue"}}>Register</Text>
            </TouchableOpacity>
        
      </View>
      {/** Screen Ends Here */}
    </View>
  )
  }
  const styles = StyleSheet.create({
  entireScreen:{
    flex:1,
    
  },
  welcomeTextContainer:{
    marginTop:70,
    marginLeft:30
  },
  welcomeText:{
    fontSize:45,
    color: "#356899",
    fontWeight:"600"
  },
  input:{
    borderWidth:1.5,
    paddingLeft:10,
    borderColor:"gray",
    height:60,
    margin:15,
    borderRadius:8,
    fontSize:18,
    fontWeight:"700"
  },
  loginButtonContainer:{
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
    backgroundColor: "#356899",
    width:"auto",
    margin:10,
    height:60,
    borderRadius:10
  },
  customText:{
    
    fontWeight:"500",
    fontSize:15,
    lineHeight:16,
    color:"#666",
    marginHorizontal:10
},
line:{
  flex:1,
  height:1,
  backgroundColor:"#ccc"
}
});
export default WelcomeScreen




                
                
    