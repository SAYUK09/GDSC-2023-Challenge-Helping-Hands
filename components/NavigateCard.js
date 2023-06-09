import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { GOOGLE_MAPS_APIKEY} from "@env"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';


const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation= useNavigation();
  return (
    <SafeAreaView style={tw `bg-white flex-1`}>
      <Text style={tw `text-center py-5 text-xl`}>Good Morning Devansh</Text>
      <View style={tw `border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={toInputBoxStyles}
            fetchDetails={true}
            returnKeyType={"Search"}
            minlength={2}
            onPress={(data, details=null)=> {
                dispatch(
                    setDestination({
                        location: details.geometry.location,
                        description: data.description,

                }))
                navigation.navigate('RideOptionsCard')
  );
            

            }}
            enabelPoweredByContainer={false}
            // query={
            //     // key: GOOGLE_MAPS_APIKEY,
            //     // languages: "en"
            // }
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            />

        </View>

      </View>
    </SafeAreaView>
  );
};

export default NavigateCard

const toInputBoxStyles= StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop: 20,
        flex:0,
    },
    textInputContainer:{
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom:0,
    },
});

const styles = StyleSheet.create({})