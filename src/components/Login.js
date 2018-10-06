//import liraries
import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Header, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { login } from '../actions';

// create a component
class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            avatar:'',
            disabled: true
        }
        console.ignoredYellowBox = [
            'Setting a timer'
        ]
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user){
            this.props.navigation.navigate('Chat');
        }
    }

    onLoginPressed(){
       const {username, avatar} = this.state;
        this.props.login({username, avatar});
    }

    showBtnContainer(){
        if(this.props.loading) return <ActivityIndicator/>;
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

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        loading: state.auth.loading,
        user: state.auth.user,
    };
};
//make this component available to the app
export default connect(mapStateToProps, {login})(Login);
