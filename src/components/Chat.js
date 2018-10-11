//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableHighlight, KeyboardAvoidingView, Platform, Keyboard, ActivityIndicator } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { sendMessage, fetchMessages } from '../actions'
import ChatItem from './ChatItem';


// create a component
class Chat extends Component {
    constructor()
    {
        super();
        this.state = {
            text:'',
            disabled: true
        }

        console.ignoredYellowBox = [
            'Warning: Failed child context'
        ]

        console.ignoredYellowBox = [
            'Setting a timer'
        ]


    }

    componentDidMount(){
        this.props.fetchMessages();
    }

    onTyping(text){
        if (text && text.length >= 2){
            this.setState({
                disabled: false,
                text
            });
        }else{
            this.setState({
                disabled: true
            });
        }
    }

    showListOrSpinner(){
        if(this.props.fetching) {
            return (
                <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size='large' />
                </View>
            );
        }
        <FlatList 
            inverted //menaruh object ke bawah
            data = {this.props.messages}
            renderItem = {this.renderChatItem}
            keyExtractor = {this.keyExtractor}
        />

    }

    onSendBtnPressed() {
       this.props.sendMessage(this.state.text, this.props.user);
        this.textInput.clear();
        Keyboard.dismiss();
    }

    renderChatItem({item}){
        return <ChatItem message={item} />
    }

    keyExtractor = (item, index) => index;

    render() {
        const extraBtnStyle = this.state.disabled ? styles.disabledBtn : styles.enableBtn;
        let behavior = '';
        if(Platform.OS === 'android'){
            behavior='padding'
        }
        return (
            <View style={styles.container}>
                <Header  centerComponent={{ text:'Chat Global', style: {color:'#fff', fontSize: 20} }}/>
                
                { this.showListOrSpinner() }

                <KeyboardAvoidingView behavior='padding'>
                    <View style={styles.inputBar}>
                        <TextInput 
                            style={styles.textBox}
                            multiline
                            underlineColorAndroid ='#dadfea'
                            defaultHeight={30}
                            onChangeText={(text) => this.onTyping(text)}
                            ref={input =>  { this.textInput = input; } }    
                        />
                        <TouchableHighlight 
                            style={[styles.sendBtn, extraBtnStyle]}
                            disabled = {this.state.disabled}
                            onPress = {this.onSendBtnPressed.bind(this)}
                        >
                            <Text style={{color:'#fff'}}>
                                Send
                            </Text>
                        </TouchableHighlight>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: '#dadfea',
    },
    textBox: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: 14,
        paddingHorizontal: 10,
        flex: 1,
        paddingVertical: 10,
        marginLeft:5,
    },
    sendBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginLeft: 5,
    },
    enableBtn: {
        backgroundColor: '#476DC5',
    },
    disabledBtn: {
        backgroundColor: '#89a9f4',
    },
});

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        fetching: state.chat.fetching,
        messages: state.chat.messages
    }
}

//make this component available to the app
export default connect(mapStateToProps, { sendMessage, fetchMessages })(Chat);
