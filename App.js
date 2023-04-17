import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView,   } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function App() {
  

  const [coisas, setCoisas] = useState([
    {coisa: 'Sobre Nós', key: 1},
    {coisa: 'Colabore', key: 2},
    {coisa: 'Trabalhe Conosco', key: 3},
    {coisa:'API', key: 4},
  ])


  const apertarBotao = key => {}
  
  const [senha, setSenha] = useState("");
  const [numbsus, setNumbsus] = useState("");
  
 

  return (
    
    
    
    
    <ScrollView>
    
    
  
    <View style={styles.container}>


    
      
    <Image 
    style={styles.img}
    source={require('./assets/logo.png')}
    />
      
      
      
      
      <Text style={styles.txt1}> Login </Text>

      <View style={styles.inputContainer}>
      <Octicons name="number" size={24} color="black" />
        <TextInput 
        style={styles.input}
        keyboardType='numeric'
        placeholder='Número do SUS'
        onChangeText={setNumbsus}
        />
      </View>

      
      <View style={styles.inputContainer1}>      
      <FontAwesome5 name="key" size={24} color="black" />
      <TextInput 
        style={styles.input}
        placeholder='Coloque sua senha'
        onChangeText={setSenha}
        />




      
      </View>
      
      <View>
      <TouchableOpacity style={styles.bt} onPress={() => {}}> 
      
      <Text style={styles.txt}> LOGIN </Text>
      
      
      
      
      </TouchableOpacity>


      <TouchableOpacity style={styles.bt1} onPress={() => {}}> 
      
      <Text style={styles.txt2}> Cadastre-se </Text>
      
      
      
      
      </TouchableOpacity>
      </View>

   


      <StatusBar style="auto" />
    </View>

{coisas.map(
  (item) => {
    return(
      <View  key={item.key}>
        <TouchableOpacity onPress={() => apertarBotao(item.key)}>
        <Text style={styles.lista} >{item.coisa}</Text>
        </TouchableOpacity>
      </View>
    )
  }
)}
    
    <View style={styles.copyright}>
    <FontAwesome5 name="copyright" size={24} color="black" />
      <Text style={styles.txt3}> Todos os direitos reservados: SUSplus</Text>
      <Text style={styles.txt3}> by: Lucas e Cauã </Text>
    </View>


    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    
    
  },
  input: {
    padding: 10,
    margin: 10,
    width: 300,
    right: 17,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    borderWidth: 4,
    borderRadius: 10,
    borderColor: '#777',
    
  },
  bt: {
    backgroundColor: "blue",
    width: 300,
    margin: 10,
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer1: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    borderWidth: 4,
    borderRadius: 10,
    borderColor: '#777',
  },
  img: {
    resizeMode: 'contain',
    
  },
  txt: {
    color: "white"
  },
  txt1: {
    fontWeight: "bold",
    fontSize: 20,
  },
  txt2: {
    color: 'black'
  },
  bt1: {
    justifyContent: "center",
    alignItems: 'center',
    padding: 40,
    
  },
  copyright: {
    alignItems: "center",
    justifyContent: 'flex-start',
    margin: 35,
    right:17,
    flexDirection: 'row',
    
  },
  txt3: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 11,
   

  },
  lista: {
  
    margin: 30,
    marginTop: 15,
    padding: 15,
    backgroundColor: "blue",
    fontSize: 15,
    borderRadius: 900,
    textAlign: 'center',
    color: 'white'
  },
});
