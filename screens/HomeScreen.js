import { StyleSheet, Text, View, SafeAreaView , Image} from "react-native";
import React from 'react';
import tw from 'twrnc';
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import{setDestination, setOrigin} from "../slices/navSlice";

const HomeScreen = () => {

  const dispatch= useDispatch();



  return (
  <SafeAreaView style={tw `bg-white h-full`}>
    <view style={tw `p-5`}>
        <Image
                    style={{
                        width: 100,
                         height:100,
                          resizeMode: "contain",
                    }}
        source={{

            uri: "https://links.papareact.com/gzs",
        }}
        
        />

        <GooglePlacesAutocomplete
        placeholder="Where From?"
        styles={{
          container: {
            flex:0,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        
        onPress={(data,details = null)=> {
          dispatch(
            setOrigin({
            location: details.geometry.location,
            description: data.description
          }))

          dispatch(setDestination(null));

        }}
        enablePoweredByContainer={false}
        minLength={2}
        query= {{
          // key: GOOGLE_MAPS_APIKEY,
          // launguage: "en",
        }}

        nearbyPlacesAPI="GooglePlacesSearch"
        gebounce={400}
        />
        <NavOptions/>
    </view>
    <Text></Text>
    </SafeAreaView>
    
  );
 };

export default HomeScreen;

const styles = StyleSheet.create({
text: {
color:"blue",
},



});