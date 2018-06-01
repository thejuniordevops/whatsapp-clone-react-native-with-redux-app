import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { changeMail, changePassword, authUser, loginError } from '../actions/AuthActions';

class formLogin extends Component {

    _authUser() {
        const { email, senha } = this.props;

        this.props.authUser({ email, senha });
    }

    render() {
        return (
            <ImageBackground
                style={{ flex: 1, width: null }}
                source={require('../imgs/bg.png')}
            >
                <View
                    style={{ flex: 1, padding: 10 }}
                >
                    <View
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Text
                            style={{ fontSize: 25, color: '#fff' }}
                        >
                            WhatsApp Clone
                        </Text>
                    </View>
                    <View
                        style={{ flex: 2 }}
                    >
                        <TextInput
                            value={this.props.email}
                            style={{ fontSize: 20, height: 45 }}
                            placeholderTextColor='#fff'
                            placeholder='E-mail'
                            onChangeText={text => this.props.changeMail(text)}
                        />
                        <TextInput
                            secureTextEntry
                            value={this.props.senha}
                            style={{ fontSize: 20, height: 45 }}
                            placeholderTextColor='#fff'
                            placeholderTextColor='#fff'
                            placeholder='Senha'
                            onChangeText={text => this.props.changePassword(text)}
                        />
                        <Text
                            style={{ color: '#ff0000', fontSize: 18 }}
                        >
                            {this.props.loginError}
                        </Text>
                        <TouchableHighlight
                            onPress={() => Actions.formRegister()}
                        >
                            <Text
                                style={{ fontSize: 20, color: '#fff' }}
                            >
                                Ainda não tem cadastro? Cadastre-se
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View
                        style={{ flex: 2 }}
                    >
                        <Button
                            title='Acessar'
                            color='#115e54'
                            onPress={() => this._authUser()}
                        />
                    </View>
                </View>
            </ImageBackground>
        );

    }

}

const mapStateToProps = state => (
    {
        email: state.AuthReducer.email,
        senha: state.AuthReducer.senha,
        loginError: state.AuthReducer.loginError
    }
);

export default connect(mapStateToProps, { changeMail, changePassword, authUser })(formLogin);