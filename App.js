import React,{Component} from 'react'
import {View,
        StyleSheet,
        Text,
        Image,
        TouchableOpacity,
        FlatList
} from 'react-native'

import Lista from './src/Lista'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      feed: [
        {
          id:'1',
          nome: 'Lucas Silva',
          descricao: 'Mais um dia de muito bugs :) ',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
          likeada: false,
          likers:0
        },
        {
          id:'2',
          nome: 'Matheus',
          descricao: 'Isso sim é ser raiz !!!!',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
          likeada: false,
          likers:3
        },
        {
          id:'3',
          nome: 'Matheus',
          descricao: 'Isso sim é ser raiz !!!!',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
          likeada: false,
          likers:1
        },
        {
          id:'4',
          nome: 'Matheus',
          descricao: 'Isso sim é ser raiz !!!!',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil4.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
          likeada: false,
          likers:20
        },
        {
          id:'5',
          nome: 'Matheus',
          descricao: 'Isso sim é ser raiz !!!!',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil5.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false,
          likers:32
        }
      ]
    }
  }

  render (){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require('./src/img/logo.png')}
              style={styles.logo} 
            />
          </TouchableOpacity>
         <TouchableOpacity>
          <Image
              source={require('./src/img/send.png')}
              style={styles.send} 
            />
         </TouchableOpacity>
          
        </View>

        <FlatList
          showsHorizontalScrollIndicator = {false} 
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Lista data={item} />}
         />

       
      </View>

    )
  }
}

export default App

const styles = StyleSheet.create({
  
  container: {
    flex:1
  },
  header:{
    height: 55,
    backgroundColor:'#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  send: {
    width: 23,
    height: 23
  },
  logo:{

  }
})