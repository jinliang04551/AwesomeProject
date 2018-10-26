
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/*
* default setting for start
*/
// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

/*
 helloworld demo
*/
// import React,{Component} from 'react';
// import {Text, View} from 'react-native';

// export default class HelloWordApp extends Component {
//    render(){
//     return (
//        <View>
//          <Text>HelloWordApp></Text>
//        </View>
//       );
//    }
// }

/*
 * display url pic
*/
// import React, {Component} from 'react';
// import { Image} from 'react-native';

// export default class Bananas extends Component {
//   render(){
//     let pic = { uri : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};

//     return (
//        <Image source = {pic} style= {{width(193),height(110)}}>
//       );
//   }
// }


/* 
  display View Text 
*/
// import React, {Component} from 'react';
// import {Text, View} from 'react-native';

// class Greeting extends Component {
//   render() {
//     return (
//         <View style={{alignItems:'center'}}>
//             <Text> hello {this.props.name}! </Text>
//         </View>
//       );
//   }
// }

// export default class LotsOfGreetings extends Component {
//   render(){
//     return(
//       <View style={{justifyContent:'center'},{alignItems:'center'}}>
//         <Greeting name='zhang1' />
//         <Greeting name='zhang2' />
//         <Greeting name='zhang3' />
//       </View>
//       );
//   }
// }


/*
 设置state 测试无反应 
*/
// import React, {Component} from 'react';
// import {Text, View} from 'react-native';
// class Blink extends Component {
//   constructor(props) {
//    super(props);
//    this.state = {showText : true};

//   //每1000毫秒改变一次
//    setInterval(()=>{
//      this.setState(previousState =>{
//       return {showText : !previousState.showText};
//      });
//    },1000);
//  }
  
//   render() {
//         let display = this.state.showText ? this.props.state : '';
//         return (
//             <Text>{display}</Text>
//         );
//     }
      
//   }

//   export default class BlinkApp extends Component {
//         render () {
//            return (
//              <View >
//                <Blink text='i love blink' />
//                <Blink text='i love blink' />
//                <Blink text='i love blink' />
//              </View>
//            );
//         }

//   }

/*
 设置样式
*/
// import React, {Component} from 'React';
// import { APPRegistry, StyleSheet, Text, View} from 'react-native';

// export default class LostOfStyles extends Component {
//    render() {
//      return (
//        <View>
//          <Text style={styles.red}>just red</Text>
//          <Text style={styles.bigblue}>just bigblue</Text>
//          <Text style={styles.red, styles.bigblue}>red then bigblue</Text>
//          <Text style={styles.bigblue,styles.red}>bigblue then red </Text>
//        </View>
//       );
//    }
// }

// const  styles = StyleSheet.create({
//   bigblue :{
//     color :'blue',
//     fontSize :30,
//     fontWeight : 'bold',
//   },
  
//   red :{
//       color :'red',
//   },
// });

// /*
//   宽度和高度
// */
// import React, {Component} from 'React';
// import { APPRegistry, StyleSheet, Text, View} from 'react-native';

// export default class FixedDimensionsBasic extends Component {
//    render() {
//       return(
//           <View>
//             <View style={{width:50,height:50, backgroundColor: 'powderblue' }} />
//             <View style={{width:50,height:50,backgroundColor:'skyblue'}} />
//             <View style={{width:50,height:50,backgroundColor:'steelblue'}} />
//           </View>
//         );
//    }
// }

// /*
//  弹性（flex）宽高
// */
// import React, {Component} from 'React';
// import { APPRegistry, StyleSheet, Text, View} from 'react-native';


// export default class FlexDimensionsBasic extends Component {
//     render () {
//         return(
//             <View style={{flex:1}}>
//               <View style={{flex:1,backgroundColor: 'powderblue' }} />
//               <View style={{flex:2,backgroundColor:'skyblue'}} />
//               <View style={{flex:3,backgroundColor:'steelblue'}} />
//             </View>
//         );

//     }
// }


// /*
//  使用flex 布局
// */
// import React, {Component} from 'React';
// import { APPRegistry, StyleSheet, Text, View} from 'react-native';

// export default class FlexDimensionsBasic extends Component {
//     render () {
//         return(
//             <View style={{flex:1, 
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems : 'stretch'
//             }}>
//               <View style={{width: 50, height: 50,backgroundColor: 'powderblue' }} />
//               <View style={{width: 50, height: 50,backgroundColor:'skyblue'}} />
//               <View style={{width: 50, height: 50,backgroundColor:'steelblue'}} />
//             </View>
//         );

//     }
// }

// /*
//  处理文本输入
// */
// import React, {Component} from 'React';
// import { APPRegistry, TextInput, Text, View} from 'react-native';

// export default class pizzaTranslator  extends Component {
//     constructor(props){
//       super(props);
//       this.state ={text : ''};
//     }

//     render () {
//        return (
//           <View style={{padding:10}}>
//              <TextInput 
//                style={{height: 50}}
//                placeholder="type here to translate"
//                onChangeText={(text)=> this.setState({text})}
//              />
//              <Text style={{padding:10,fontSize:42}}>
//                 {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//              </Text>
//           </View>
//         );
//     }
// }

// /*
//  处理触摸事件
// */
// import React, {Component} from 'React';
// import { Alert, AppRegistry, Button, StyleSheet, Text, View} from 'react-native';

// export default class ButtonBasics extends Component {
//       _onPressButton(){
//          Alert.alert('you tapped the button');
//       }

//       render () {
//          return(
//            <View style={styles.buttonContainer}>
//               <View style={styles.container}>
//                  <Button 
//                    onPress={this._onPressButton}
//                    title="press me"
//                  />
//               </View>
//               <View style={styles.buttonContainer}>
//                  <Button 
//                    onPress={this._onPressButton}
//                    title="press me"
//                    color="#841584"
//                  />
//               </View>
//               <View style={styles.alternativeLayoutButtonContainer}>
//                <Button 
//                  onPress={this._onPressButton}
//                  title="This looks great!"
//                />

//                <Button 
//                  onPress={this._onPressButton}
//                  title="ok"
//                  color="#841584"
//                />
//               </View>
//            </View>
//           );
//       }
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//   },
//   buttonContainer:{
//     margin:20,
//   },
//   alternativeLayoutButtonContainer:{
//     margin:20,
//     flexDirection:'row',
//     justifyContent:'space-between',
//   },
// });

// AppRegistry.registerComponent('AwesomeProject',()=>ButtonBasics);


/*
Touchable 系列组件
*/
// import React, { Component } from 'react';
// import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

// export default class Touchable extends Component {
//   _onPressButton(){
//     Alert.alert('You tapped the button!')
//   }

//   _onLongPressButton(){
//     Alert.alert('You long-pressed the button!')
//   }

//   render() {
//     return (
//           <View style={styles.container}>
//             <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//               <View style={styles.button}>
//                  <Text style={styles.buttonText}>TouchableHighlight</Text>
//               </View>
//             </TouchableHighlight>

//             <TouchableOpacity onPress={this._onPressButton}>
//               <View style={styles.button}>
//                <Text style={styles.buttonText}>TouchableOpacity</Text>
//               </View>
//             </TouchableOpacity>
         
//             <TouchableNativeFeedback onPress={this._onPressButton} backgroud={Platform.OS ==='android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
//               <View style={styles.button}>
//                <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
//               </View>
//             </TouchableNativeFeedback>

//             <TouchableWithoutFeedback onPress={this._onPressButton}>
//               <View style={styles.button}>
//                <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//               </View>
//             </TouchableWithoutFeedback>

//            <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
//             <View style={styles.button}>
//               <Text style={styles.buttonText}>Touchable with Long Press</Text>
//             </View>
//            </TouchableHighlight>

//           </View>
//       );
//   }

// }

// const styles = StyleSheet.create({
//    container:{
//      paddingTop:60,
//      alignItems:'center'
//    },
//    button:{
//      marginBottom:30,
//      width:260,
//      alignItems:'center',
//      backgroundColor:'#2196F3'
//    },
//    buttonText: {
//     padding: 20,
//     color: 'white'
//   }
// });

// /*
// 使用滚动视图
// */
// import React, { Component } from 'react';
// import { AppRegistry, ScrollView, Image, Text } from 'react-native';

// export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render(){
//     return(
//       <ScrollView>
//         <Text style={{fontSize:96}}>Scroll me plz</Text>
//         <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>If you like</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>Scrolling down</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>What's the best</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>Framework around?</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:80}}>React Native</Text>
//       </ScrollView>
//       );
//   }
// }


// /*
// 使用长列表 FlatList
// */
// import React, { Component } from 'react';
// import { FlatList, SectionList, StyleSheet, View, Text } from 'react-native';

// export default class FlatListBasic extends Component {
//   render(){
//     return(
//       <View style={styles.container}>
//          <FlatList 
//            data= {[
//             {key:'Devin'},
//             {key:'Devin'},
//             {key:'Devin'},
//             {key:'Devin'},
//             {key:'Devin'},
//             {key:'Devin'},
//             {key:'Devin'},
//             {key:'Devin'},
//             ]}
//             renderItem={({item}) =><Text style={styles.item}>{item.key}</Text>}
//          />
//       </View>
//   );
//   }
// }

// const styles = StyleSheet.create({
//   container:{
//    flex:1,
//    paddingTop:22
//   },
//   item:{
//     padding:10,
//     fontSize:18,
//     height:44,
//   },
// });

// /*
// 使用长列表 SectionList
// */
// import React, { Component } from 'react';
// import { FlatList, SectionList, StyleSheet, View, Text } from 'react-native';

// export default class SectionListBasic extends Component {
//    render(){
//      return(
//       <View style={styles.container}>
//         <SectionList
//             sections={
//               [
//                  {title:'D',data:'Devin'},
//                  {title:'E',data:'Devin1'},
//               ]
//             }

//             renderItem={({item})=> <Text style={styles.item}>{item}</Text>}
//             renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text> }
//             // keyExtractor={(item,index)=> index}
//         />
//       </View>
//       );
//    }

// }

// const styles = StyleSheet.create({
//   container:{
//    flex:1,
//    paddingTop:22
//   },
//    sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item:{
//     padding:10,
//     fontSize:18,
//     height:44,
//   },
// });

/*
  网络
*/

function getMoviesFromApiAsync() {
  return fetch("https://facebook.github.io/react-native/movies.json")
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.movies;
    })
    .catch(error => {
      console.error(error);
    });
}

// asyn fuction getMoviesFromApi() {
//    try {

//         // 注意这里的await语句，其所在的函数必须有async关键字声明
//       let  response  = await fetch(
//           "https://facebook.github.io/react-native/movies.json"
//        );

//       let responseJson = await response.json();
//       return  response.movies;
//    } catch(error){
//         console.error(error);
//    }

// }



