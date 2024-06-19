import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { socialData } from '../mock/SocialAccounts';
import { popularJobsData } from '../mock/PopularJobs';

const JobsScreen = () => {
  return (
    <View style={styles.container}>
        {/** Welcome Section */}
          <View style={styles.salutationContainer}>
            <View style={{flexDirection:"column"}}>
            {/** Salutation */}
              <Text style={styles.salutationText}>Eric Atsu</Text>
              {/** Email Account */}
              <Text style={{color:"#95969D", fontSize:20}}>eric@gmail.com</Text>
            </View>
            {/** Profile Picture */}
            <View style={{marginLeft:185}}>
              <Image source={require("../assets/Profile.png")}/>
            </View>
          </View>
          <View style={{marginTop:35}}>
            {/** Search Bar */}
                  <View style={styles.inputContainer}>
                      <View style={{flexDirection:"row"}}>
                        <TouchableOpacity>
                          <AntDesign name="search1" size={25} color="black" style={styles.icon} />
                        </TouchableOpacity>
                          <TextInput
                            style={styles.input}
                              placeholder="Search a job or position"
                          />
                          </View>
                        <TouchableOpacity style={styles.filterIconContainer}>
                          <Image source={require("../assets/filter5.png")} style={styles.filterIcon}/>
                        </TouchableOpacity>
                    </View>
              </View>
            <View style={{marginTop:40}}>
              <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:25, fontWeight:"700"}}> Featured Jobs</Text>
                <Text style={{marginLeft:170, fontSize:20, color:"#95969D"}}>See all</Text>
              </View>
            </View>
            <View>
              {/** Featured Jobs */}
                <FlatList
                  data={socialData}
                    renderItem={({ item }) => (
                      
                        <View style={[styles.socialDataContainer, {backgroundColor: item.backgroundColor}]}>
                            <View style={{flexDirection:"row"}}>
                                <View style={{backgroundColor:"white", width:50, borderRadius:5}}>
                                    <Image style={[styles.image, item.imageStyle]}source={item.image}/>
                                </View>

                                  <View style={{flexDirection:"column", alignItems:"center", marginLeft:5}}>
                                      <View>
                                          <Text 
                                            style={{color:"#fff", fontWeight:"600", fontSize:20}}>{item.job}</Text>
                                      </View>
                                      <View>
                                          <Text style={{color:"#fff", fontWeight:"600"}}>{item.socialAccount}</Text>
                                      </View>
                                  </View>
                              </View>
                            <View style={{flexDirection:"row", marginTop:120, justifyContent:"space-between"}}>
                                <View>
                                    <Text style={{color:"#fff", fontWeight:"600", fontSize:15}}>{item.salary}</Text>
                                </View>

                              
                                <View>
                                    <Text style={{color:"#fff", fontWeight:"600", fontSize:15}}>{item.location}</Text>
                                </View>
                          </View>
                        </View>
                      )}
                    keyExtractor={(item) => item.id.toString()}
                      horizontal
                        showsHorizontalScrollIndicator = {false}
                />
            </View>
            <View style={{flexDirection:"row"}}>
                <Text style={{fontWeight:"700", fontSize:25 }}>Popular Jobs</Text>
                  <TouchableOpacity>
                      <Text style={{color:"#95969D", fontSize:20, marginLeft:175}}>See all</Text>
                  </TouchableOpacity>
            </View>
            <View>
            {/** Popular Jobs */}
              <FlatList
                  data={popularJobsData}
                  renderItem={({item}) => (
                  <View style={styles.popularJobsContainer}>
                      <View>
                        <Image style={{height:70, width:70}} source={item.image}/>
                      </View>
                      
                        <View style={{marginLeft:10, justifyContent:"space-between"}}>
                          <Text style={{fontSize:20, fontWeight:"700"}}>{item.title}</Text>
                          <Text style={{fontSize:21, color:"#95969D"}}>{item.subTitle}</Text>
                        </View>
                        <View style={{ justifyContent:"space-between"}}>
                          <Text style={{fontWeight:"600"}}>{item.amount}</Text>
                          <Text style={{color:"#95969D"}}>{item.city}</Text>
                        </View>
                      
                  </View>
                  
                  )}
                  keyExtractor={(item) => item.id.toString()}
                  showsVerticalScrollIndicator = {false}
                  vertical
              />
            </View>
                     



                    
    </View>
      )
    }
    const styles = StyleSheet.create({
      container:{
        flex:1,
        margin: 20,
        },
      salutationContainer:{
        marginTop:30,
        flexDirection:"row"
    
        },
      salutationText:{
        fontSize:30,
        fontWeight:"500"
        },
      inputContainer:{
        borderWidth:1.5,
        borderColor:"gray",
        height:50,
        borderRadius: 30,
        width:"80%",
        alignItems:"center",
        textAlign:"center",
        paddingHorizontal:10,
        flexDirection:"row",
        
        },
        input:{
          flex:1,
          fontSize:20,
          fontWeight:"700",
           justifyContent:"space-evenly"
        },
        icon:{
          marginRight:20
        },
        filterIconContainer:{
          height:50,
          width:50,
          marginLeft:40,
          justifyContent:"flex-end",
          alignItems:"center",
          borderRadius:15,
          borderWidth:1,
          borderColor:"gray"
        },
        filterIcon:{
          height:39,
          width:40,
        },
        socialDataContainer:{
          height:215, 
          width:250,
          margin:20,
          borderRadius:20,
          padding:20
        },
        popularJobsContainer:{
          backgroundColor:"#fff",
          margin:20,
          height:70,
          borderRadius:10,
          flexDirection:"row",
          justifyContent:"space-between"
          }
        });
        export default JobsScreen
            
            
         
         
         
          
           
        
        
       
                   
                      
              
                
              
                
                

                                  
                        
                        

                        



        
         
        
    
