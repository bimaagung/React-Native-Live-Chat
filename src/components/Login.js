//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Header, Button } from 'react-native-elements';

// create a component
class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            avatar:'',
            disabled: true
        }
    }

    onLoginPressed(){
        console.log(`UserName is ${this.state.username} and Avatar is ${this.state.avatar}`);
    }

    showBtnContainer(){
        return (
            <Button
            title='Gabung Chat'
            backgroundColor='#2195f3'
            disabled={this.state.disabled}
            onPress={this.onLoginPressed.bind(this)}
            />
        );
    }

    onUserNameChanged(userName){
        if(userName && userName.length > 3){
            this.setState({
                disabled: false,
                username: userName
            });
        }else{
            this.setState({
                disabled: true
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{ text:'login', style: {color:'#fff', fontSize: 20} }}
                />

                <FormLabel>Nama</FormLabel>
                <FormInput
                    placeholder='ketik nama anda'
                    onChangeText={(username) => this.onUserNameChanged(username)}
                >
                </FormInput>
                <FormLabel>Avatar</FormLabel>
                <FormInput
                    placeholder='Ketik terserah'
                    onChangeText={avatar => this.setState({avatar})}
                >
                </FormInput>
                <View style={styles.btnContainer}>
                    {this.showBtnContainer()}
                </View>
               
                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnContainer: {
        marginTop: 20,
    },
});

//make this component available to the app
export default Login;
