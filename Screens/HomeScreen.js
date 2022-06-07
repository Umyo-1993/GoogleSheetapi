import React, { useEffect ,useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View , FlatList,TextInput,Alert} from 'react-native'

const HomeScreen=()=>{
  const [data, setname] = useState({
   name:""
  }
  );
  const [value, setvalue] = useState([]);

    const DataAPI = async () => {
        try {
          let data = await fetch(
            "https://sheet.best/api/sheets/bd3f9c9f-d1df-4431-8c52-37b1d3d7fc8e?"
          );
          let condata = await data.json();
          setvalue(condata);
         
        // console.log(condata);
        } catch {
          console.log("Error");
        }
    }
    const handlechange=(e)=>{

      setname({...name,[e.target.Name]: e.target.value})
    }
    
  const handlesubmit=async(e)=>{
  
    try {
      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify("Umotheing")
    };

    await fetch(
    "https://sheet.best/api/sheets/bd3f9c9f-d1df-4431-8c52-37b1d3d7fc8e",{ method:'post',
     mode:'no-cors',
    headers: {
      'Accept': 'application/json',
      
      'Content-Type': 'application/json' },

    body: JSON.stringify({Name:data})   

  })
      .then(response => {
          response.text()
              .then(data => {
                  Alert.alert("Post Saved");
              });
      })
      
    } catch (error) {
      console.log(error)
    }
  }
const handledelete=async()=>{
  try {
console.log(index)
await fetch("https://sheet.best/api/sheets/bd3f9c9f-d1df-4431-8c52-37b1d3d7fc8e/${rowindex}",{
method : 'DELETE',
  }

)
  } catch (error) {
console.log(error)
  }

}
    useEffect(()=>{
      DataAPI();

  
    },[]);
    console.log(value);
    const renderItemupdated = ({item})=>( 
      <Text>Player's Name: {item.Name}</Text>   
    
    );
    
    return(<View>
        <Text>Hello</Text>
        <TextInput
        placeholder='Name'
        value={data.name}
        onChangeText={newtext=>setname(newtext)}            
        />
           <TextInput
        placeholder='Age'
                     
        />
          <TextInput
        placeholder='Position'         
        />
       <TouchableOpacity
     
        style={styles.button}
        onPress={handlesubmit}
      >
         <Text style={styles.buttonText}>Save Data</Text>
      </TouchableOpacity>
      <FlatList
       data={value}    
       
    //   keyExtractor={(item) => item.index}
    keyExtractor={(item, index) => index.toString()}
       
    //  renderItem={renderItemupdated}
      renderItem={({item,index})=>{
        
   return (
   <Text> Player's Name : {item.Name}
   <Text>Players Age : {item.Age}</Text>
   
   <TouchableOpacity
     
     style={styles.button}
     onPress={async()=>{
      try {
        console.log(index)
        await fetch(`https://sheet.best/api/sheets/bd3f9c9f-d1df-4431-8c52-37b1d3d7fc8e/${index}`,{
        method : 'DELETE',
          }
        
        )
          } catch (error) {
        console.log(error)
          }



     }}
     
   >
      <Text style={styles.buttonText}>Delete</Text>
      
   </TouchableOpacity>
   </Text> )
   
  
   
   }}
       
       
          
        
    />


    </View>)

}
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    marginTop:30,
    padding:2,
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  item: {
    backgroundColor: '#f5f520',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  RectangleShapeView: {
    borderRadius: 5,
    // Set border width.
    borderWidth: 2,
    // Set border Hex Color Code Here.
    borderColor: '#FF5722', 
    // Setting up Text Font Color.
    color: '#000',
    // Setting Up Background Color of Text component.
    backgroundColor : '#CDDC39', 
    // Adding padding on Text component.
    padding : 2,
    fontSize: 14,
    textAlign: 'center',
    margin: 5
   
    },
    rectangle : {
      width: '100%',
      height: 200,
      marginTop: 10,
      borderRadius: 5,
    // Set border width.
    borderWidth: 2,
    

      // Set border Hex Color Code Here.
    
      // Setting up Text Font Color.
    
      // Setting Up Background Color of Text component.
      
      // Adding padding on Text component.
      padding : 2,
      fontSize: 14
      
    }
  
})